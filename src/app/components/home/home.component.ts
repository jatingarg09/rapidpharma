import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Highlight {
  type: 'hero' | 'highlight';
  title: string;
  description: string;
  cta?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  highlights: Highlight[] = [
    {
      type: 'hero',
      title: 'Welcome to Rapid Pharmaceuticals',
      description: 'Delivering trusted healthcare products across India since 1997.',
      cta: 'Explore Our Products'
    },
    {
      type: 'highlight',
      title: 'Pan-India Delivery',
      description: 'We supply to hospitals, pharmacies, and institutions across India.'
    },
    {
      type: 'highlight',
      title: 'Over 25 Years of Experience',
      description: 'Serving the Indian healthcare system since 1997.'
    },
    {
      type: 'highlight',
      title: 'Trusted Brand',
      description: 'Supplying medicines under our own reliable brand name.'
    }
  ];

  sampleProducts = [
    {
      name: 'AZIRAP-500',
      description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
      image: 'assets/products/azirap-500.jpg'

    },
    {
      name: 'CEFIMELT-100DT',
      description: 'Cefixime 100mg (Dispersible Tablets)',
      image: 'assets/products/azirap-500.jpg'
    },
    {
      name: 'CEFIMELT-200 LB',
      description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
      image: 'assets/products/azirap-500.jpg'
    },
  ];

  currentSlide = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.highlights.length;
    }, 5000);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
