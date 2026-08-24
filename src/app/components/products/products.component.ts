import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product, products } from '../../data/products';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CanonicalService } from '../../services/canonicalService';
import { LdJsonService } from '../../services/ld-json.service';

const CATEGORY_SLUG_MAP: { [key: string]: string } = {
  tablets: 'Tablets',
  injections: 'Injections',
  'syrup-suspension': 'Syrup/Suspension',
  'syrups-suspensions': 'Syrup/Suspension',
  capsules: 'Capsules',
  'eye-drops': 'Eye Drops',
  respules: 'Respules',
  'gel-ointment': 'Gel/Ointment',
  sachets: 'Sachets',
};

const THERAPEUTIC_SLUG_MAP: { [key: string]: string } = {
  antibiotics: 'Antibiotic',
  antibiotic: 'Antibiotic',
  'antiallergic-respiratory': 'Antiallergic & Respiratory',
  'cough-cold': 'Cough & Cold',
  'vitamin-supplements': 'Vitamin Supplement',
  'vitamin-supplement': 'Vitamin Supplement',
  steroids: 'Steroid',
  steroid: 'Steroid',
  gastrointestinal: 'Gastrointestinal',
  nsaid: 'NSAID (Non-Steroidal Anti-Inflammatory Drug)',
  nsaids: 'NSAID (Non-Steroidal Anti-Inflammatory Drug)',
  nutraceuticals: 'Nutraceutical',
  nutraceutical: 'Nutraceutical',
  antidiabetic: 'Antidiabetic',
  'liver-tonics': 'Liver Tonic',
  'liver-tonic': 'Liver Tonic',
  antacids: 'Antacid',
  antacid: 'Antacid',
  'iron-supplements': 'Iron Supplement',
  'iron-supplement': 'Iron Supplement',
  antihypertensive: 'Antihypertensive',
  urology: 'Urology',
  vertigo: 'Vertigo',
  ophthalmic: 'Ophthalmic',
  'digestive-enzymes': 'Digestive Enzyme',
  'digestive-enzyme': 'Digestive Enzyme',
  probiotics: 'Probiotic',
  probiotic: 'Probiotic',
  analgesics: 'Analgesic',
  analgesic: 'Analgesic',
  'nutritional-supplements': 'Nutritional Supplement',
  'nutritional-supplement': 'Nutritional Supplement',
  'neuropathic-pain': 'Neuropathic Pain',
  psychiatric: 'Psychiatric',
  gynaecological: 'Gynaecological',
  'gout-management': 'Gout Management',
};

const CATEGORY_DESC_MAP: { [key: string]: string } = {
  Tablets:
    'We distribute a comprehensive portfolio of high-quality tablets across India. Sourced from WHO-GMP certified facilities, our tablets cover major therapeutic areas including antibiotics, NSAIDs, and gastrointestinal care, offering high efficacy and attractive blister/strip packaging.',
  Injections:
    'Our sterile, premium injectables are manufactured under strict WHO-GMP compliance to guarantee absolute purity, safety, and efficacy. We offer critical care injections, antibiotics, and vitamins in secure vials and ampoules for rapid therapeutic action.',
  'Syrup/Suspension':
    'Explore our range of pediatric and adult liquid formulations, including cough syrups, suspensions, and dry syrups. Designed for high bioavailability, our syrups feature accurate dosing and pleasant flavors to ensure patient compliance.',
  Capsules:
    'Browse our diverse selection of hard and soft gelatin capsules. Formulated with high-quality active ingredients, our capsules provide excellent stability and precise release profiles for vitamins, probiotics, and gastrointestinal drugs.',
  'Eye Drops':
    'We offer sterile ophthalmic solutions formulated to meet global safety standards. Our eye drops target dry eyes, bacterial infections, and inflammation, packaged in convenient dropper bottles for precise administration.',
  Respules:
    'Our nebulizer solutions (respules) are sterile liquid formulations designed for inhalation therapy. Highly effective for asthma and COPD management, they deliver direct bronchodilator and anti-inflammatory relief.',
  'Gel/Ointment':
    'Discover our topical formulations for dermatological and pain management applications. Our gels and ointments offer smooth absorption and fast-acting relief for skin infections, inflammation, and joint pain.',
  Sachets:
    'We provide premium powder formulations in convenient, single-use sachets. Ideal for probiotics, nutritional supplements, and rehydration salts, our sachets maintain ingredient freshness and offer easy water-dispersible dosing.',
};

