import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { FavorisService } from '../../services/favoris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
  standalone: false,
})
export class FavorisPage {
  favoriteCities: any[] = [];
  cityWeather: { [key: string]: any } = {};

  constructor(
    private favorisService: FavorisService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteCities = this.favorisService.getFavorites();
  
    this.favoriteCities.forEach((city) => {
      this.weatherService
        .getWeatherByCity(city.latitude, city.longitude)
        .subscribe({
          next: (data: any) => {
            const currentWeather = data.current_weather;
            const dailyWeather = data.daily;
  
            this.cityWeather[city.name] = {
              temperature: currentWeather.temperature,
              weatherCode: currentWeather.weathercode,
              minTemp: dailyWeather.temperature_2m_min[0],
              maxTemp: dailyWeather.temperature_2m_max[0],
              ...this.weatherService.translateWeatherCode(currentWeather.weathercode),
            };
          },
          error: (error) => {
            console.error(`Erreur lors de la récupération des données pour ${city.name}:`, error);
          }
        });
    });
  }

  async removeFavorite(cityName: string) {
    this.favorisService.removeFavorite(cityName);
    this.loadFavorites();
  }

  viewCityDetails(city: any) {
    this.router.navigate(['/detail-ville'], {
      queryParams: {
        city: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
      },
    });
  }
}
