import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeoCoachingRoutingModule } from './ceo-coaching-routing.module';
import { CeoCoachingComponent } from './ceo-coaching.component';


@NgModule({
  declarations: [CeoCoachingComponent],
  imports: [
    CommonModule,
    CeoCoachingRoutingModule
  ]
})
export class CeoCoachingModule { }
