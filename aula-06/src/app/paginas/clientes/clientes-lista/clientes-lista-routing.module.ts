import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListaPage } from './clientes-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesListaPageRoutingModule {}
