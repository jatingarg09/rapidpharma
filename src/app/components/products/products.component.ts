import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, products } from '../../data/products';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';
import { LdJsonService } from '../../services/ld-json.service';
import {
  CATEGORY_SLUG_MAP,
  THERAPEUTIC_SLUG_MAP,
} from '../../data/product-category.config';

const CATEGORY_DESC_MAP: { [key: string]: string } = {
  Tablets:
    'Explore the pharmaceutical tablet range from Rapid Pharmaceuticals, sourced from WHO-GMP certified manufacturing partners. Our portfolio includes antibiotics, analgesics, gastrointestinal medicines and nutritional formulations for PCD Pharma Franchise and wholesale distribution across India.',

  Injections:
    'Discover our range of pharmaceutical injections, including antibiotic and other injectable formulations. Rapid Pharmaceuticals offers injectable products sourced from WHO-GMP certified manufacturing partners for PCD Pharma Franchise and pharmaceutical wholesale distribution.',

  'Syrup/Suspension':
    'Explore our range of pharmaceutical syrups, suspensions and dry syrups for pediatric and adult healthcare. Rapid Pharmaceuticals offers liquid formulations with competitive wholesale pricing and PCD Pharma Franchise opportunities across India.',

  Capsules:
    'Discover our pharmaceutical capsule range, including nutritional supplements and therapeutic formulations. Rapid Pharmaceuticals supplies capsules sourced from quality-focused manufacturing partners for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners.',

  'Eye Drops':
    'Explore the ophthalmic eye drop range from Rapid Pharmaceuticals. Our portfolio includes formulations for various ophthalmic applications, available for pharmaceutical wholesale distribution and PCD Pharma Franchise partnerships across India.',

  Respules:
    'Discover our range of pharmaceutical respules and nebulizer formulations for respiratory healthcare. Rapid Pharmaceuticals offers respiratory products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners.',

  'Gel/Ointment':
    'Explore our pharmaceutical gels and ointments for topical healthcare applications, including dermatological and pain management formulations. Rapid Pharmaceuticals offers topical products for wholesale distribution and PCD Pharma Franchise opportunities.',

  Sachets:
    'Discover our pharmaceutical sachet range, including powder and nutritional formulations. Rapid Pharmaceuticals supplies sachet products for pharmaceutical wholesale distribution and PCD Pharma Franchise partnerships across India.',
};

