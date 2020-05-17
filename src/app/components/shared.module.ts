// Imports from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Imports from Angular Material
import { MaterialModule } from '../material.module';

// Imports from Components
import { HeaderComponent } from './header/header.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { PageSmallHeaderComponent } from './page-small-header/page-small-header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { BoxListComponent } from './box-list/box-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PageIntroComponent } from './page-intro/page-intro.component';

// Imports from third party libraries
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuListItemComponent,
    SidenavComponent,
    CarouselComponent,
    QuotationComponent,
    FooterComponent,
    BoxComponent,
    PageSmallHeaderComponent,
    BreadcrumbComponent,
    ContactInformationComponent,
    SectionTitleComponent,
    BoxListComponent,
    ProfileComponent,
    ProgressBarComponent,
    PageIntroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollToModule.forRoot(),
    LazyLoadImageModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [
    HeaderComponent,
    MenuListItemComponent,
    SidenavComponent,
    CarouselComponent,
    QuotationComponent,
    FooterComponent,
    BoxComponent,
    PageSmallHeaderComponent,
    BreadcrumbComponent,
    ContactInformationComponent,
    SectionTitleComponent,
    BoxListComponent,
    ProfileComponent,
    ProgressBarComponent,
    PageIntroComponent
  ],
  exports: [
    HeaderComponent,
    MenuListItemComponent,
    SidenavComponent,
    CarouselComponent,
    QuotationComponent,
    FooterComponent,
    BoxComponent,
    PageSmallHeaderComponent,
    BreadcrumbComponent,
    ContactInformationComponent,
    SectionTitleComponent,
    BoxListComponent,
    ProfileComponent,
    ProgressBarComponent,
    PageIntroComponent
  ]
})
export class SharedModule { }
