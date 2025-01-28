import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiUrl = 'https://geocoding-api.open-meteo.com/v1/search';

  constructor(private http: HttpClient) {}

  // Rechercher les coordonnées d'une ville
  getCoordinates(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        name: city,
      },
    });
  }
}
