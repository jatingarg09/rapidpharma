import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';
import { LdJsonService } from '../../services/ld-json.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    private ldJsonService: LdJsonService,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Page Not Found | Rapid Pharmaceuticals');

    this.meta.updateTag({
      name: 'description',
      content:
        'The requested page could not be found. Explore pharmaceutical products and PCD franchise opportunities at Rapid Pharmaceuticals.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, follow',
    });

    const socialTags = [
      "property='og:title'",
      "property='og:description'",
      "property='og:type'",
      "property='og:url'",
      "property='og:image'",
      "name='twitter:card'",
      "name='twitter:title'",
      "name='twitter:description'",
      "name='twitter:image'",
    ];

    socialTags.forEach((selector) => {
      this.meta.removeTag(selector);
    });

    this.canonicalService.removeCanonicalURL();
    this.ldJsonService.removeSchema();
  }
}
