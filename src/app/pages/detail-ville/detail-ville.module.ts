import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVillePage } from './detail-ville.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVillePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DetailVillePageModule {}
