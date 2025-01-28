import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./pages/recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./pages/favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'detail-ville',
    loadChildren: () => import('./pages/detail-ville/detail-ville.module').then( m => m.DetailVillePageModule)
  },
  {
    path: 'previsions',
    loadChildren: () => import('./pages/previsions/previsions.module').then( m => m.PrevisionsPageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
