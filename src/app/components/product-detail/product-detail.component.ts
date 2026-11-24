import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Product, products } from '../../data/products';
import { CanonicalService } from '../../services/canonicalService';
import { LdJsonService } from '../../services/ld-json.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product!: Product;
  similarProducts: Product[] = [];
  selectedImageUrl: string = '';
  selectedImageAlt: string = '';
  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private meta: Meta,
    private title: Title,
    private canonicalService: CanonicalService,
    private ldJsonService: LdJsonService,
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      if (slug && slug !== this.product?.slug) {
        this.loadProduct(slug);
      }
    });
  }

  loadProduct(slug: string) {
    // 2) Synchronously set product from your local products array
    const found = products.find((p) => p.slug === slug);

    if (!found) {
      console.error('Product not found:', slug);
      return;
    }
    this.product = found;
    this.selectedImageUrl = this.product.imageUrl;
    this.selectedImageAlt = this.product.imageAlt || this.product.name;

    const sameCategory = products.filter(
      (p) => p.category === this.product.category && p.slug !== slug,
    );
    if (sameCategory.length >= 4) {
      this.similarProducts = sameCategory.slice(0, 4);
    } else {
      const catSlug = this.getCategorySlug(this.product.category);
      const thSlug = this.getTherapeuticSlug(this.product.therapeuticClass);
      const additional = products.filter(
        (p) =>
          p.slug !== slug &&
          !sameCategory.some((sc) => sc.slug === p.slug) &&
          (this.getCategorySlug(p.category) === catSlug ||
            this.getTherapeuticSlug(p.therapeuticClass) === thSlug),
      );
      this.similarProducts = [...sameCategory, ...additional].slice(0, 4);
    }

    // 3) Always set meta tags (works server-side)
    this.setMetaTags();

    // 4) Create MULTIPLE JSON-LD schemas for comprehensive SEO
    const productUrl = `https://www.rapidpharmaceuticals.in/products/${this.product.slug}`;
    const categorySlug = this.getCategorySlug(this.product.category);

    // Main Product Schema (Merchant Listings & Rich Snippet Compliant)
    const productSchema: any = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: this.product.name,
      sku: this.product.productCode || this.product.slug,
      mpn: this.product.productCode || this.product.slug,
      image: [
        this.product.imageUrl.startsWith('/')
          ? `https://www.rapidpharmaceuticals.in${this.product.imageUrl}`
          : `https://www.rapidpharmaceuticals.in/${this.product.imageUrl}`,
        ...(this.product.visualAidUrl
          ? [
              this.product.visualAidUrl.startsWith('/')
                ? `https://www.rapidpharmaceuticals.in${this.product.visualAidUrl}`
                : `https://www.rapidpharmaceuticals.in/${this.product.visualAidUrl}`,
            ]
          : []),
      ],
      description:
        this.product.metaDescription ||
        this.product.introduction ||
        `${this.product.name} containing ${this.product.composition} manufactured under WHO-GMP certified standards by Rapid Pharmaceuticals.`,
      category: this.product.category,
      brand: {
        '@type': 'Brand',
        name: 'Rapid Pharmaceuticals',
        url: 'https://www.rapidpharmaceuticals.in',
      },
      manufacturer: {
        '@type': 'Organization',
        name: this.product.manufacturer || 'Rapid Pharmaceuticals',
        url: 'https://www.rapidpharmaceuticals.in',
        logo: 'https://www.rapidpharmaceuticals.in/rapidlogo.jpeg',
      },
      offers: {
        '@type': 'Offer',
        '@id': `${productUrl}#offer`,
        url: productUrl,
        priceCurrency: 'INR',
        price: this.product.mrp,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: 'Rapid Pharmaceuticals',
          url: 'https://www.rapidpharmaceuticals.in',
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'IN',
          returnPolicyCategory:
            'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 7,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn',
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'INR',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'IN',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 2,
              unitCode: 'd',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 4,
              unitCode: 'd',
            },
          },
        },
      },
      ...(this.product.avgRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: this.product.avgRating,
          bestRating: '5',
          worstRating: '1',
          reviewCount: this.product.reviewCount || 100,
        },
      }),
    };

    // Medical / Drug Schema for Healthcare & AI Search (GEO)
    const isNutra = this.isNutraceutical();

    const drugSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'Drug',
      '@id': `${productUrl}#drug`,
      name: this.product.name,
      proprietaryName: this.product.name,
      nonProprietaryName: this.product.composition,
      activeIngredient:
        this.product.activeIngredient || this.product.composition,
      dosageForm: this.product.category,
      prescriptionStatus: isNutra
        ? 'https://schema.org/OTC'
        : 'https://schema.org/PrescriptionOnly',
      legalStatus: isNutra
        ? 'Dietary Supplement / FSSAI'
        : 'Schedule H Prescription Drug',
      description:
        this.product.introduction ||
        this.product.metaDescription ||
        this.product.composition,
      manufacturer: {
        '@type': 'Organization',
        name: 'Rapid Pharmaceuticals',
        url: 'https://www.rapidpharmaceuticals.in',
      },
    };

    // Breadcrumb Navigation Schema with Canonical Category Slug
    const breadcrumbSchema = {
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.rapidpharmaceuticals.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://www.rapidpharmaceuticals.in/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: this.product.category,
          item: `https://www.rapidpharmaceuticals.in/category/${categorySlug}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: this.product.name,
          item: productUrl,
        },
      ],
    };

    // Organization Schema (Authoritative Corporate Identity)
    const organizationSchema = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: 'Rapid Pharmaceuticals',
      url: 'https://www.rapidpharmaceuticals.in',
      logo: 'https://www.rapidpharmaceuticals.in/rapidlogo.jpeg',
      sameAs: [
        'https://www.facebook.com/rapidpharmaceuticals',
        'https://www.instagram.com/rapidpharmaceuticals',
        'https://www.linkedin.com/company/rapidpharmaceuticals',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Punjab',
      },
    };

    // Comprehensive FAQ Schema (Clinical & PCD Franchise Q&A)
    const allFaqs = this.getAllFaqs();
    const faqSchema = {
      '@context': 'https://schema.org/',
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((item: any) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    // Combine all schemas into a single array block
    const schemas: any[] = [
      productSchema,
      drugSchema,
      breadcrumbSchema,
      organizationSchema,
      faqSchema,
    ];

    this.ldJsonService.setSchema(schemas);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.ldJsonService.removeSchema();
  }

  isNutraceutical(product?: Product): boolean {
    const p = product || this.product;
    if (!p) return false;
    const c = (p.category || '').toLowerCase();
    const t = (p.therapeuticClass || '').toLowerCase();
    return (
      c.includes('nutra') || t.includes('nutra') || t.includes('supplement')
    );
  }

  getCategorySlug(category: string): string {
    const norm = (category || '').toLowerCase().trim();
    if (norm.includes('tablet')) return 'tablets';
    if (norm.includes('injection')) return 'injections';
    if (norm.includes('eye')) return 'eye-drops';
    if (norm.includes('drop')) return 'syrup-suspension';
    if (norm.includes('syrup') || norm.includes('suspension'))
      return 'syrup-suspension';
    if (norm.includes('capsule')) return 'capsules';
    if (norm.includes('respule')) return 'respules';
    if (norm.includes('gel') || norm.includes('ointment'))
      return 'gel-ointment';
    if (norm.includes('sachet')) return 'sachets';
    return 'tablets';
  }

  getTherapeuticSlug(therapeuticClass: string): string {
    const norm = (therapeuticClass || '').toLowerCase().trim();
    if (norm.includes('antibiotic')) return 'antibiotics';
    if (
      norm.includes('cough') ||
      norm.includes('cold') ||
      norm.includes('allerg') ||
      norm.includes('respiratory')
    )
      return 'cough-cold';
    if (
      norm.includes('vitamin') ||
      norm.includes('nutra') ||
      norm.includes('nutrit') ||
      norm.includes('iron') ||
      norm.includes('calcium')
    )
      return 'vitamin-supplements';
    if (norm.includes('antacid')) return 'antacids';
    if (
      norm.includes('gastro') ||
      norm.includes('enzyme') ||
      norm.includes('liver')
    )
      return 'gastrointestinal';
    if (
      norm.includes('nsaid') ||
      norm.includes('pain') ||
      norm.includes('analgesic') ||
      norm.includes('steroid')
    )
      return 'nsaid';
    if (norm.includes('diabet')) return 'antidiabetic';
    if (norm.includes('cardio') || norm.includes('hypertens'))
      return 'cardiovascular';
    if (norm.includes('urol') || norm.includes('gout')) return 'urology';
    if (norm.includes('vertigo')) return 'vertigo';
    if (norm.includes('ophthalmic') || norm.includes('eye'))
      return 'ophthalmic';
    if (norm.includes('probiotic')) return 'probiotics';
    if (norm.includes('gynae')) return 'gynaecological';
    if (norm.includes('psychiat')) return 'psychiatric';
    return '';
  }

  getWhatsAppInquiryUrl(): string {
    if (!this.product) return '';
    const text = `Hello Rapid Pharmaceuticals, I am interested in PCD Pharma Franchise & wholesale supply for ${this.product.name} (${this.product.composition}). Please share brochure and price list.`;
    return `https://wa.me/919530931539?text=${encodeURIComponent(text)}`;
  }

  getAllFaqs(): Array<{ question: string; answer: string }> {
    if (!this.product) return [];
    const list = this.product.faqItems ? [...this.product.faqItems] : [];
    list.push({
      question: `How can I obtain a PCD Pharma Franchise for ${this.product.name}?`,
      answer: `You can secure exclusive monopoly marketing and distribution rights for ${this.product.name} (${this.product.composition}) in your designated district by contacting Rapid Pharmaceuticals with your Drug License and GST number. Full promotional visual aids, product glossaries, and marketing support are provided.`,
    });
    list.push({
      question: `Is ${this.product.name} manufactured under certified quality standards?`,
      answer: `Yes, ${this.product.name} is sourced and manufactured exclusively under strict WHO-GMP and ISO certified manufacturing guidelines to guarantee clinical efficacy, safety, and highest pharmaceutical purity.`,
    });
    return list;
  }

  selectImage(view: 'product' | 'visualAid') {
    if (view === 'product') {
      this.selectedImageUrl = this.product.imageUrl;
      this.selectedImageAlt = this.product.imageAlt || this.product.name;
    } else if (view === 'visualAid' && this.product.visualAidUrl) {
      this.selectedImageUrl = this.product.visualAidUrl;
      this.selectedImageAlt =
        this.product.visualAidAlt || `${this.product.name} Visual Aid`;
    }
  }

  /** ✅ SEO Meta + OG + Twitter — call this for SSR too */
  setMetaTags(): void {
    // Use SEO fields if available, otherwise fall back to defaults
    const pageTitle =
      this.product.metaTitle ||
      `${this.product.name} | ${this.product.composition} | Rapid Pharmaceuticals`;

    const pageDescription =
      this.product.metaDescription ||
      `${this.product.name} containing ${this.product.composition} — high-quality medicines by Rapid Pharmaceuticals, available for PCD franchise.`;

    const imageUrl =
      this.product.imageUrl ||
      'https://www.rapidpharmaceuticals.in/assets/og-image.jpg';
    const productUrl = `https://www.rapidpharmaceuticals.in/products/${this.product.slug}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });

    // Add keywords if available
    if (this.product.keywords && this.product.keywords.length > 0) {
      this.meta.updateTag({
        name: 'keywords',
        content: this.product.keywords.join(', '),
      });
    }

    // Author & Publisher Tags
    if (this.product.authorName) {
      this.meta.updateTag({ name: 'author', content: this.product.authorName });
    }
    this.meta.updateTag({
      name: 'publisher',
      content: 'Rapid Pharmaceuticals',
    });

    // Publication & Update Dates (RFC3339 format for better semantic meaning)
    if (this.product.publicationDate) {
      this.meta.updateTag({
        name: 'publish_date',
        content: this.product.publicationDate,
      });
    }
    if (this.product.updatedDate) {
      this.meta.updateTag({
        name: 'last-modified',
        content: this.product.updatedDate,
      });
    }

    // Medical/Healthcare specific meta tags
    if (this.product.medicalCategory) {
      this.meta.updateTag({
        name: 'product-category',
        content: this.product.medicalCategory,
      });
    }
    if (this.product.activeIngredient) {
      this.meta.updateTag({
        name: 'active-ingredient',
        content: this.product.activeIngredient,
      });
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
      content: this.product.manufacturer || 'Rapid Pharmaceuticals',
    });
    if (this.product.mrp) {
      this.meta.updateTag({
        property: 'product:price:amount',
        content: String(this.product.mrp),
      });
      this.meta.updateTag({
        property: 'product:price:currency',
        content: 'INR',
      });
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
    this.meta.updateTag({
      name: 'twitter:domain',
      content: 'www.rapidpharmaceuticals.in',
    });

    // Robots Meta Tag (index all product pages)
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    // Viewport & Mobile Optimization
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    });

    // Language
    this.meta.updateTag({ 'http-equiv': 'content-language', content: 'en-IN' });

    this.canonicalService.setCanonicalURL(productUrl);
  }
}
