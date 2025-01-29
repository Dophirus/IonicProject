import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private FAVORITES_KEY = 'favorites';

  constructor(private storageService: StorageService) {}

  async addFavorite(city: any): Promise<void> {
    const favorites = this.getFavorites();
    favorites.push(city);
    this.storageService.setItem(this.FAVORITES_KEY, favorites);

    await Toast.show({
      text: `${city.name} a été ajouté aux favoris !`,
      duration: 'short',
    });
  }

  getFavorites(): any[] {
    return this.storageService.getItem(this.FAVORITES_KEY) || [];
  }

  async removeFavorite(cityName: string): Promise<void> {
    const favorites = this.getFavorites().filter((city) => city.name !== cityName);
    this.storageService.setItem(this.FAVORITES_KEY, favorites);

    await Toast.show({
      text: `${cityName} a été retiré des favoris`,
      duration: 'short',
    });
  }

  isFavorite(cityName: string): boolean {
    return this.getFavorites().some((city) => city.name === cityName);
  }
}
