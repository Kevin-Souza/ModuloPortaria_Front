import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    VisitantesComponent
  ],
  imports: [
    CommonModule,
    VisitantesRoutingModule,
    PoModule
  ]
})
export class VisitantesModule { }
