import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sampleProducts = [
    {
      name: 'AZIRAP-500',
      description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
      image: '/products/AZIRAP-500.png'

    },
    {
      name: 'CEFIMELT-100DT',
      description: 'Cefixime 100mg (Dispersible Tablets)',
      image: '/products/CEFIMELT-100DT.jpg'
    },
    {
      name: 'CEFIMELT-200 LB',
      description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
      image: '/products/CEFIMELT-200LB.jpg'
    },
    {
      name : "D3NOW",
      description : "Vitamin D3 60000 IU",
      image : "/products/D3 NOW.jpg"
    },
    {
      name : "GASTRONEX-IV",
      description : "Pantoprazole Sodium 40mg",
      image : "/products/GASTRONEX-IV.jpg"
    },
    {
      name : "ZYLIVIN",
      description : "Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others",
      image : "/products/ZYLIVIN.jpg"
    },
  ];

  slideshowIndex = 0;
  slideshowTimer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && this.sampleProducts.length > 0) {
      this.startSlideshow();
    }
  }

  startSlideshow() {
    this.slideshowTimer = setInterval(() => {
      const total = this.sampleProducts.length;
      // If less than 3 products, don't slide
      if (total <= 3) return;
      this.slideshowIndex = (this.slideshowIndex + 1) % total;
    }, 3000); // Change slide every 3 seconds
  }

  getSlideshowProducts() {
    const total = this.sampleProducts.length;
    if (total <= 3) return this.sampleProducts;
    // Show 3 products starting from slideshowIndex, wrap around
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(this.sampleProducts[(this.slideshowIndex + i) % total]);
    }
    return result;
  }

  ngOnDestroy() {
    if (this.slideshowTimer) {
      clearInterval(this.slideshowTimer);
    }
  }
}
