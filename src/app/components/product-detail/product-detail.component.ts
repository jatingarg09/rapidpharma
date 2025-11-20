import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Product, products } from '../../data/products';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  similarProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) this.loadProduct(slug);
    });
  }

  loadProduct(slug: string) {
    this.product = products.find((p) => p.slug === slug)!;
    this.similarProducts = products
      .filter((p) => p.category === this.product.category && p.slug !== slug)
      .slice(0, 4);

    if (isPlatformBrowser(this.platformId)) {
      this.setMetaTags();
      this.addStructuredData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToProduct(product: Product) {
    this.router.navigate(['/product', product.slug]);
  }


  /** ✅ SEO Meta + OG + Twitter */
  setMetaTags(): void {
    const pageTitle = `${this.product.name} | ${this.product.composition} | Rapid Pharmaceuticals`;
    const pageDescription =
      `${this.product.name} containing ${this.product.composition} — high-quality medicines by Rapid Pharmaceuticals, available for PCD franchise.`
    const imageUrl =
      this.product.imageUrl ||
      'https://rapidpharmaceuticals.in/assets/og-image.jpg';
    const productUrl = `https://rapidpharmaceuticals.in/product/${this.product.slug}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: pageDescription,
    });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: productUrl });
    this.meta.updateTag({ property: 'og:type', content: 'product' });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({
      name: 'twitter:description',
      content: pageDescription,
    });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  /** ✅ Schema.org JSON-LD */
  addStructuredData() {
    const existing = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      '@id': `https://rapidpharmaceuticals.in/product/${this.product.slug}`,
      name: this.product.name,
      image: `https://rapidpharmaceuticals.in/${this.product.imageUrl}`,
      description: this.product.composition,
      category: this.product.category,
      brand: {
        '@type': 'Brand',
        name: 'Rapid Pharmaceuticals',
      },
      offers: {
        '@type': 'Offer',
        url: `https://rapidpharmaceuticals.in/product/${this.product.slug}`,
        priceCurrency: 'INR',
        price: this.product.mrp,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    });
    document.head.appendChild(script);
  }
}
