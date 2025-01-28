import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecherchePage } from './recherche.page';
import { RecherchePageRoutingModule } from './recherche-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RecherchePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecherchePageRoutingModule
  ],
  declarations: [RecherchePage]
})
export class RecherchePageModule {}