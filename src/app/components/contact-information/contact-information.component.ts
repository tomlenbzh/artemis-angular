import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'artemis-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit, AfterViewInit, OnDestroy {
  /* Component variables */

  public contactList = [
    {
      icon: 'phone',
      txt1: 'TÉLÉPHONE',
      txt2: '+33 (0)6 33 83 47 79',
      txt3: '',
      txt4: ''
    },
    {
      icon: 'email',
      txt1: 'EMAIL',
      txt2: 'coaching.artemis@gmail.com',
      txt3: '',
      txt4: ''
    },
    {
      icon: 'location_on',
      txt1: 'ADRESSE',
      txt2: '54 - 56 Avenue Hoche',
      txt3: '75008 - Paris',
      txt4: 'France'
    },
    {
      icon: 'access_time',
      txt1: 'NOUS CONTACTER',
      txt2: 'Lundi - Vendredi :',
      txt3: '9:00 - 19:00',
      txt4: ''
    }
  ];

  constructor() {}

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {}

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */
}
