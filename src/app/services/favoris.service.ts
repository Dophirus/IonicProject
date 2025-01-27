import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async addFavorite(city: string) {
    let favorites = (await this.storage.get('favorites')) || [];
    if (!favorites.includes(city)) {
      favorites.push(city);
      await this.storage.set('favorites', favorites);
    }
  }

  async getFavorites() {
    return await this.storage.get('favorites') || [];
  }
}
