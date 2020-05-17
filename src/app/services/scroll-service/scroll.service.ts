// Imports from Angular
import { Injectable } from '@angular/core';

// Imports from RXJS
import { Subscription } from 'rxjs';

// Imports from services
import { PlatformService } from '../platform-service/platform.service';

// Imports from third party libraries
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scollSubscription: Subscription;

  constructor(private platformService: PlatformService, private scrollToService: ScrollToService) {}

  // Binds an event listener to a type and a function
  public setEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.addEventListener(type, listener, options);
    }
  }

  // Removes an existing event listener
  public removeEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.removeEventListener(type, listener, options);
    }
  }

  // Scrolls to target in page
  public triggerScrollTo(target: any, duration: number, offset: number): void {
    const config: ScrollToConfigOptions = { target, duration, offset };
    this.scrollToService.scrollTo(config);
  }
}
