import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorisPage } from './favoris.page';
import { IonicModule } from '@ionic/angular';
import { FavorisPageRoutingModule } from './favoris-routing.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FavorisPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FavorisPageRoutingModule
  ],
  declarations: [FavorisPage]
})
export class FavorisPageModule {}
