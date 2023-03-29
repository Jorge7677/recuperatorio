import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JorgecolqueRoutingModule } from './jorgecolque-routing.module';
import { JorgecolqueComponent } from './jorgecolque.component';


@NgModule({
  declarations: [
    JorgecolqueComponent
  ],
  imports: [
    CommonModule,
    JorgecolqueRoutingModule
  ]
})
export class JorgecolqueModule { }
