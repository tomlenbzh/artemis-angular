// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current component
import { ValuesRoutingModule } from './values-routing.module';
import { ValuesComponent } from './values.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

// Imports from third party libraries
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ValuesComponent],
  imports: [CommonModule, ValuesRoutingModule, SharedModule, LazyLoadImageModule, MaterialModule]
})
export class ValuesModule {}
