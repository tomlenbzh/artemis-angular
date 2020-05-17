import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCoachingRoutingModule } from './individual-coaching-routing.module';
import { IndividualCoachingComponent } from './individual-coaching.component';


@NgModule({
  declarations: [IndividualCoachingComponent],
  imports: [
    CommonModule,
    IndividualCoachingRoutingModule
  ]
})
export class IndividualCoachingModule { }
