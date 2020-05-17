// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from Angular Material
import { MatSidenav } from '@angular/material/sidenav';

// Imports from Components
import { HeaderComponent } from '../../components/header/header.component';

// Imports from services
import { LanguageService } from '../../services/language-service/language.service';
import { SubscriptionService } from '../../services/subscription-service/subscription.service';
import { ScrollService } from '../../services/scroll-service/scroll.service';

// Imports from Models
import { LanguageEnum } from '../../models/language.model';
import { NavItem } from '../../models/nav-item.model';

// Imports from Data
import { MenuFrContent } from '../../data/layout/menu/menu.data';

@Component({
  selector: 'artemis-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

  private languageSubscription: Subscription;

  public state = 'hide';
  public navMode = 'over';
  public isOnTop = true;

  constructor(
    private subscriptionService: SubscriptionService,
    private languageService: LanguageService,
    public scrollService: ScrollService
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    if (!this.languageService.checkStorageLanguage()) {
      this.languageService.setLanguage(LanguageEnum.FRENCH);
    }
  }

  ngAfterViewInit(): void {
    this.scrollService.setEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngOnDestroy(): void {
    this.scrollService.removeEventListener('scroll', this.onScroll.bind(this), true);
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.languageSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  // Closes sidenav
  public closeNav(emittedData: string): void {
    if (emittedData === 'toggle') {
      this.sidenav.toggle();
    } else {
      return;
    }
  }

  // Checks scroll distance from top
  private onScroll(): void {
    this.isOnTop = window.scrollY > 50 ? false : true;
  }
}
