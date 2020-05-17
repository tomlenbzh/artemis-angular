import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    LazyLoadImageModule.forRoot({ preset: scrollPreset })
  ],
  providers: [ScrollToService],
  bootstrap: [AppComponent]
})
export class AppModule {}
