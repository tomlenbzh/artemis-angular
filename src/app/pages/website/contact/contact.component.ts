// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

// Imports from services
import { LanguageService } from '../../../services/language-service/language.service';
import { SubscriptionService } from '../../../services/subscription-service/subscription.service';

// Imports from Models
import { PageHeader } from '../../../models/page-header.model';

// Imports from Data
import {
  StaticContent,
  ContactFrContent,
  ContactEngContent,
  ContactRusContent
} from '../../../data/contact/contact.data';

@Component({
  selector: 'artemis-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit {
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

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.languageSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Sets component text */
  private setComponentTxt(): void {
    this.dynamicTxt = this.languageService.manageComponentText([
      ContactFrContent,
      ContactEngContent,
      ContactRusContent
    ]);
    this.headerContent = {
      pageTitle: this.dynamicTxt.pageTitle,
      breadcrumbs: this.dynamicTxt.breadcrumbs
    };
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }
}
