// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../../material.module';

// Imports from current component
import { EthicsRoutingModule } from './ethics-routing.module';
import { EthicsComponent } from './ethics.component';

// Imports from Components
import { SharedModule } from '../../../../components/shared.module';

// Imports from third party libraries
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { EthicsDirective } from './ethics.directive';

@NgModule({
  declarations: [EthicsComponent, EthicsDirective],
  imports: [CommonModule, EthicsRoutingModule, SharedModule, LazyLoadImageModule, MaterialModule]
})
export class EthicsModule {}
