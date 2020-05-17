// Imports from Angular
import { Injectable } from '@angular/core';

// Imports from RXJS
import { BehaviorSubject } from 'rxjs';

// Imports from Models
import { LanguageEnum } from '../../models/language.model';
import { NavItem } from '../../models/nav-item.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languageSubject: BehaviorSubject<LanguageEnum>;

  constructor() {
    this.languageSubject = new BehaviorSubject(null);
  }

  // Retrieve language from localstorage
  public getStorageLanguage(): string {
    return localStorage.getItem('language');
  }

  // Set language in localstorage
  public setStorageLanguage(newLanguage: LanguageEnum): void {
    localStorage.setItem('language', newLanguage.toString());
  }

  // Check if there is a language in localstorage
  public checkStorageLanguage(): boolean {
    return !this.getStorageLanguage() ? false : true;
  }

  // Set language in app
  public setLanguage(newLanguage: LanguageEnum): void {
    this.setStorageLanguage(newLanguage);
    this.languageSubject.next(newLanguage);
  }

  // Fill page content regarding language
  public manageComponentText(contents: any[]): any {
    if (this.getStorageLanguage() === '0') {
      return contents[0];
    } else if (this.getStorageLanguage() === '1') {
      return contents[1];
    } else {
      return contents[2];
    }
  }

  // Retrieve path to current language path
  public getCurrentFlag(children: NavItem[]): string {
    return children.find(element => {
      if (JSON.stringify(element.language) === this.getStorageLanguage()) {
        return element;
      }
    }).iconName;
  }
}
