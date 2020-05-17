import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamCoachingRoutingModule } from './team-coaching-routing.module';
import { TeamCoachingComponent } from './team-coaching.component';


@NgModule({
  declarations: [TeamCoachingComponent],
  imports: [
    CommonModule,
    TeamCoachingRoutingModule
  ]
})
export class TeamCoachingModule { }
