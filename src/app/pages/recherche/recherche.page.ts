import { Component } from '@angular/core';
import { GeocodingService } from '../../services/geocoding.service';
import { WeatherService } from '../../services/weather.service';
import { FavorisService } from '../../services/favoris.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
  standalone: false,
})
export class RecherchePage {
  cityName: string = '';
  weather: any = null;
  suggestions: any[] = [];

  constructor(
    private geocodingService: GeocodingService,
    private weatherService: WeatherService,
    private favorisService: FavorisService
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

  addToFavorites(suggestion: any) {
    this.favorisService.addFavorite({
      name: suggestion.name,
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
    });
    alert(`${suggestion.name} a été ajouté aux favoris.`);
  }

    
  onSearchChange(event: any) {
    const query = event.target.value;

    if (query.length > 2) {
      this.geocodingService.getCoordinates(query).subscribe((data: any) => {
        if (data.results) {
          this.suggestions = data.results;
        } else {
          this.suggestions = [];
        }
      });
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: any) {
    this.cityName = suggestion.name;
    this.suggestions = [];
  }
}