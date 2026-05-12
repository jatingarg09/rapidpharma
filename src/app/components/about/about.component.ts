import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    // Set Page Title
    this.titleService.setTitle('About Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise');

    // Set Meta Tags
    this.metaService.updateTag({ name: 'description', content: 'Rapid Pharmaceuticals is a trusted pharmaceutical distributor in India, providing high-quality, WHO-GMP certified medicines and a reliable PCD franchise network since 1997.' });
    this.metaService.updateTag({ name: 'keywords', content: 'About Rapid Pharmaceuticals, Pharma Distributor India, WHO-GMP Medicines, PCD Pharma Franchise, Pharma Company History' });
    
    // Set Open Graph (Social) Tags
    this.metaService.updateTag({ property: 'og:title', content: 'About Rapid Pharmaceuticals' });
    this.metaService.updateTag({ property: 'og:description', content: 'Over 25 years of reliable pharmaceutical distribution across India.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://rapidpharmaceuticals.in/about' });

    // Update Canonical URL
    this.canonicalService.setCanonicalURL('https://rapidpharmaceuticals.in/about');
  }
}
