import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: false,
})
export class AccueilPage {
  weather: any = null;
  cityName: string = '';

  constructor(private weatherService: WeatherService) {}

  async ionViewWillEnter() {
    const position = await Geolocation.getCurrentPosition();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    this.weatherService.getWeatherByCity(latitude, longitude).subscribe((data: any) => {
      this.weather = data.current_weather;

      if (this.weather.temperature > 35) {
        alert('Alerte : Température élevée détectée');
      }
    });
  }

  async ngOnInit() {
    await this.loadCurrentLocationWeather();
  }

  async loadCurrentLocationWeather() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.weatherService.getWeatherByCity(latitude, longitude).subscribe((data: any) => {
        const currentWeather = data.current_weather;
        const dailyWeather = data.daily;

        this.cityName = data.city || 'Position Inconnue';

        this.weather = {
          temperature: currentWeather.temperature,
          weatherCode: currentWeather.weathercode,
          ...this.weatherService.translateWeatherCode(currentWeather.weathercode),
        };
      });
    } catch (error) {
      console.error('Erreur lors de la récupération de la météo :', error);
    }
  }
}