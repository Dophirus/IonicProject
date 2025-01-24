import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AccueilPageModule {}
