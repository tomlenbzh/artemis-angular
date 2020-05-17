// Imports from Angular
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';

// Imports RXJS
import { Subscription } from 'rxjs';

// Imports from Services
import { LanguageService } from '../../services/language-service/language.service';
import { SubscriptionService } from '../../services/subscription-service/subscription.service';
import { NavService } from '../../services/navigation-service/nav.service';
import { SidenavService } from '../../services/sidenav-service/sidenav.service';

// Imports from Models
import { NavItem } from '../../models/nav-item.model';
import { LanguageEnum } from '../../models/language.model';

// Imports from Data
import { MenuFrContent, MenuEngContent, MenuRusContent } from '../../data/layout/menu/menu.data';
import { HeaderLogo } from '../../data/layout/header/header.data';

@Component({
  selector: 'artemis-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @Input() isOnTop: boolean;

  private languageSubscription: Subscription;
  private sidenavSubscription: Subscription;
  private isSidenavOpen: boolean;

  public headerLogo = HeaderLogo;
  public componentTxt: any;
  // public navItems: NavItem[] = [];

  constructor(
    private navService: NavService,
    private sidenavService: SidenavService,
    private languageService: LanguageService,
    private subscriptionService: SubscriptionService
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(() => {
      this.setComponentTxt();
    });
    this.sidenavSubscription = this.sidenavService.isSidnavOpen.subscribe((value: boolean) => {
      this.isSidenavOpen = value;
    });
  }

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([
      this.languageSubscription,
      this.sidenavSubscription
    ]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Detect sidenav toggle */
  public toggleSidenav(): void {
    this.sidenavService.isSidnavOpen.next(!this.isSidenavOpen);
  }

  /* Check parent or child menu */
  public manageAction(item: NavItem): void {
    item.type === 'ROUTE' ? this.navService.navigateTo(item.route) : this.setLanguage(item.language);
  }

  /* Set new language */
  public setLanguage(newLanguage: LanguageEnum): void {
    this.languageService.setLanguage(newLanguage);
  }

  /* Set component text */
  private setComponentTxt(): void {
    this.componentTxt = this.languageService.manageComponentText([MenuFrContent, MenuEngContent, MenuRusContent]);
  }

  /* Retrieve path to current language path */
  public getCurrentFlag(item: NavItem): string {
    return this.languageService.getCurrentFlag(item.children);
  }

  /* Check if item is last in the list */
  public isLastItem(items: NavItem[], index: number): boolean {
    return index === items.length - 1 ? true : false;
  }
}
