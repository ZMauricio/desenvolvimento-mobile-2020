import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipeImpuroPageRoutingModule } from './pipe-impuro-routing.module';

import { PipeImpuroPage } from './pipe-impuro.page';

import { AlunosMatriculadosPipe } from './../../pipes/alunos-matriculados.pipe';
import { AlunosMatriculadosImpuroPipe } from 'src/app/pipes/alunos-matriculados-impuro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeImpuroPageRoutingModule
  ],
  declarations: [
    PipeImpuroPage, 
    AlunosMatriculadosPipe,
    AlunosMatriculadosImpuroPipe
  ]
})
export class PipeImpuroPageModule {}
