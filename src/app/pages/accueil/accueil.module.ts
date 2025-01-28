import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPage } from './accueil.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AccueilPageRoutingModule } from './accueil-routing.module';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
  },
];

@NgModule({
  imports: [AccueilPageRoutingModule, IonicModule, CommonModule],
  declarations : [AccueilPage]
})
export class AccueilPageModule {}
