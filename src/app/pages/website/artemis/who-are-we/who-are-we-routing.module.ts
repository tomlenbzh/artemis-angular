// Imports from Angular

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { WhoAreWeComponent } from './who-are-we.component';

const routes: Routes = [{ path: '', component: WhoAreWeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoAreWeRoutingModule {}
