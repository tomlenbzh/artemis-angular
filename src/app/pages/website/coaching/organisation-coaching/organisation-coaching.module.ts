import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationCoachingRoutingModule } from './organisation-coaching-routing.module';
import { OrganisationCoachingComponent } from './organisation-coaching.component';


@NgModule({
  declarations: [OrganisationCoachingComponent],
  imports: [
    CommonModule,
    OrganisationCoachingRoutingModule
  ]
})
export class OrganisationCoachingModule { }
