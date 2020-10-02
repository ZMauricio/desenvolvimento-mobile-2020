import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesListaPageRoutingModule } from './clientes-lista-routing.module';

import { ClientesListaPage } from './clientes-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesListaPageRoutingModule
  ],
  declarations: [ClientesListaPage]
})
export class ClientesListaPageModule {}
