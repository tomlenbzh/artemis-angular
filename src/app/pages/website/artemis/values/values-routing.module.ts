// Imports from Angular

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { ValuesComponent } from './values.component';

const routes: Routes = [{ path: '', component: ValuesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValuesRoutingModule {}
