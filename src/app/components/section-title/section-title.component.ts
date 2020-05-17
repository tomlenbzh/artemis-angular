import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'artemis-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  @Input() title: string[];

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */
}
