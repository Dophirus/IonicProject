import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavorisService } from '../../services/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FavorisPage {
  favoriteCities: string[] = [];
  newFavorite: string = '';

  constructor(private favorisService: FavorisService) {}

  async ionViewWillEnter() {
    this.favoriteCities = await this.favorisService.getFavorites();
  }

  async addFavorite() {
    if (!this.newFavorite.trim()) {
      alert('Veuillez entrer un nom de ville.');
      return;
    }
    await this.favorisService.addFavorite(this.newFavorite);
    this.favoriteCities = await this.favorisService.getFavorites();
    this.newFavorite = '';
  }

  viewCityDetails(city: string) {
    console.log('Afficher les détails pour :', city);
    // Naviguer vers la page Détail Ville
  }
}
