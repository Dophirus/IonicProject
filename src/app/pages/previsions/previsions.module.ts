import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisionsPage } from './previsions.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisionsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PrevisionsPageModule {}