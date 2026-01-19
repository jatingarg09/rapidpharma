import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rapid-pharmaceuticals';
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('config', 'G-3BLCMKNGZT', {
              page_path: event.urlAfterRedirects,
            });
          }
        });
    }
  }

  trackWhatsapp() {
    if (
      this.isBrowser &&
      typeof (window as any).gtag === 'function'
    ) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Floating WhatsApp Button',
      });
    }
  }
}
