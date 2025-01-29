import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  // Obtenir la météo actuelle et prévisions quotidiennes pour une ville donnée
  getWeatherByCity(latitude: number, longitude: number): Observable<any> {
    const cacheKey = `weather_${latitude}_${longitude}`;
    const cachedData = this.storageService.getItem(cacheKey);

    if (cachedData) {
      // Si les données sont en cache, les retourner sous forme d'Observable
      return new Observable((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    }

    // Sinon, effectuer un appel API et stocker les données dans le cache
    return new Observable((observer) => {
      this.http
        .get(`${this.apiUrl}`, {
          params: {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            current_weather: 'true',
            daily: 'temperature_2m_max,temperature_2m_min,weathercode',
            timezone: 'auto',
          },
        })
        .subscribe({
          next: (data: any) => {
            this.storageService.setItem(cacheKey, data);
            observer.next(data);
            observer.complete();
          },
          error: (error) => observer.error(error)
        });
    });
  }

  getForecastByCity(latitude: number, longitude: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        daily: 'temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
      },
    });
  }

  translateWeatherCode(weatherCode: number): { description: string; icon: string } {
    const mapping: { [key: number]: { description: string; icon: string } } = {
      0: { description: 'Ciel dégagé', icon: 'sunny-outline' },
      1: { description: 'Principalement dégagé', icon: 'partly-sunny-outline' },
      2: { description: 'Partiellement nuageux', icon: 'cloud-outline' },
      3: { description: 'Couvert', icon: 'cloudy-outline' },
      45: { description: 'Brouillard', icon: 'cloudy-night-outline' },
      48: { description: 'Brouillard givrant', icon: 'snow-outline' },
      51: { description: 'Bruine légère', icon: 'rainy-outline' },
      61: { description: 'Pluie légère', icon: 'rainy-outline' },
      80: { description: 'Averses', icon: 'thunderstorm-outline' },
      95: { description: 'Orage', icon: 'thunderstorm-outline' },
    };

    return mapping[weatherCode] || { description: 'Non défini', icon: 'help-outline' };
  }
}
