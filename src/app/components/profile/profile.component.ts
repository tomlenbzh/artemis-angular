// Imports from Angular
import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';

// Imports from Models
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'artemis-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  @Input() profile: Profile;
  @Input() static: any;

  constructor() {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  ngOnInit(): void {
    console.log('STATIC:', this.static);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */
}
