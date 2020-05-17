// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../material.module';

// Imports from current module
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';

// Imports from Components
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule, MaterialModule]
})
export class WebsiteModule {}
