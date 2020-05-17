// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from current module
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';

@NgModule({
  declarations: [BackofficeComponent],
  imports: [CommonModule, BackofficeRoutingModule]
})
export class BackofficeModule {}
