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
      image: '/slide1.webp',
      title: 'Quality Medicines. Trusted Healthcare.',
      description:
        'Rapid Pharmaceuticals offers quality pharmaceutical formulations sourced from WHO-GMP and ISO-certified manufacturing partners.',
    },
    {
      image: '/slide2.webp',
      title: 'Pan-India Pharmaceutical Distribution',
      description:
        'Serving pharmaceutical distributors, wholesalers, pharmacies, and healthcare professionals across India.',
    },
    {
      image: '/slide3.webp',
      title: 'Accessible, Ethical Healthcare',
      description:
        'Competitive pricing, quality pharmaceutical products, and transparent business practices for our healthcare partners.',
    },
    {
      image: '/slide4.webp',
      title: 'PCD Pharma Franchise in India',
      description:
        'Grow your pharmaceutical business with exclusive territorial monopoly rights, promotional support, and competitive wholesale pricing.',
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
