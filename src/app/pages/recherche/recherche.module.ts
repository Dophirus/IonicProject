import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecherchePage } from './recherche.page';

const routes: Routes = [
  {
    path: '',
    component: RecherchePage, // Utilisation directe du composant autonome
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RecherchePageModule {}