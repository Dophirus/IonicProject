import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVillePage } from './detail-ville.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVillePageRoutingModule {}