const THERAPEUTIC_DESC_MAP: { [key: string]: string } = {
  Antibiotics:
    'Explore the antibiotic range from Rapid Pharmaceuticals, including cephalosporins, macrolides and penicillin-based formulations. Our portfolio includes tablets, injections and pediatric dry syrups sourced from WHO-GMP certified manufacturing partners for PCD Pharma Franchise and wholesale distribution across India.',

  'Cough & Cold':
    'Discover our range of pharmaceutical cough and cold formulations, including syrups, suspensions and tablets for respiratory healthcare. Rapid Pharmaceuticals offers these products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners across India.',

  Vitamins:
    'Explore our range of vitamins, multivitamins and nutritional supplements, including Vitamin D3, mineral supplements and combination formulations. Rapid Pharmaceuticals offers nutritional products for pharmaceutical wholesale distribution and PCD Pharma Franchise opportunities across India.',

  Gastrointestinal:
    'Discover our gastrointestinal pharmaceutical range, including proton pump inhibitors, digestive formulations and medicines used in gastrointestinal care. Rapid Pharmaceuticals supplies gastrointestinal products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners.',

  'Pain & NSAIDs':
    'Explore our range of analgesics, NSAIDs and other pain management formulations. Rapid Pharmaceuticals offers pharmaceutical products for pain and inflammation management, available for wholesale distribution and PCD Pharma Franchise partnerships across India.',

  Antacids:
    'Discover our pharmaceutical antacid range, including formulations used in the management of acidity and heartburn. Rapid Pharmaceuticals offers antacid products for pharmaceutical wholesale distribution and PCD Pharma Franchise opportunities.',

  Probiotics:
    'Explore our probiotic pharmaceutical formulations for digestive healthcare. Rapid Pharmaceuticals supplies probiotic products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners across India.',

  Gynaecological:
    'Discover our gynaecological pharmaceutical range, including formulations for women’s healthcare and nutritional requirements. Rapid Pharmaceuticals offers products for pharmaceutical wholesale distribution and PCD Pharma Franchise partnerships across India.',

  Antidiabetic:
    'Explore our range of antidiabetic pharmaceutical formulations used in diabetes management. Rapid Pharmaceuticals supplies antidiabetic products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners across India.',

  Cardiovascular:
    'Discover our cardiovascular pharmaceutical range, including formulations used in blood pressure management and cardiovascular care. Rapid Pharmaceuticals offers cardiovascular products for wholesale distribution and PCD Pharma Franchise opportunities across India.',

  Ophthalmic:
    'Explore our ophthalmic pharmaceutical range, including eye drop formulations for various ophthalmic applications. Rapid Pharmaceuticals supplies ophthalmic products for pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners.',

  Vertigo:
    'Discover our range of pharmaceutical formulations used in the management of vertigo and related conditions. Rapid Pharmaceuticals offers these products for pharmaceutical wholesale distribution and PCD Pharma Franchise partnerships across India.',

  Psychiatric:
    'Explore our range of psychiatric and central nervous system pharmaceutical formulations. Rapid Pharmaceuticals supplies these products for licensed pharmaceutical distributors, wholesalers and PCD Pharma Franchise partners.',

  Urology:
    'Discover our urological pharmaceutical range, including formulations used in urinary tract and other urological conditions. Rapid Pharmaceuticals offers urology products for pharmaceutical wholesale distribution and PCD Pharma Franchise opportunities across India.',
};

const CATEGORY_META_DESC_MAP: Record<string, string> = {
  Tablets:
    'Explore pharmaceutical tablets from WHO-GMP manufacturing partners. Rapid Pharmaceuticals offers PCD Pharma Franchise and wholesale distribution in India.',

  Injections:
    'Explore pharmaceutical injections from WHO-GMP manufacturing partners for PCD Pharma Franchise and wholesale distribution with Rapid Pharmaceuticals.',

  'Syrup/Suspension':
    'Explore pharmaceutical syrups, suspensions and dry syrups from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  Capsules:
    'Explore pharmaceutical capsules and nutritional formulations from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  'Eye Drops':
    'Explore ophthalmic eye drops from Rapid Pharmaceuticals for pharmaceutical wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Respules:
    'Explore pharmaceutical respules and nebulizer formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise in India.',

  'Gel/Ointment':
    'Explore pharmaceutical gels and ointments from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Sachets:
    'Explore pharmaceutical sachets and powder formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise in India.',
};

