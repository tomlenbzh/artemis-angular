// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current module
import { TeamBuildingRoutingModule } from './team-building-routing.module';
import { TeamBuildingComponent } from './team-building.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

@NgModule({
  declarations: [TeamBuildingComponent],
  imports: [CommonModule, TeamBuildingRoutingModule, SharedModule, MaterialModule]
})
export class TeamBuildingModule {}
