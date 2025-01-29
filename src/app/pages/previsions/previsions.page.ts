import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.page.html',
  styleUrls: ['./previsions.page.scss'],
  standalone: false,
})
export class PrevisionsPage implements OnInit {
  cityName: string = '';
  latitude: number = 0;
  longitude: number = 0;
  previsions: any[] = [];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.cityName = params['city'];
      this.latitude = params['latitude'];
      this.longitude = params['longitude'];

      this.loadPrevisions();
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  loadPrevisions() {
    this.weatherService.getWeatherByCity(this.latitude, this.longitude).subscribe((data: any) => {
      const dailyWeather = data.daily;

      this.previsions = dailyWeather.time.map((date: string, index: number) => ({
        date: this.formatDate(date),
        minTemp: dailyWeather.temperature_2m_min[index],
        maxTemp: dailyWeather.temperature_2m_max[index],
        ...this.weatherService.translateWeatherCode(dailyWeather.weathercode[index]),
      }));
    });
  }
}