// Imports from Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { TeamBuildingComponent } from './team-building.component';

const routes: Routes = [{ path: '', component: TeamBuildingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamBuildingRoutingModule {}
