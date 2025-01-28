import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeatherByCity(latitude: number, longitude: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current_weather: 'true',
      },
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
}
