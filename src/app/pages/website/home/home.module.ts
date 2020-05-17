// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MaterialModule } from '../../../material.module';

// Imports from current module
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// Imports from Components
import { SharedModule } from '../../../components/shared.module';

// Imports from third party libraries
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    ScrollToModule,
    LazyLoadImageModule,
    CarouselModule
  ]
})
export class HomeModule {}
