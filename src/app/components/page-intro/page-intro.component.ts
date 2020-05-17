// Imports from Angular
import { Component, OnInit, Input } from '@angular/core';

// Imports from Models
import { PageIntro } from '../../models/page-intro.model';

@Component({
  selector: 'artemis-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss']
})
export class PageIntroComponent implements OnInit {
  @Input() intro: PageIntro;

  constructor() {}

  ngOnInit(): void {
    console.log('PageIntro:', this.intro);
  }
}
