import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExemploPipePuroPage } from './exemplo-pipe-puro.page';

const routes: Routes = [
  {
    path: '',
    component: ExemploPipePuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemploPipePuroPageRoutingModule {}
