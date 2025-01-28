import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeocodingService } from '../../services/geocoding.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
  standalone: false,
})
export class RecherchePage {
  cityName: string = '';
  weather: any = null;

  constructor(
    private geocodingService: GeocodingService,
    private weatherService: WeatherService
  ) {}

  searchCity() {
    if (!this.cityName.trim()) {
      alert('Veuillez entrer un nom de ville.');
      return;
    }

    this.geocodingService.getCoordinates(this.cityName).subscribe((data: any) => {
      if (data.results && data.results.length > 0) {
        const { latitude, longitude } = data.results[0];

        this.weatherService.getWeatherByCity(latitude, longitude).subscribe((weatherData: any) => {
          this.weather = weatherData.current_weather;
        });
      } else {
        alert('Ville introuvable.');
      }
    });
  }
}