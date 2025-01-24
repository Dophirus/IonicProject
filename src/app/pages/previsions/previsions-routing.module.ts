import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisionsPage } from './previsions.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisionsPageRoutingModule {}
