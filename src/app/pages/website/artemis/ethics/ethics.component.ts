// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, HostBinding, Input } from '@angular/core';
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
  EthicsFrContent,
  EthicsEngContent,
  EthicsRusContent
} from '../../../../data/artemis/ethics/ethics.data';

// import { expandProgress, contractProgress } from '../../../../animations/carousel.animations';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { ProgressBarData } from '../../../../models/progress-bar.model';

@Component({
  selector: 'artemis-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
  // animations: [
  // trigger('slideInOut', [
  //   state(
  //     'true',
  //     style({
  //       width: '25%'
  //     })
  //   ),
  //   state(
  //     'false',
  //     style({
  //       width: '0px'
  //     })
  //   ),
  //   transition('in => out', [animate('400ms ease-in-out')]),
  //   transition('out => in', animate('400ms ease-in-out'))
  // ])
  // }
})
export class EthicsComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  private languageSubscription: Subscription;
  public staticContent = StaticContent;
  public dynamicTxt: any;
  public headerContent: PageHeader;

  public progressWidth: number;
  public value: number;

  public load = false;
  public progressData: ProgressBarData;

  constructor(
    private subscriptionService: SubscriptionService,
    private languageService: LanguageService,
    private titleService: Title
  ) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.progressData = {
      label: 'Progress bar',
      percent: 25
    };
    this.progressWidth = 0;
    this.value = 25;
    this.languageSubscription = this.languageService.languageSubject.subscribe(() => {
      this.setComponentTxt();
    });
    this.increaseCounter();
    this.load = true;
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.languageSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Sets component text */
  private setComponentTxt(): void {
    this.dynamicTxt = this.languageService.manageComponentText([EthicsFrContent, EthicsEngContent, EthicsRusContent]);
    this.headerContent = {
      pageTitle: this.dynamicTxt.pageTitle,
      breadcrumbs: this.dynamicTxt.breadcrumbs
    };
    this.titleService.setTitle(`Artemis - ${this.dynamicTxt.pageTitle}`);
  }

  private increaseCounter(): void {
    if (this.progressWidth < this.value) {
      const lol = setInterval(() => {
        this.progressWidth = this.progressWidth + 1;
        if (this.progressWidth === this.value) {
          clearInterval(lol);
        }
      }, 10);
    }
  }
}
