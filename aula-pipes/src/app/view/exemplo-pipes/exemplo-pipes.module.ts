import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExemploPipesPageRoutingModule } from './exemplo-pipes-routing.module';

import { ExemploPipesPage } from './exemplo-pipes.page';

import { MeuPipePipe } from './../../pipes/meu-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExemploPipesPageRoutingModule
  ],
  declarations: [
    ExemploPipesPage,
    MeuPipePipe
  ]
})
export class ExemploPipesPageModule {}
