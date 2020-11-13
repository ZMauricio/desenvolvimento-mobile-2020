import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormExemploPage } from './form-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: FormExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormExemploPageRoutingModule {}
