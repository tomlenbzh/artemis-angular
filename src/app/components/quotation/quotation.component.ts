// Imports from Angular
import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'artemis-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  @Input() quotation: string;

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */
}
