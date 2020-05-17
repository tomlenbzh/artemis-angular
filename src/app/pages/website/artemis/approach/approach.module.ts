// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current component
import { ApproachRoutingModule } from './approach-routing.module';
import { ApproachComponent } from './approach.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

// Imports from third party libraries
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ApproachComponent],
  imports: [CommonModule, ApproachRoutingModule, SharedModule, LazyLoadImageModule, MaterialModule]
})
export class ApproachModule {}