const THERAPEUTIC_DESC_MAP: { [key: string]: string } = {
  Antibiotic:
    'Rapid Pharmaceuticals is a leading distributor of broad-spectrum antibiotics in India. Sourced from WHO-GMP certified partners, our antibiotic range includes cephalosporins, macrolides, and penicillins in tablet, injection, and pediatric syrup forms to treat various bacterial infections.',
  'Antiallergic & Respiratory':
    'Our respiratory and antiallergic formulations offer rapid relief from seasonal allergies, allergic rhinitis, and asthma. Featuring advanced antihistamines and leukotriene receptor antagonists, our products help restore clear breathing and comfort.',
  'Cough & Cold':
    'We offer fast-acting cough and cold formulations, including cough suppressants, mucolytics, and bronchodilators. Our range treats productive and dry coughs, nasal congestion, and cold symptoms with sustained effectiveness.',
  'Vitamin Supplement':
    'Enhance overall health and address nutritional deficiencies with our high-potency vitamin supplements. Our portfolio features Vitamin D3, B-complex, and multivitamin formulations in convenient capsules, solutions, and drops.',
  Gastrointestinal:
    'Our gastrointestinal product range offers effective relief from acid reflux, GERD, indigestion, and bloating. We provide advanced PPIs (proton pump inhibitors) like pantoprazole, rabeprazole, and esomeprazole combined with prokinetics.',
  'NSAID (Non-Steroidal Anti-Inflammatory Drug)':
    'Manage pain, fever, and inflammation effectively with our high-quality NSAIDs and analgesics. Our formulations include aceclofenac, paracetamol, and nimesulide combinations designed for fast-acting and long-lasting relief.',
  Antacid:
    'Soothe acidity, heartburn, and gas discomfort with our quick-acting antacid formulations. Sourced from WHO-GMP certified facilities, our antacids neutralize excess stomach acid and protect the gastric lining.',
  Probiotic:
    'Support gut health and restore natural digestive balance with our premium probiotic formulations. Featuring active lactic acid bacillus and bacillus clausii spores, our probiotics help prevent antibiotic-associated diarrhea and boost immunity.',
  Gynaecological:
    "Explore our range of gynaecological formulations at Rapid Pharmaceuticals. Sourced from WHO-GMP certified facilities, our gynecological products offer premium quality, attractive packaging, and effective therapeutic support for women's reproductive wellness.",
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProductsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  selectedType: string | null = null;
  pageSize = 12; // Changed from 8 to 12
  searchText = '';
  errorMessage: string = '';
  currentPage = 0;
  totalPages = 1;
  pageNumbers: number[] = [];

  pageTitle = 'Our Products';
  pageSubtitle =
    'Explore our extensive range of high-quality pharmaceutical formulations.';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private ldJsonService: LdJsonService,
  ) {}

  ngOnInit() {
    try {
      this.products = products;
      this.categories = ['All', ...new Set(products.map((p) => p.category))];

      this.route.paramMap.subscribe((params) => {
        const categorySlug = params.get('categorySlug');
        const typeSlug = params.get('typeSlug');

        // Reset search text and inputs
        this.searchText = '';
        this.selectedCategory = 'All';
        this.selectedType = null;
        this.pageTitle = 'Our Products';
        this.pageSubtitle =
          'Explore our extensive range of high-quality pharmaceutical formulations.';

        let matchedCategoryName = '';
        let matchedTypeName = '';

        if (categorySlug) {
          const matchedKey =
            Object.keys(CATEGORY_SLUG_MAP).find(
              (k) => k === categorySlug.toLowerCase(),
            ) ||
            Object.keys(CATEGORY_SLUG_MAP).find(
              (k) =>
                k.replace(/[^a-z0-9]/g, '') ===
                categorySlug.toLowerCase().replace(/[^a-z0-9]/g, ''),
            );
          if (matchedKey) {
            matchedCategoryName = CATEGORY_SLUG_MAP[matchedKey];
            this.selectedCategory = matchedCategoryName;
            this.pageTitle = `${matchedCategoryName} Formulations`;
            this.pageSubtitle =
              CATEGORY_DESC_MAP[matchedCategoryName] ||
              `Explore our high-quality range of ${matchedCategoryName.toLowerCase()} pharmaceutical formulations.`;

            // Set SEO
            const seoTitle = `${matchedCategoryName} Manufacturers & PCD Franchise in India | Rapid Pharmaceuticals`;
            const seoDesc = this.pageSubtitle;
            this.titleService.setTitle(seoTitle);
            this.metaService.updateTag({
              name: 'description',
              content: seoDesc,
            });
            this.metaService.updateTag({
              name: 'keywords',
              content: `${matchedCategoryName.toLowerCase()}, pharma ${matchedCategoryName.toLowerCase()}, WHO-GMP ${matchedCategoryName.toLowerCase()}, Rapid Pharmaceuticals`,
            });
            this.canonicalService.setCanonicalURL(
              `https://www.rapidpharmaceuticals.in/category/${categorySlug}`,
            );
          }
        } else if (typeSlug) {
          const matchedKey =
            Object.keys(THERAPEUTIC_SLUG_MAP).find(
              (k) => k === typeSlug.toLowerCase(),
            ) ||
            Object.keys(THERAPEUTIC_SLUG_MAP).find(
              (k) =>
                k.replace(/[^a-z0-9]/g, '') ===
                typeSlug.toLowerCase().replace(/[^a-z0-9]/g, ''),
            );
          if (matchedKey) {
            matchedTypeName = THERAPEUTIC_SLUG_MAP[matchedKey];
            this.selectedType = matchedTypeName;

            // Make plural form for nicer headings
            let displayType = matchedTypeName;
            if (matchedTypeName.toLowerCase() === 'antibiotic')
              displayType = 'Antibiotics';
            else if (matchedTypeName.toLowerCase() === 'steroid')
              displayType = 'Steroids';
            else if (matchedTypeName.toLowerCase() === 'antacid')
              displayType = 'Antacids';
            else if (matchedTypeName.toLowerCase() === 'probiotic')
              displayType = 'Probiotics';
            else if (matchedTypeName.toLowerCase() === 'analgesic')
              displayType = 'Analgesics';

            this.pageTitle = `${displayType} Range`;
            this.pageSubtitle =
              THERAPEUTIC_DESC_MAP[matchedTypeName] ||
              `High-quality ${displayType.toLowerCase()} formulations by WHO-GMP certified manufacturers. Sourced from trusted partners for PCD Pharma franchise and wholesale distribution.`;

            // Set SEO
            const seoTitle = `WHO-GMP ${displayType} Manufacturers & PCD Franchise | Rapid Pharmaceuticals`;
            const seoDesc = this.pageSubtitle;
            this.titleService.setTitle(seoTitle);
            this.metaService.updateTag({
              name: 'description',
              content: seoDesc,
            });
            this.metaService.updateTag({
              name: 'keywords',
              content: `${displayType.toLowerCase()}, ${matchedTypeName.toLowerCase()} pharma, WHO-GMP ${matchedTypeName.toLowerCase()}, PCD franchise`,
            });
            this.canonicalService.setCanonicalURL(
              `https://www.rapidpharmaceuticals.in/type/${typeSlug}`,
            );
          }
        } else {
          // Default Products Page SEO
          this.titleService.setTitle('Products - Rapid Pharmaceuticals');
          this.metaService.updateTag({
            name: 'description',
            content:
              'Explore the full list of products offered by Rapid Pharmaceuticals. Top WHO-GMP and ISO certified medicines for PCD Pharma Franchise.',
          });
          this.canonicalService.setCanonicalURL(
            'https://www.rapidpharmaceuticals.in/products',
          );
        }

        // Apply filtering
        this.filterProducts();

        // Update JSON-LD Schemas
        this.updateSchema(
          matchedCategoryName,
          categorySlug || undefined,
          matchedTypeName,
          typeSlug || undefined,
        );
      });
    } catch (error) {
      this.errorMessage = 'Error loading products';
      console.error('Error:', error);
    }
  }

  filterByCategory(category: string) {
    if (category === 'All') {
      this.router.navigate(['/products']);
    } else {
      const slug = Object.keys(CATEGORY_SLUG_MAP).find(
        (k) => CATEGORY_SLUG_MAP[k] === category,
      );
      if (slug) {
        this.router.navigate(['/category', slug]);
      } else {
        this.selectedCategory = category;
        this.filterProducts();
      }
    }
  }

  onSearchChange() {
    this.filterProducts();
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  filterProducts() {
    const query = (this.searchText || '').toLowerCase().trim();
    const searchWords = query
      ? query
          .split(/\s+/)
          .map((w) => w.replace(/[^a-z0-9]/g, ''))
          .filter(Boolean)
      : [];

    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      const matchesType =
        !this.selectedType || product.therapeuticClass === this.selectedType;

      const matchesFilters = matchesCategory && matchesType;

      if (searchWords.length === 0) {
        return matchesFilters;
      }

      const normalizedName = (product.name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
      const normalizedComposition = (product.composition || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

      // Check if all search words are found in either normalized name or normalized composition
      const matchesSearch = searchWords.every(
        (word) =>
          normalizedName.includes(word) || normalizedComposition.includes(word),
      );

      return matchesFilters && matchesSearch;
    });
    this.currentPage = 0; // Reset page when filtering
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize,
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.updatePagedProducts();
  }

  private updateSchema(
    categoryName?: string,
    categorySlug?: string,
    typeName?: string,
    typeSlug?: string,
  ) {
    const itemListElement: any[] = [
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
    ];

    if (categoryName && categorySlug) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        name: categoryName,
        item: `https://www.rapidpharmaceuticals.in/category/${categorySlug}`,
      });
    } else if (typeName && typeSlug) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        name: typeName,
        item: `https://www.rapidpharmaceuticals.in/type/${typeSlug}`,
      });
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement,
    };

    // ItemList of filtered products
    const itemListSchema = {
      '@context': 'https://schema.org/',
      '@type': 'ItemList',
      name: this.pageTitle,
      description: this.pageSubtitle,
      numberOfItems: this.filteredProducts.length,
      itemListElement: this.filteredProducts
        .slice(0, 20)
        .map((product, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Product',
            name: product.name,
            url: `https://www.rapidpharmaceuticals.in/products/${product.slug}`,
            image: product.imageUrl.startsWith('/')
              ? `https://www.rapidpharmaceuticals.in${product.imageUrl}`
              : `https://www.rapidpharmaceuticals.in/${product.imageUrl}`,
            description: product.metaDescription || product.composition,
            category: product.medicalCategory || product.category,
            brand: {
              '@type': 'Brand',
              name: 'Rapid Pharmaceuticals',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: product.mrp,
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
            },
            ...(product.avgRating && {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.avgRating,
                reviewCount: product.reviewCount || 0,
              },
            }),
          },
        })),
    };

    const schemas = [breadcrumbSchema, itemListSchema];

    this.ldJsonService.setSchema(schemas);
  }

  ngOnDestroy(): void {
    this.ldJsonService.removeSchema();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.updatePagedProducts();
  }

  private updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize,
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  goToProduct(product: Product) {
    this.router.navigate(['/products', product.slug]);
  }

  getVisiblePages(): number[] {
    const totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    if (this.currentPage === 0) {
      return [0, 1, 2];
    }

    if (this.currentPage === totalPages - 1) {
      return [totalPages - 3, totalPages - 2, totalPages - 1];
    }

    return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
  }
}
