// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current component
import { PrinciplesRoutingModule } from './principles-routing.module';
import { PrinciplesComponent } from './principles.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

@NgModule({
  declarations: [PrinciplesComponent],
  imports: [CommonModule, PrinciplesRoutingModule, SharedModule, MaterialModule]
})
export class PrinciplesModule {}
