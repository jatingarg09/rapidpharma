import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-highlight-carousel',
  templateUrl: './highlight-carousel.component.html',
  styleUrls: ['./highlight-carousel.component.css']
})
export class HighlightCarouselComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  currentSlide = 0;
  intervalId: any;

  slides = [
    {
      content: `<h3>Rapid Pharma: Trusted by 500+ distributors</h3><p>High-quality medicines, GMP-certified</p>`
    },
    {
      content: `<h3>Fast Delivery</h3><p>Get your products anywhere in India within 72 hours</p>`
    },
    {
      content: `<h3>Affordable Healthcare</h3><p>We ensure affordable medicine without compromising quality</p>`
    },
    {
      content: `<p>
    Rapid Pharmaceuticals is committed to delivering quality healthcare products and services
    with speed, reliability, and integrity. Backed by years of experience, we provide
    innovative pharmaceutical solutions to meet patient needs
    We focus on affordable healthcare and timely delivery with national reach.
  </p>`
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

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  touchStartX = 0;
  touchEndX = 0;

  startTouch(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  endTouch(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (diff > 50) {
      this.nextSlide();
    } else if (diff < -50) {
      this.prevSlide();
    }
  }
}
