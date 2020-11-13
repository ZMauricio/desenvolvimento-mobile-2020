import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormExemploPageRoutingModule } from './form-exemplo-routing.module';

import { FormExemploPage } from './form-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormExemploPageRoutingModule
  ],
  declarations: [FormExemploPage]
})
export class FormExemploPageModule {}
