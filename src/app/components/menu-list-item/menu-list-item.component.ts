// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

// Imports from Animations
import { trigger, state, transition, style, animate } from '@angular/animations';

// Imports RXJS
import { Subscription } from 'rxjs';

// Imports from Models
import { NavItem } from '../../models/nav-item.model';

// Imports from Services
import { SidenavService } from '../../services/sidenav-service/sidenav.service';
import { NavService } from '../../services/navigation-service/nav.service';
import { LanguageService } from '../../services/language-service/language.service';
import { SubscriptionService } from '../../services/subscription-service/subscription.service';

// Imports from Data
import { LanguageEnum } from '../../models/language.model';

@Component({
  selector: 'artemis-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(-90deg)' })),
      state('expanded', style({ transform: 'rotate(0deg)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class MenuListItemComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  @Input() navItem: NavItem;
  @Input() depth: number;
  @Input() index: number;
  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @Output() emitIndex: EventEmitter<number> = new EventEmitter();

  public expanded: boolean;
  private sidenavSubscription: Subscription;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  constructor(
    private navService: NavService,
    private sidenavService: SidenavService,
    private languageService: LanguageService,
    private subscriptionService: SubscriptionService
  ) {
    this.depth = this.depth === undefined ? 0 : undefined;
  }

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.sidenavSubscription = this.sidenavService.sidenavSubject.subscribe(selectedIndex => {
      selectedIndex === this.index
        ? ((this.expanded = !this.expanded), (this.ariaExpanded = this.expanded))
        : ((this.expanded = false), (this.ariaExpanded = this.expanded));
    });
  }

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.sidenavSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Toggle item button */
  public toggleChildren() {
    if (this.navItem.children) {
      this.sidenavService.sidenavSubject.next(this.index);
    } else {
      this.navItem.type === 'ROUTE'
        ? this.navService.navigateTo(this.navItem.route)
        : this.setLanguage(this.navItem.language);
    }
  }

  /* Set new language */
  public setLanguage(newLanguage: LanguageEnum): void {
    this.languageService.setLanguage(newLanguage);
  }

  /* Retrieve path to current language path */
  public getCurrentFlag(item: NavItem): string {
    return this.languageService.getCurrentFlag(item.children);
  }
}
