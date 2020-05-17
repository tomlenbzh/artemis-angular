// Imports from Angular

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { ApproachComponent } from './approach.component';

const routes: Routes = [{ path: '', component: ApproachComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproachRoutingModule {}
