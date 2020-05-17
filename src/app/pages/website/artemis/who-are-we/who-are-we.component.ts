// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from services
import { LanguageService } from '../../../../services/language-service/language.service';
import { SubscriptionService } from '../../../../services/subscription-service/subscription.service';

// Imports from Models
import { PageHeader } from '../../../../models/page-header.model';

// Imports from Data
import {
  StaticContent,
  WhoAreWeFrContent,
  WhoAreWeEngContent,
  WhoAreWeRusContent
} from '../../../../data/artemis/who-are-we/who-are-we.data';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'artemis-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  private languageSubscription: Subscription;
  public staticContent = StaticContent;
  public dynamicTxt: any;
  public headerContent: PageHeader;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

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
      WhoAreWeFrContent,
      WhoAreWeEngContent,
      WhoAreWeRusContent
    ]);
    this.headerContent = {
      pageTitle: this.dynamicTxt.pageTitle,
      breadcrumbs: this.dynamicTxt.breadcrumbs
    };
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }
}
