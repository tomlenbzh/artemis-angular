// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../material.module';

// Imports from current module
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

// Imports from Components
import { SharedModule } from '../../../components/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule, MaterialModule]
})
export class ContactModule {}
