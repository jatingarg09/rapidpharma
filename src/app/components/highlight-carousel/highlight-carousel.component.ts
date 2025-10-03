import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-highlight-carousel',
  templateUrl: './highlight-carousel.component.html',
  styleUrls: ['./highlight-carousel.component.css'],
})
export class HighlightCarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  slides = [
    {
      image: '/slide1.png',
      title: 'Trusted Therapeutics',
      description:
        'GMP-certified medicines sourced from WHO-GMP and ISO-compliant manufacturers—delivered with clinical precision.',
    },
    {
      image: '/slide2.webp',
      title: 'Pan-India Distribution Network',
      description:
        'Delivering to clinics, pharmacies, and distributors across India within 2–3 working days—ensuring uninterrupted access to essential medicines.',
    },
    {
      image: '/slide3.webp',
      title: 'Accessible, Ethical Healthcare',
      description:
        'Affordable pricing and transparent practices—making quality healthcare accessible without compromising on quality.',
    },
    {
      image: '/slide4.webp',
      title: 'Partner-Centric Growth',
      description:
        'Strategic support, promotional materials, and monopoly rights—empowering franchise partners for long-term success.',
    },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
