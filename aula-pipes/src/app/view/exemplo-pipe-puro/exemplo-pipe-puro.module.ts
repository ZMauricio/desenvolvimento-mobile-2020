import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExemploPipePuroPageRoutingModule } from './exemplo-pipe-puro-routing.module';

import { ExemploPipePuroPage } from './exemplo-pipe-puro.page';

import { PotenciaPipe } from './../../pipes/potencia.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExemploPipePuroPageRoutingModule
  ],
  declarations: [
    ExemploPipePuroPage,
    PotenciaPipe
  ]
})
export class ExemploPipePuroPageModule {}
