import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-highlight-carousel',
  templateUrl: './highlight-carousel.component.html',
  styleUrls: ['./highlight-carousel.component.css']
})
export class HighlightCarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  slides = [
    {
      image: 'assets/images/slide1.jpg',
      title: 'Trusted by 500+ Distributors',
      description: 'Delivering high-quality GMP-certified medicines nationwide.'
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'Fast Delivery',
      description: 'We ensure delivery of products anywhere in India within 72 hours.'
    },
    {
      image: 'assets/images/slide3.jpg',
      title: 'Affordable Healthcare',
      description: 'Making healthcare accessible without compromising on quality.'
    },
    {
      image: 'assets/images/slide4.jpg',
      title: 'Our Commitment',
      description: 'Providing innovative pharmaceutical solutions with reliability and care.'
    }
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
