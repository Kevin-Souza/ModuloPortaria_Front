import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesComponent } from './visitantes.component';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VisitantesComponent
  ],
  imports: [
    CommonModule,
    VisitantesRoutingModule,
    FormsModule,
    PoModule
  ]
})
export class VisitantesModule { }
