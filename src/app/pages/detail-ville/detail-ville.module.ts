import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVillePage } from './detail-ville.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailVillePageRoutingModule } from './detail-ville-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DetailVillePage,
  },
];

@NgModule({
  imports: [DetailVillePageRoutingModule, IonicModule, CommonModule],
  declarations: [DetailVillePage]
})
export class DetailVillePageModule {}