const THERAPEUTIC_META_DESC_MAP: Record<string, string> = {
  Antibiotics:
    'Explore antibiotics from WHO-GMP manufacturing partners. Rapid Pharmaceuticals offers antibiotic PCD Pharma Franchise and wholesale distribution in India.',

  'Cough & Cold':
    'Explore cough and cold pharmaceutical formulations from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution across India.',

  Vitamins:
    'Explore vitamins, multivitamins and nutritional supplements from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  Gastrointestinal:
    'Explore gastrointestinal medicines from Rapid Pharmaceuticals for pharmaceutical wholesale distribution and PCD Pharma Franchise opportunities in India.',

  'Pain & NSAIDs':
    'Explore analgesics, NSAIDs and pain management formulations from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  Antacids:
    'Explore pharmaceutical antacid formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Probiotics:
    'Explore probiotic pharmaceutical formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Gynaecological:
    'Explore gynaecological and women’s healthcare formulations from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  Antidiabetic:
    'Explore antidiabetic pharmaceutical formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Cardiovascular:
    'Explore cardiovascular pharmaceutical formulations from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution across India.',

  Ophthalmic:
    'Explore ophthalmic medicines and eye drops from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',

  Vertigo:
    'Explore pharmaceutical formulations for vertigo management from Rapid Pharmaceuticals for PCD Pharma Franchise and wholesale distribution in India.',

  Psychiatric:
    'Explore psychiatric pharmaceutical formulations from Rapid Pharmaceuticals for licensed distributors, wholesalers and PCD Pharma Franchise partners.',

  Urology:
    'Explore urology pharmaceutical formulations from Rapid Pharmaceuticals for wholesale distribution and PCD Pharma Franchise opportunities in India.',
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

  pageTitle = 'Our Products';
  pageSubtitle =
    'Explore our extensive range of high-quality pharmaceutical formulations.';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService,
    private ldJsonService: LdJsonService,
  ) {}

  ngOnInit() {
    try {
      this.products = products;
      this.categories = ['All', ...new Set(products.map((p) => p.category))];

      this.route.paramMap.subscribe((params) => {
        const categorySlug = params.get('categorySlug');
        const typeSlug = params.get('typeSlug');
        this.metaService.updateTag({
          name: 'robots',
          content: 'index, follow, max-image-preview:large',
        });

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
            const seoTitle = `${matchedCategoryName} Manufacturers & PCD Franchise | Rapid Pharmaceuticals`;
            const seoDesc =
              CATEGORY_META_DESC_MAP[matchedCategoryName] || this.pageSubtitle;
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
          } else {
            console.warn('Category not found:', categorySlug);
            return;
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
            const seoTitle = `${displayType} Manufacturers & PCD Franchise | Rapid Pharmaceuticals`;
            const seoDesc =
              THERAPEUTIC_META_DESC_MAP[matchedTypeName] || this.pageSubtitle;
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
          } else {
            console.warn('Therapeutic type not found:', typeSlug);
            return;
          }
        } else {
          // Default Products Page SEO
          this.titleService.setTitle(
            'Pharmaceutical Products & PCD Range | Rapid Pharmaceuticals',
          );
          this.metaService.updateTag({
            name: 'description',
            content:
              'Explore the Rapid Pharmaceuticals product catalogue, including tablets, capsules, injections and syrups for PCD Pharma Franchise and wholesale distribution.',
          });
          this.canonicalService.setCanonicalURL(
            'https://www.rapidpharmaceuticals.in/products',
          );
        }

        const pageUrl = categorySlug
          ? `https://www.rapidpharmaceuticals.in/category/${categorySlug}`
          : typeSlug
            ? `https://www.rapidpharmaceuticals.in/type/${typeSlug}`
            : 'https://www.rapidpharmaceuticals.in/products';

        this.updateSocialMetadata(pageUrl);

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

  private updateSocialMetadata(url: string): void {
    const title = this.titleService.getTitle();

    const description =
      this.metaService.getTag("name='description'")?.content ||
      this.pageSubtitle;

    const image = 'https://www.rapidpharmaceuticals.in/rapidlogo.jpeg';

    this.metaService.updateTag({
      property: 'og:title',
      content: title,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: url,
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: image,
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: title,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: description,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: image,
    });
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
        !this.selectedType || product.medicalCategory === this.selectedType;

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
      itemListElement: this.pagedProducts.map((product, idx) => ({
        '@type': 'ListItem',
        position: this.currentPage * this.pageSize + idx + 1,
        name: product.name,
        url: `https://www.rapidpharmaceuticals.in/products/${product.slug}`,
      })),
    };

    const schemas = [breadcrumbSchema, itemListSchema];

    this.ldJsonService.setSchema(schemas);
  }

  ngOnDestroy(): void {
    this.ldJsonService.removeSchema();
  }

  onPageChange(pageIndex: number) {
    this.currentPage = pageIndex;
    this.updatePagedProducts();
  }

  private updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize,
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
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
