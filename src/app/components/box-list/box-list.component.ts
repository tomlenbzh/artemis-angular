import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'artemis-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  @Input() static: any;
  @Input() dynamic: any;

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    console.log('static', this.static);
    console.log('dynamic', this.dynamic);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */
}
