// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'artemis-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnDestroy, AfterViewInit {
  // Imports from Angular

  @Input() static: any;
  @Input() text: any;

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    // console.log('static', this.static);
    // console.log('text', this.text);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Navigates to specified url */
  public navigateTo(url: string): void {
    console.log(`URL: ${url}`);
  }
}
