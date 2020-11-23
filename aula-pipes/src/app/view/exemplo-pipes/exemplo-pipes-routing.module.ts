import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExemploPipesPage } from './exemplo-pipes.page';

const routes: Routes = [
  {
    path: '',
    component: ExemploPipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemploPipesPageRoutingModule {}
