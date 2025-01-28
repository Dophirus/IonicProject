import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-detail-ville',
  templateUrl: './detail-ville.page.html',
  styleUrls: ['./detail-ville.page.scss'],
  standalone: false,
})
export class DetailVillePage {
  cityName: string = '';
  forecast: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const latitude = params['latitude'];
      const longitude = params['longitude'];
      this.cityName = params['city'];

      // Obtenir les prévisions météo
      this.weatherService.getForecastByCity(latitude, longitude).subscribe((data: any) => {
        this.forecast = data.daily.time.map((date: string, index: number) => ({
          date,
          temp_max: data.daily.temperature_2m_max[index],
          temp_min: data.daily.temperature_2m_min[index],
        }));
      });
    });
  }
}
