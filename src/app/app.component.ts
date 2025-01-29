import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}

  async ngOnInit() {
    // Demander la permission pour les notifications locales
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display === 'granted') {
      this.scheduleWeatherUpdates();
    }
  }

  async scheduleWeatherUpdates() {
    const position = await Geolocation.getCurrentPosition();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'Météo locale',
          body: 'Mise à jour météo en cours...',
          schedule: { every: 'hour' },
          extra: { latitude, longitude },
        },
      ],
    });

    // Écouter les notifications pour mettre à jour la météo
    LocalNotifications.addListener('localNotificationActionPerformed', async (notification) => {
      const { latitude, longitude } = notification.notification.extra;
      this.weatherService.getWeatherByCity(latitude, longitude).subscribe((data: any) => {
        LocalNotifications.schedule({
          notifications: [
            {
              id: 2,
              title: 'Météo mise à jour',
              body: `Température : ${data.current_weather.temperature}°C`,
            },
          ],
        });
      });
    });
  }
}
