// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current module
import { ChangeManagementRoutingModule } from './change-management-routing.module';
import { ChangeManagementComponent } from './change-management.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

@NgModule({
  declarations: [ChangeManagementComponent],
  imports: [CommonModule, ChangeManagementRoutingModule, SharedModule, MaterialModule]
})
export class ChangeManagementModule {}
