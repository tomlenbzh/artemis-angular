// Imports from Angular
import { Component, OnInit, Input, OnDestroy, OnChanges, HostListener, ViewChild } from '@angular/core';
import { useAnimation, transition, trigger } from '@angular/animations';

// Imports from Animations
import { fadeIn, fadeOut } from '../../animations/carousel.animations';

// Imports from third party libraries
import * as mdbootstrap from 'mdbootstrap';

@Component({
  selector: 'artemis-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '0.5s' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '0.5s' } })])
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy, OnChanges {
  /* Component variables */

  @Input() slidesImg: any;
  @Input() slidesTxt: any;
  @ViewChild('carousel') carousel: mdbootstrap.CarouselComponent;

  private screenWidth: number;
  private displayText: boolean;
  private previousdisplayText: boolean;
  private interval = 12;

  public slidesInterval: any;
  public remainingTimeInterval: any;
  public remainingTime: number;
  public currentSlide: number;
  public isLeaving: boolean;

  constructor() {
    this.getScreenSize();
    this.isLeaving = false;
  }

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    this.currentSlide = 0;
    this.initInterval();
  }

  ngOnChanges(): void {
    this.remainingTimeInterval === undefined ? this.stopInterval() : (this.remainingTime = this.interval);
  }

  ngOnDestroy(): void { }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Retrieves window dimensions */
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    if (this.previousdisplayText === undefined) {
      this.previousdisplayText = this.screenWidth <= 560 ? false : true;
      this.displayText = this.previousdisplayText;
    } else {
      this.displayText = this.screenWidth <= 560 ? false : true;
      if (this.displayText !== this.previousdisplayText) {
        this.previousdisplayText = this.displayText;
        this.remainingTime = this.interval;
      }
    }
  }

  public onActiveSlideChange(event: any): void {
    this.currentSlide = event.relatedTarget;
  }

  /* Initialise x seconds time between slide change */
  private initInterval(): void {
    this.remainingTime = this.interval;
    this.remainingTimeInterval = setInterval(() => {
      this.remainingTime = this.remainingTime > 0 ? this.remainingTime - 1 : 0;
      if (this.remainingTime === 0) {
        this.stopInterval();
        this.onNextClick();
      }
    }, 1000);
  }

  /* Removes all intervals */
  private stopInterval(): void {
    clearInterval(this.remainingTimeInterval);
  }

  /* Goes to previous slide */
  public onPreviousClick(): void {
    this.stopInterval();
    this.carousel.previousSlide();
    this.initInterval();
  }

  /* Goes to next slide */
  public onNextClick(): void {
    this.stopInterval();
    this.carousel.nextSlide();
    this.initInterval();
  }

  /* Goes to specified slide */
  public onDotClick(index: number): void {
    this.stopInterval();
    this.carousel.selectSlide(index);
    this.initInterval();
  }
}
