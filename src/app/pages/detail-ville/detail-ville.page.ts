import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-detail-ville',
  templateUrl: './detail-ville.page.html',
  styleUrls: ['./detail-ville.page.scss'],
  standalone: false,
})
export class DetailVillePage {
  cityName: string = '';
  latitude: number = 0;
  longitude: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Récupérer les paramètres de la ville
    this.route.queryParams.subscribe((params) => {
      this.cityName = params['city'];
      this.latitude = params['latitude'];
      this.longitude = params['longitude'];
    });
  }

  goToPrevisions() {
    this.router.navigate(['/previsions'], {
      queryParams: {
        city: this.cityName,
        latitude: this.latitude,
        longitude: this.longitude,
      },
    });
  }
}
