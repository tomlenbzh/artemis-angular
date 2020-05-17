import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProgressBarData } from '../../models/progress-bar.model';

@Component({
  selector: 'artemis-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'true',
        style({
          width: '100%'
        })
      ),
      state(
        'false',
        style({
          width: '0%'
        })
      ),
      transition('true => false', [animate('1.5s ease-in-out')]),
      transition('false => true', [animate('1.5s ease-in-out')])
    ])
  ]
})
export class ProgressBarComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  @Input() data: ProgressBarData;
  public isOpen = false;

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    setTimeout(() => {
      this.openProgressBar();
    }, 0);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.isOpen = false;
  }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  openProgressBar() {
    this.isOpen = true;
  }
}
