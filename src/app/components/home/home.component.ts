import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { blogPosts, BlogPost } from '../../data/blog-posts';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  latestBlogs: BlogPost[] = blogPosts.slice(-3);

  sampleProducts = [
    {
      name: 'AZIRAP-500',
      slug: 'azirap-500-azithromycin-antibiotic-tablet',
      description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
      image: '/productswebp/AZIRAP-500.webp',
    },
    {
      name: 'CEFIMELT-100DT',
      slug: 'cefimelt-100dt-cefixime-dispersible-tablet',
      description: 'Cefixime 100mg (Dispersible Tablets)',
      image: '/productswebp/CEFIMELT-100DT.webp',
    },
    {
      name: 'CEFIMELT-200 LB',
      slug: 'cefimelt-200lb-cefixime-lactic-acid-bacillus',
      description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
      image: '/productswebp/CEFIMELT-200LB.webp',
    },
    {
      name: 'D3NOW',
      slug: 'd3now-vitamin-d3-60000-iu-supplement',
      description: 'Vitamin D3 60000 IU',
      image: '/productswebp/D3 NOW.webp',
    },
    {
      name: 'GASTRONEX-IV',
      slug: 'gastronex-iv-pantoprazole-sodium-injection',
      description: 'Pantoprazole Sodium 40mg',
      image: '/productswebp/GASTRONEX-IV.webp',
    },
    {
      name: 'ZYLIVIN',
      slug: 'zylivin-liver-tonic-silymarin-hepatic',
      description:
        'Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others',
      image: '/productswebp/ZYLIVIN.webp',
    },
  ];

  slideshowIndex = 0;
  slideshowTimer: any;
  displayedProducts: any[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private canonicalService: CanonicalService,
  ) {}

  ngOnInit(): void {
    this.updateSEO();
    this.updateDisplayedProducts();
    if (isPlatformBrowser(this.platformId) && this.sampleProducts.length > 0) {
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    if (this.slideshowTimer != null) {
      clearInterval(this.slideshowTimer);
      this.slideshowTimer = undefined;
    }
  }

  startSlideshow() {
    this.slideshowTimer = setInterval(() => {
      const total = this.sampleProducts.length;
      if (total <= 3) return;
      this.slideshowIndex = (this.slideshowIndex + 1) % total;
      this.updateDisplayedProducts();
    }, 3000);
  }

  updateDisplayedProducts() {
    const total = this.sampleProducts.length;
    if (total <= 3) {
      this.displayedProducts = [...this.sampleProducts];
      return;
    }
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(this.sampleProducts[(this.slideshowIndex + i) % total]);
    }
    this.displayedProducts = result;
  }

  private updateSEO(): void {
    const title = 'Rapid Pharmaceuticals | PCD Pharma Franchise in India';

    const description =
      'Rapid Pharmaceuticals is a pharmaceutical distributor and PCD Pharma Franchise company in India offering quality medicines, monopoly rights and promotional support.';

    const url = 'https://www.rapidpharmaceuticals.in/';
    const image = 'https://www.rapidpharmaceuticals.in/rapidlogo.jpeg';

    this.meta.updateTag({
      name: 'description',
      content: description,
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ name: 'author', content: 'Rapid Pharmaceuticals' });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.canonicalService.setCanonicalURL(url);
  }
}
