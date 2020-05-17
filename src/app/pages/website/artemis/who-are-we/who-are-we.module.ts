// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current component
import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { WhoAreWeComponent } from './who-are-we.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

// Imports from third party libraries
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [WhoAreWeComponent],
  imports: [CommonModule, WhoAreWeRoutingModule, MaterialModule, SharedModule, LazyLoadImageModule]
})
export class WhoAreWeModule {}
