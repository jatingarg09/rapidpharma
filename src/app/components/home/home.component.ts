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
      name: 'Paracetamol 500mg',
      description: 'Effective relief for fever and pain.',
      image: 'assets/products/paracetamol.jpg'
    },
    {
      name: 'Cough Syrup',
      description: 'Non-drowsy formula for dry cough.',
      image: 'assets/products/cough.jpg'
    },
    {
      name: 'Multivitamin Tablets',
      description: 'Boost your daily immunity and energy.',
      image: 'assets/products/multivitamin.jpg'
    }
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
