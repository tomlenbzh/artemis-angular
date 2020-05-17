// Imports from Angular
import { Component, OnInit, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'artemis-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  /* Component variables */

  @Input() breadcrumbs: any;
  @Input() title: any;

  constructor(private router: Router) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Get current route url */
  public navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
