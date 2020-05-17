// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from services
import { LanguageService } from '../../../services/language-service/language.service';
import { SubscriptionService } from '../../../services/subscription-service/subscription.service';
import { ScrollService } from '../../../services/scroll-service/scroll.service';

// Imports from Data
import { StaticContent, HomeFrContent, HomeEngContent, HomeRusContent } from '../../../data/home/home.data';

@Component({
  selector: 'artemis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  private languageSubscription: Subscription;
  public staticContent = StaticContent;
  public dynamicTxt: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private languageService: LanguageService,
    private scrollService: ScrollService,
    private titleService: Title
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(() => {
      this.setComponentTxt();
    });
  }

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.languageSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Scrolls to target in page */
  public scrollTo(dest: string, duration: number, offset: number): void {
    this.scrollService.triggerScrollTo(dest, duration, offset);
  }

  /* Sets component text */
  private setComponentTxt(): void {
    this.dynamicTxt = this.languageService.manageComponentText([HomeFrContent, HomeEngContent, HomeRusContent]);
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }
}
