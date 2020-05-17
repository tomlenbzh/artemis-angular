// Imports from Angular
import { Injectable } from '@angular/core';

// Imports from RXJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public selectedItem: number;
  public sidenavSubject: BehaviorSubject<number>;
  public isSidnavOpen: BehaviorSubject<boolean>;

  constructor() {
    this.selectedItem = null;
    this.sidenavSubject = new BehaviorSubject(null);
    this.isSidnavOpen = new BehaviorSubject(false);
  }
}
