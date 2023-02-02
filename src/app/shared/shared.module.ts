import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Titulosx20Directive } from './directive/titulosx20.directive';
import { upperCase } from './pipe/uppercase';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    Titulosx20Directive,
    upperCase,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    Titulosx20Directive,
    upperCase,
  ]
})

export class SharedModule { }
