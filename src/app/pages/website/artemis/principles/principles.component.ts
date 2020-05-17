// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from services
import { LanguageService } from '../../../../services/language-service/language.service';
import { SubscriptionService } from '../../../../services/subscription-service/subscription.service';

// Imports from Models
import { PageHeader } from 'src/app/models/page-header.model';

// Imports from Data
import {
  StaticContent,
  PrinciplesFrContent,
  PrinciplesEngContent,
  PrinciplesRusContent
} from '../../../../data/artemis/principles/principles.data';

@Component({
  selector: 'artemis-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  private languageSubscription: Subscription;
  public staticContent = StaticContent;
  public dynamicTxt: any;
  public headerContent: PageHeader;

  constructor(
    private subscriptionService: SubscriptionService,
    private languageService: LanguageService,
    private titleService: Title
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.languageSubscription = this.languageService.languageSubject.subscribe(() => {
      this.setComponentTxt();
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.languageSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Sets component text */
  private setComponentTxt(): void {
    this.dynamicTxt = this.languageService.manageComponentText([
      PrinciplesFrContent,
      PrinciplesEngContent,
      PrinciplesRusContent
    ]);
    this.headerContent = {
      pageTitle: this.dynamicTxt.pageTitle,
      breadcrumbs: this.dynamicTxt.breadcrumbs
    };
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }
}
