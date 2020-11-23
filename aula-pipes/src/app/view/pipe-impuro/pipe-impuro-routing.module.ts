import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeImpuroPage } from './pipe-impuro.page';

const routes: Routes = [
  {
    path: '',
    component: PipeImpuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipeImpuroPageRoutingModule {}
