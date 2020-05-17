// Imports from Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor(private router: Router) {}

  // Navigate to another route
  public navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
