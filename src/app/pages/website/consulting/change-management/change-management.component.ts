// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

// Imports from services
import { LanguageService } from '../../../../services/language-service/language.service';
import { SubscriptionService } from '../../../../services/subscription-service/subscription.service';

// Imports from Models
import { PageHeader } from '../../../../models/page-header.model';
import { PageIntro } from '../../../../models/page-intro.model';

// Imports from Data
import {
  StaticContent,
  ChangeManagementFrContent,
  ChangeManagementEngContent,
  ChangeManagementRusContent
} from '../../../../data/consulting/change-management.data';

@Component({
  selector: 'artemis-change-management',
  templateUrl: './change-management.component.html',
  styleUrls: ['./change-management.component.scss']
})
export class ChangeManagementComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  private languageSubscription: Subscription;
  public staticContent = StaticContent;
  public dynamicTxt: any;
  public headerContent: PageHeader;
  public pageIntro: PageIntro;

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
      ChangeManagementFrContent,
      ChangeManagementEngContent,
      ChangeManagementRusContent
    ]);
    this.headerContent = {
      pageTitle: this.dynamicTxt.pageTitle,
      breadcrumbs: this.dynamicTxt.breadcrumbs
    };
    this.pageIntro = {
      images: {
        full: this.staticContent.intro[0].img,
        fullStyle: this.staticContent.intro[0].style,
        top: this.staticContent.intro[1].imgTop,
        topStyle: this.staticContent.intro[1].style
      },
      desc: this.dynamicTxt.intro
    };
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }
}
