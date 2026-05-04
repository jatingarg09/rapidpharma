import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Product, products } from '../../data/products';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';

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
    private canonicalService: CanonicalService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
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
        if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
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

    // 4) Create MULTIPLE JSON-LD schemas for comprehensive SEO
    // Main Product Schema
    const productSchema = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      '@id': `https://rapidpharmaceuticals.in/product/${this.product.slug}`,
      name: this.product.name,
      image: `https://rapidpharmaceuticals.in/${this.product.imageUrl}`,
      description: this.product.metaDescription || this.product.composition,
      category: this.product.medicalCategory || this.product.category,
      brand: {
        '@type': 'Brand',
        name: 'Rapid Pharmaceuticals',
      },
      manufacturer: {
        '@type': 'Organization',
        name: this.product.manufacturer || 'Rapid Pharmaceuticals',
      },
      offers: {
        '@type': 'Offer',
        url: `https://rapidpharmaceuticals.in/product/${this.product.slug}`,
        priceCurrency: 'INR',
        price: this.product.mrp,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
      ...(this.product.avgRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: this.product.avgRating,
          reviewCount: this.product.reviewCount || 0,
        },
      }),
    };

    // Breadcrumb Navigation Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://rapidpharmaceuticals.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://rapidpharmaceuticals.in/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: this.product.category,
          item: `https://rapidpharmaceuticals.in/products?category=${this.product.category}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: this.product.name,
          item: `https://rapidpharmaceuticals.in/product/${this.product.slug}`,
        },
      ],
    };

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: 'Rapid Pharmaceuticals',
      url: 'https://rapidpharmaceuticals.in',
      logo: 'https://rapidpharmaceuticals.in/assets/logo.png',
      sameAs: [
        'https://www.facebook.com/rapidpharmaceuticals',
        'https://twitter.com/rapidpharma',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'India',
      },
    };

    // FAQ Schema (if FAQs exist)
    let faqSchema = null;
    if (this.product.faqItems && this.product.faqItems.length > 0) {
      faqSchema = {
        '@context': 'https://schema.org/',
        '@type': 'FAQPage',
        mainEntity: this.product.faqItems.map((item: any) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
    }

    // Add all schemas to page
    this.addJsonLd(productSchema);
    this.addJsonLd(breadcrumbSchema);
    this.addJsonLd(organizationSchema);
    if (faqSchema) {
      this.addJsonLd(faqSchema);
    }
  }

  private addJsonLd(data: any) {
  const existing = this.document.getElementById('product-schema');
  if (existing) {
    existing.remove();
  }

  const script = this.document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'product-schema';
  script.text = JSON.stringify(data);

  this.document.head.appendChild(script);
}

  goToProduct(product: Product) {
    this.router.navigate(['/product', product.slug]);
  }

  /** ✅ SEO Meta + OG + Twitter — call this for SSR too */
  setMetaTags(): void {
    // Use SEO fields if available, otherwise fall back to defaults
    const pageTitle = this.product.metaTitle || 
      `${this.product.name} | ${this.product.composition} | Rapid Pharmaceuticals`;
    
    const pageDescription = this.product.metaDescription ||
      `${this.product.name} containing ${this.product.composition} — high-quality medicines by Rapid Pharmaceuticals, available for PCD franchise.`;
    
    const imageUrl =
      this.product.imageUrl ||
      'https://rapidpharmaceuticals.in/assets/og-image.jpg';
    const productUrl = `https://rapidpharmaceuticals.in/product/${this.product.slug}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });

    // Add keywords if available
    if (this.product.keywords && this.product.keywords.length > 0) {
      this.meta.updateTag({
        name: 'keywords',
        content: this.product.keywords.join(', ')
      });
    }

    // Author & Publisher Tags
    if (this.product.authorName) {
      this.meta.updateTag({ name: 'author', content: this.product.authorName });
    }
    this.meta.updateTag({ name: 'publisher', content: 'Rapid Pharmaceuticals' });

    // Publication & Update Dates (RFC3339 format for better semantic meaning)
    if (this.product.publicationDate) {
      this.meta.updateTag({ name: 'publish_date', content: this.product.publicationDate });
    }
    if (this.product.updatedDate) {
      this.meta.updateTag({ name: 'last-modified', content: this.product.updatedDate });
    }

    // Medical/Healthcare specific meta tags
    if (this.product.medicalCategory) {
      this.meta.updateTag({ name: 'product-category', content: this.product.medicalCategory });
    }
    if (this.product.activeIngredient) {
      this.meta.updateTag({ name: 'active-ingredient', content: this.product.activeIngredient });
    }

    // Open Graph (Enhanced)
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: pageDescription,
    });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: productUrl });
    this.meta.updateTag({ property: 'og:type', content: 'product' });
    
    // OpenGraph type-specific (product)
    this.meta.updateTag({ 
      property: 'product:brand', 
      content: this.product.manufacturer || 'Rapid Pharmaceuticals' 
    });
    if (this.product.mrp) {
      this.meta.updateTag({ property: 'product:price:amount', content: String(this.product.mrp) });
      this.meta.updateTag({ property: 'product:price:currency', content: 'INR' });
    }

    // Twitter Card (Enhanced)
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
    this.meta.updateTag({ name: 'twitter:domain', content: 'rapidpharmaceuticals.in' });

    // Robots Meta Tag (index all product pages)
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });

    // Viewport & Mobile Optimization
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });

    // Language
    this.meta.updateTag({ 'http-equiv': 'content-language', content: 'en-IN' });

    this.canonicalService.setCanonicalURL(productUrl);
  }

 
}
