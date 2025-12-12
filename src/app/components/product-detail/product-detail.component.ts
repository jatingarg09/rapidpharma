import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Product, products } from '../../data/products';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  similarProducts: Product[] = [];
  jsonLdSafe!: SafeHtml; // sanitized JSON-LD to render in template

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // 1) Synchronously read slug so SSR has product before render
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadProduct(slug);
    }

    // If you still want to react when route params change in-browser:
    this.route.paramMap.subscribe((params) => {
      const s = params.get('slug');
      if (s && s !== this.product?.slug) {
        this.loadProduct(s);
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  loadProduct(slug: string) {
    // 2) Synchronously set product from your local products array
    const found = products.find((p) => p.slug === slug);
    if (!found) {
      // fallback: navigate or show 404 - keep behavior you already have
      console.warn('Product not found:', slug);
      return;
    }
    this.product = found;

    this.similarProducts = products
      .filter((p) => p.category === this.product.category && p.slug !== slug)
      .slice(0, 4);

    // 3) Always set meta tags (works server-side)
    this.setMetaTags();

    // 4) Create JSON-LD string and sanitize for template rendering (works server-side)
    const jsonLd = {
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
    };

    this.jsonLdSafe = this.sanitizer.bypassSecurityTrustHtml(
      JSON.stringify(jsonLd)
    );

    // 5) Browser-only things
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredDataBrowser(); // optional DOM-based additions if you still want them
    }
  }

  goToProduct(product: Product) {
    this.router.navigate(['/product', product.slug]);
  }

  /** ✅ SEO Meta + OG + Twitter — call this for SSR too */
  setMetaTags(): void {
    const pageTitle = `${this.product.name} | ${this.product.composition} | Rapid Pharmaceuticals`;
    const pageDescription =
      `${this.product.name} containing ${this.product.composition} — high-quality medicines by Rapid Pharmaceuticals, available for PCD franchise.`;
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

  /** optional: keep browser-only DOM manipulations separated */
  private addStructuredDataBrowser() {
    // If you still want to append script via document in browser:
    try {
      const existing = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existing) existing.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(JSON.parse(this.jsonLdSafe as string));
      document.head.appendChild(script);
    } catch (e) {
      // ignore on server or if anything fails
      console.warn('could not append browser JSON-LD', e);
    }
  }
}
