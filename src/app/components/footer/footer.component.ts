// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

// Imports from Services
import { ScrollService } from '../../services/scroll-service/scroll.service';

@Component({
  selector: 'artemis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Component variables */

  constructor(private scrollService: ScrollService) {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  /* Scrolls to target in page */
  public scrollTo(dest: string, duration: number, offset: number): void {
    this.scrollService.triggerScrollTo(dest, duration, offset);
  }
}
