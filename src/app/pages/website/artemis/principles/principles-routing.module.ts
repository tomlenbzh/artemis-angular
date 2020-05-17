// Imports from Angular

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { PrinciplesComponent } from './principles.component';

const routes: Routes = [{ path: '', component: PrinciplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinciplesRoutingModule {}
