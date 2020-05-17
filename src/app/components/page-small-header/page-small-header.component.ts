// Imports from Angular
import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';

// Imports from Models
import { PageHeader } from '../../models/page-header.model';

@Component({
  selector: 'artemis-page-small-header',
  templateUrl: './page-small-header.component.html',
  styleUrls: ['./page-small-header.component.scss']
})
export class PageSmallHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  // Imports from Angular

  @Input() headerContent: PageHeader;

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {
    console.log('HEADER:', this.headerContent);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */
}
