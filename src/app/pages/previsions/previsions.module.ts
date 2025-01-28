import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisionsPage } from './previsions.page';
import { PrevisionsPageRoutingModule } from './previsions-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PrevisionsPage,
  },
];

@NgModule({
  imports: [PrevisionsPageRoutingModule, IonicModule, CommonModule],
  declarations: [PrevisionsPage]
})
export class PrevisionsPageModule {}