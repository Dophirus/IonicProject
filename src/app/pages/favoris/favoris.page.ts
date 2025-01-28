import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
  standalone: false,
})
export class FavorisPage {
  favoriteCities: { name: string; latitude: number; longitude: number }[] = [
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { name: 'New York', latitude: 40.7128, longitude: -74.006 },
    { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  ]; // Exemple de villes favorites
  cityWeather: { [key: string]: any } = {}; // Stocke les données météo pour chaque ville

  constructor(private weatherService: WeatherService, private router: Router) {}

  // Chargement des données météo pour les villes favorites
  async ionViewWillEnter() {
    for (const city of this.favoriteCities) {
      this.weatherService
        .getWeatherByCity(city.latitude, city.longitude)
        .subscribe((data: any) => {
          this.cityWeather[city.name] = {
            temperature: data.current_weather.temperature,
            weathercode: data.current_weather.weathercode,
          };
        });
    }
  }

  // Navigation vers la page Détail Ville
  viewCityDetails(city: { name: string; latitude: number; longitude: number }) {
    this.router.navigate(['/detail-ville'], {
      queryParams: {
        city: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
      },
    });
  }
}
