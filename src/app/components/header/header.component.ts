import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuOpen = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  trackCall() {
  gtag('event', 'phone_click', {
    event_category: 'engagement',
    event_label: 'Header Call'
  });
}
}
