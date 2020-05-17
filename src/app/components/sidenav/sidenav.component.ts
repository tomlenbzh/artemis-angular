// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from services
import { SidenavService } from '../../services/sidenav-service/sidenav.service';
import { LanguageService } from '../../services/language-service/language.service';
import { SubscriptionService } from '../../services/subscription-service/subscription.service';

// Imports from Models
import { NavItem } from '../../models/nav-item.model';

// Imports from Data
import { MenuFrContent, MenuEngContent, MenuRusContent } from '../../data/layout/menu/menu.data';

// Imports from third party libraries
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'artemis-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  private overlayElement = null;
  private sidenavSubscription: Subscription;
  private languageSubscription: Subscription;

  public selectedItemIndex: number;
  public isSidenavOpen: boolean;
  public componentTxt: any;

  constructor(
    private sidenavService: SidenavService,
    private languageService: LanguageService,
    private subscriptionService: SubscriptionService
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.overlayElement = document.querySelector('#overlay');
    this.sidenavSubscription = this.sidenavService.isSidnavOpen.subscribe(isSidenavOpen => {
      this.isSidenavOpen = isSidenavOpen;
      this.lockBody();
    });
    this.languageSubscription = this.languageService.languageSubject.subscribe(() => {
      this.setComponentTxt();
    });
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([
      this.languageSubscription,
      this.sidenavSubscription
    ]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Blocks scroll on body element */
  private lockBody(): void {
    this.isSidenavOpen === true ? disableBodyScroll(this.overlayElement) : enableBodyScroll(this.overlayElement),
      this.sidenavService.sidenavSubject.next(null);
  }

  /* Opens and closes the sidenav */
  public toggleSidenav(value: boolean): void {
    this.sidenavService.isSidnavOpen.next(value);
  }

  /* Set component text */
  private setComponentTxt(): void {
    this.componentTxt = this.languageService.manageComponentText([MenuFrContent, MenuEngContent, MenuRusContent]);
  }
}
