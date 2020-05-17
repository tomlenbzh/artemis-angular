// Imports from Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports from Components
import { ChangeManagementComponent } from './change-management.component';

const routes: Routes = [{ path: '', component: ChangeManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeManagementRoutingModule {}
