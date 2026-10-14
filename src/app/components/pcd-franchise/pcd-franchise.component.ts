import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { stateDistricts } from '../../data/state-districts';
import { CanonicalService } from '../../services/canonicalService';
import { LdJsonService } from '../../services/ld-json.service';

export interface Location {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductDosageCategory {
  category: string;
  slug: string;
  formulations: string;
  popularItems: string;
}

@Component({
  selector: 'app-pcd-franchise',
  templateUrl: './pcd-franchise.component.html',
  styleUrls: ['./pcd-franchise.component.css'],
})
export class PcdFranchiseComponent implements OnInit, OnDestroy {
  locations: Location[] = [
    {
      name: 'Andhra Pradesh',
      slug: 'andhra-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD business with Rapid Pharmaceuticals in Andhra Pradesh with monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'Arunachal Pradesh',
      slug: 'arunachal-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Grow your pharma business with Rapid Pharmaceuticals offering PCD franchise in Arunachal Pradesh with WHO-GMP certified medicines.',
    },
    {
      name: 'Assam',
      slug: 'assam',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals offers PCD pharma franchise in Assam with quality medicines, marketing support, and monopoly rights.',
    },
    {
      name: 'Bihar',
      slug: 'bihar',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD business in Bihar with Rapid Pharmaceuticals offering DCGI-approved medicines, monopoly rights, and complete support.',
    },
    {
      name: 'Chhattisgarh',
      slug: 'chhattisgarh',
      image: '/pcdimagestate1.webp',
      description:
        'Partner with Rapid Pharmaceuticals for PCD pharma franchise in Chhattisgarh with monopoly rights and WHO-GMP certified products.',
    },
    {
      name: 'Goa',
      slug: 'goa',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Goa with low investment, monopoly rights, quality medicines, and promotional support.',
    },
    {
      name: 'Gujarat',
      slug: 'gujarat',
      image: '/pcdimagestate1.webp',
      description:
        'Get PCD pharma franchise in Gujarat with WHO-GMP certified products, quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Haryana',
      slug: 'haryana',
      image: '/pcdimagestate1.webp',
      description:
        'Become a partner with Rapid Pharmaceuticals in Haryana with monopoly rights, quality medicines, and full promotional support.',
    },
    {
      name: 'Himachal Pradesh',
      slug: 'himachal-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals offers PCD pharma franchise opportunities in Himachal Pradesh with quality medicines and marketing support.',
    },
    {
      name: 'Jharkhand',
      slug: 'jharkhand',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with a trusted pharma franchise company in Jharkhand. Get PCD pharma franchise with exclusive distribution rights.',
    },
    {
      name: 'Karnataka',
      slug: 'karnataka',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your business with Rapid Pharmaceuticals offering PCD pharma franchise opportunities in Karnataka with quality medicines.',
    },
    {
      name: 'Kerala',
      slug: 'kerala',
      image: '/pcdimagestate1.webp',
      description:
        'Partner with Rapid Pharmaceuticals in Kerala. Get PCD pharma franchise with monopoly rights and complete marketing support.',
    },
    {
      name: 'Madhya Pradesh',
      slug: 'madhya-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with PCD pharma franchise in Madhya Pradesh with quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Maharashtra',
      slug: 'maharashtra',
      image: '/pcdimagestate1.webp',
      description:
        'Get exclusive PCD pharma franchise in Maharashtra with top-quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Manipur',
      slug: 'manipur',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals offers PCD pharma franchise in Manipur with quality medicines, monopoly rights, and full marketing support.',
    },
    {
      name: 'Meghalaya',
      slug: 'meghalaya',
      image: '/pcdimagestate1.webp',
      description:
        'Join Rapid Pharmaceuticals offering PCD pharma franchise opportunities in Meghalaya with quality medicines and marketing support.',
    },
    {
      name: 'Mizoram',
      slug: 'mizoram',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with PCD pharma franchise in Mizoram with quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Nagaland',
      slug: 'nagaland',
      image: '/pcdimagestate1.webp',
      description:
        'Become a partner with Rapid Pharmaceuticals in Nagaland. Start your PCD pharma franchise with monopoly rights and marketing support.',
    },
    {
      name: 'Odisha',
      slug: 'odisha',
      image: '/pcdimagestate1.webp',
      description:
        'Get PCD pharma franchise in Odisha with quality medicines, wide product range, monopoly rights, and full marketing support.',
    },
    {
      name: 'Punjab',
      slug: 'punjab',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Punjab with Rapid Pharmaceuticals offering quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Rajasthan',
      slug: 'rajasthan',
      image: '/pcdimagestate1.webp',
      description:
        'Avail PCD pharma franchise in Rajasthan with WHO-GMP certified medicines, monopoly rights, wide product range, and marketing support.',
    },
    {
      name: 'Sikkim',
      slug: 'sikkim',
      image: '/pcdimagestate1.webp',
      description:
        'Join Rapid Pharmaceuticals offering PCD pharma franchise in Sikkim with exclusive monopoly rights, quality medicines, and support.',
    },
    {
      name: 'Tamil Nadu',
      slug: 'tamil-nadu',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Tamil Nadu with quality medicines, monopoly rights, and strong promotional support.',
    },
    {
      name: 'Telangana',
      slug: 'telangana',
      image: '/pcdimagestate1.webp',
      description:
        'Grow your pharma business with Rapid Pharmaceuticals offering PCD pharma franchise in Telangana with quality medicines.',
    },
    {
      name: 'Tripura',
      slug: 'tripura',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with PCD pharma franchise in Tripura with quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Uttar Pradesh',
      slug: 'uttar-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Uttar Pradesh with quality medicines, monopoly rights, wide product range, and marketing support.',
    },
    {
      name: 'Uttarakhand',
      slug: 'uttarakhand',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals offers PCD pharma franchise in Uttarakhand with monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'West Bengal',
      slug: 'west-bengal',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your business with Rapid Pharmaceuticals in West Bengal offering PCD pharma franchise, quality medicines, and monopoly rights.',
    },
    // Union Territories
    {
      name: 'Delhi',
      slug: 'delhi',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with PCD pharma franchise in Delhi with quality medicines, monopoly rights, wide product range, and support.',
    },
    {
      name: 'Chandigarh',
      slug: 'chandigarh',
      image: '/pcdimagestate1.webp',
      description:
        'Get monopoly-based PCD pharma franchise in Chandigarh with Rapid Pharmaceuticals offering quality medicines and strong marketing support.',
    },
    {
      name: 'Jammu and Kashmir',
      slug: 'jammu-and-kashmir',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with PCD pharma franchise in Jammu and Kashmir with WHO-GMP certified medicines and marketing support.',
    },
    {
      name: 'Ladakh',
      slug: 'ladakh',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with PCD pharma franchise in Ladakh with monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'Andaman and Nicobar Islands',
      slug: 'andaman-nicobar',
      image: '/pcdimagestate1.webp',
      description:
        'Explore PCD pharma franchise in Andaman & Nicobar Islands with Rapid Pharmaceuticals offering quality medicines and support.',
    },
    {
      name: 'Dadra and Nagar Haveli and Daman and Diu',
      slug: 'dadraandnagarhavelianddamananddiu',
      image: '/pcdimagestate1.webp',
      description:
        'Start PCD pharma franchise in Dadra & Nagar Haveli and Daman & Diu with Rapid Pharmaceuticals offering monopoly rights.',
    },
    {
      name: 'Lakshadweep',
      slug: 'lakshadweep',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your PCD pharma franchise in Lakshadweep with quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Puducherry',
      slug: 'puducherry',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals offers PCD pharma franchise in Puducherry with quality medicines, monopoly rights, and full marketing support.',
    },
  ];

  selectedLocation: Location | null = null;
  selectedDistrict: string | null = null;
  districtList: string[] = [];
  isStatePage = false;
  seoVariationIndex = 0;

  productCategories: ProductDosageCategory[] = [
    {
      category: 'Tablets & Capsules',
      slug: 'tablets',
      formulations:
        'Antibiotics, Analgesics, Anti-inflammatory, Anti-ulcerants, Multivitamins, Cardiac & Diabetic Care',
      popularItems:
        'Amoxicillin + Clavulanate, Pantoprazole DSR, Aceclofenac + Paracetamol, Azithromycin 500mg, Cefixime 200mg',
    },
    {
      category: 'Syrups & Suspensions',
      slug: 'syrup-suspension',
      formulations:
        'Cough Syrups, Digestive Enzyme Liquids, Antacids, Multivitamin Syrups, Pediatric Drops & Suspensions',
      popularItems:
        'Dextromethorphan + CPM Syrup, B-Complex + L-Lysine Syrup, Magaldrate + Simethicone, Paracetamol Pediatric Drops',
    },
    {
      category: 'Injectables & Critical Care',
      slug: 'injections',
      formulations:
        'Critical Care Injections, Antibiotic Suspensions, Pain Relievers, Antiemetics',
      popularItems:
        'Ceftriaxone 1g Injection, Methylprednisolone, Ondansetron, Diclofenac Sodium 75mg AQ',
    },
    {
      category: 'Ointments & Topicals',
      slug: 'gel-ointment',
      formulations:
        'Pain-Relieving Gels, Antifungal Creams, Antibacterial Ointments, Dermatological Formulations',
      popularItems:
        'Diclofenac + Linseed Oil Gel, Luliconazole 1% Cream, Clobetasol + Neomycin Ointment',
    },
    {
      category: 'Nutraceuticals & Protein Powders',
      slug: 'sachets',
      formulations:
        'Energy Drinks, Protein Supplements, Probiotic Sachets, Dietary Health Tonics',
      popularItems:
        'Pre & Probiotic Sachets, Cholecalciferol 60k IU, Whey Protein Powder 200g, Dextrose Energy Drink',
    },
    {
      category: 'Eye / ENT Drops & Respules',
      slug: 'eye-drops',
      formulations:
        'Antibacterial Eye/Ear Drops, Lubricating Eye Drops, Inhalation Solutions',
      popularItems:
        'Moxifloxacin Eye Drops, Carboxymethylcellulose 0.5%, Budesonide Inhalation Respules',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private ldJsonService: LdJsonService,
  ) {}

  getSlug(value: string): string {
    return value
      ? value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
      : '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawSlug = params.get('slug');

      if (!rawSlug) {
        this.selectedLocation = null;
        this.selectedDistrict = null;
        this.isStatePage = false;
        this.updateSEO();
        return;
      }

      const cleanSlug = this.getSlug(rawSlug);

      // 1️⃣ Match State
      const matchedState = this.locations.find(
        (loc) =>
          this.getSlug(loc.slug) === cleanSlug ||
          this.getSlug(loc.name) === cleanSlug,
      );

      if (matchedState) {
        this.selectedLocation = matchedState;
        this.isStatePage = true;
        this.selectedDistrict = null;
        this.districtList = stateDistricts[matchedState.slug] || [];
        this.seoVariationIndex = this.getSeoVariation(matchedState.name);
        this.updateSEO(this.selectedLocation);
        return;
      }

      // 2️⃣ Match District
      const allDistricts = Object.entries(stateDistricts).flatMap(
        ([stateKey, districts]) =>
          districts.map((d) => ({
            stateKey,
            name: d,
            slug: this.getSlug(d),
          })),
      );

      // Check current state first if user was already browsing a specific state
      let matchedDistrict =
        this.selectedLocation && stateDistricts[this.selectedLocation.slug]
          ? allDistricts.find(
              (d) =>
                d.stateKey === this.selectedLocation?.slug &&
                (d.slug === cleanSlug || this.getSlug(d.name) === cleanSlug),
            )
          : undefined;

      if (!matchedDistrict) {
        matchedDistrict = allDistricts.find(
          (d) => d.slug === cleanSlug || this.getSlug(d.name) === cleanSlug,
        );
      }

      if (matchedDistrict) {
        this.selectedDistrict = matchedDistrict.name;
        this.selectedLocation =
          this.locations.find(
            (l) =>
              this.getSlug(l.slug) === this.getSlug(matchedDistrict.stateKey) ||
              this.getSlug(l.name) === this.getSlug(matchedDistrict.stateKey),
          ) || null;
        this.isStatePage = false;
        this.districtList =
          stateDistricts[matchedDistrict.stateKey] ||
          (this.selectedLocation
            ? stateDistricts[this.selectedLocation.slug]
            : []) ||
          [];
        this.seoVariationIndex = this.getSeoVariation(matchedDistrict.name);
        this.updateSEO(
          this.selectedLocation || undefined,
          this.selectedDistrict,
        );
        return;
      }

      // 3️⃣ Fallback
      this.selectedLocation = null;
      this.selectedDistrict = null;
      this.isStatePage = false;
      this.updateSEO();
    });

    // Scroll-to-top on route change
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationEnd &&
        isPlatformBrowser(this.platformId)
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy(): void {
    this.ldJsonService.removeSchema();
  }

  getDistrictHubs(
    stateSlug: string,
  ): { city: string; slug: string; desc: string }[] {
    if (this.districtList && this.districtList.length > 0) {
      const topDistricts = this.districtList.slice(0, 8);
      return topDistricts.map((d) => ({
        city: d,
        slug: this.getSlug(d),
        desc: `A prime commercial and healthcare territory in ${this.selectedLocation?.name || 'the state'} offering exceptional market demand for quality medicines, low competition, and strong growth potential for monopoly franchise partners.`,
      }));
    }
    return [];
  }

  getFaqs(stateName?: string, districtName?: string): FaqItem[] {
    if (districtName) {
      return this.getDistrictFaqs(districtName, stateName);
    }
    if (stateName) {
      return this.getStateFaqs(stateName);
    }
    return this.getNationalFaqs();
  }

  getNationalFaqs(): FaqItem[] {
    return [
      {
        question: 'What is a PCD Pharma Franchise and how does it work?',
        answer:
          'A PCD (Propaganda Cum Distribution) Pharma Franchise allows an individual or distributor to secure marketing and distribution rights from Rapid Pharmaceuticals for a specific geographic territory with exclusive monopoly protection.',
      },
      {
        question:
          'What documents are required to start a PCD Pharma Franchise?',
        answer:
          'To partner with Rapid Pharmaceuticals, you need a valid Wholesale Drug License (WDL) and a GST Registration number.',
      },
      {
        question: 'Does Rapid Pharmaceuticals provide monopoly rights?',
        answer:
          'Yes, Rapid Pharmaceuticals grants written monopoly distribution rights for your designated district or territory to ensure zero internal competition.',
      },
      {
        question: 'What promotional support do you provide?',
        answer:
          'We provide visual aids, detail books, Leave-Behind Literature (LBL), product cards, physician samples, MR bags, visiting cards, and reminder cards.',
      },
      {
        question: 'How fast are orders dispatched?',
        answer:
          'Orders are dispatched within 24 to 48 hours of order confirmation through premier express logistics networks across India.',
      },
    ];
  }

  getStateFaqs(stateName: string): FaqItem[] {
    return [
      {
        question: `What is a PCD Pharma Franchise and how does it function in ${stateName}?`,
        answer: `In ${stateName}, a PCD franchise grants you exclusive commercial rights to distribute Rapid Pharmaceuticals' WHO-GMP certified products directly to healthcare providers, clinics, and chemists across your designated territory.`,
      },
      {
        question: `What documents and licenses are required to start in ${stateName}?`,
        answer: `You require a valid Wholesale Drug License (WDL) issued in ${stateName} and an active GST Registration number.`,
      },
      {
        question: `Does Rapid Pharmaceuticals offer monopoly rights in ${stateName}?`,
        answer: `Yes. Rapid Pharmaceuticals provides written territorial monopoly rights across districts in ${stateName}, ensuring you operate without competition from other distributors of our brand.`,
      },
      {
        question: `What is the initial investment required for a franchise in ${stateName}?`,
        answer: `Our franchise model requires low initial investment with attractive wholesale profit margins, enabling fast break-even and sustainable growth.`,
      },
      {
        question: `What promotional support does Rapid Pharmaceuticals provide in ${stateName}?`,
        answer: `We supply complete promotional inputs including visual aids, sample kits, product glossaries, MR bags, visiting cards, and doctor reminder cards.`,
      },
      {
        question: `How fast are orders dispatched to ${stateName}?`,
        answer: `Orders are packed and dispatched within 24–48 hours to ensure continuous stock availability across all districts of ${stateName}.`,
      },
    ];
  }

  getDistrictFaqs(districtName: string, stateName?: string): FaqItem[] {
    const loc = stateName ? `${districtName} (${stateName})` : districtName;
    return [
      {
        question: `Can I get exclusive monopoly rights for ${districtName}?`,
        answer: `Yes, Rapid Pharmaceuticals grants 100% written monopoly rights for ${districtName}. No other distributor will be appointed for our product portfolio in your designated area.`,
      },
      {
        question: `What product segments are in high demand in ${districtName}?`,
        answer: `In ${districtName}, high-demand categories include Antibiotics, Pain & Anti-inflammatory (NSAIDs), Cough & Cold Suspensions, Gastrointestinal & Antacids, Multivitamins, and Pediatric Drops.`,
      },
      {
        question: `What is the delivery timeline for orders in ${districtName}?`,
        answer: `Stock is dispatched within 24 to 48 hours via express freight directly to ${districtName}, minimizing stockouts and maintaining steady supply for local doctors and chemists.`,
      },
      {
        question: `What promotional inputs will I receive for doctor detailing in ${districtName}?`,
        answer: `You receive professional visual aids, doctor samples, product literature, MR bags, and reminder cards customized to accelerate doctor prescription generation in ${districtName}.`,
      },
      {
        question: `How do I apply for the ${districtName} franchise?`,
        answer: `Simply click Apply for Franchise to submit your contact details. Our franchise development manager will contact you with territory confirmation and the complete product catalogue.`,
      },
    ];
  }

  updateSEO(location?: Location, district?: string): void {
    const baseTitle =
      'PCD Pharma Franchise in India | Monopoly Rights | Rapid Pharmaceuticals';
    const baseDesc =
      'Expand your business with Rapid Pharmaceuticals, a top PCD Pharma Franchise Company in India. 150+ WHO-GMP certified medicines, monopoly rights & full marketing support.';

    let title = baseTitle;
    let description = baseDesc;
    let url = 'https://www.rapidpharmaceuticals.in/pcd-pharma-franchise';
    let regionName = 'India';

    if (district) {
      title = `PCD Pharma Franchise in ${district} | Monopoly Rights | Rapid Pharmaceuticals`;
      description = `Start PCD Pharma Franchise in ${district} with Rapid Pharmaceuticals. High-quality WHO-GMP certified medicines, monopoly rights, and full promotional support included.`;
      url = `https://www.rapidpharmaceuticals.in/pcd-pharma-franchise-in-${this.getSlug(district)}`;
      regionName = district;
    } else if (location) {
      title = `PCD Pharma Franchise in ${location.name} | Monopoly Rights | Rapid Pharmaceuticals`;
      description = `Expand your business with Rapid Pharmaceuticals' PCD Pharma Franchise in ${location.name}. High-quality medicines, monopoly rights, and full promotional support included.`;
      url = `https://www.rapidpharmaceuticals.in/pcd-pharma-franchise-in-${location.slug}`;
      regionName = location.name;
    }

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords',
      content: `Best PCD Pharma Franchise, Best Pharmaceutical Company in ${regionName}, Rapid Pharmaceuticals, PCD Pharma Company in ${regionName}, PCD Pharma Distributorship in ${regionName}, PCD Pharma Franchise, pcd pharma franchise business, PCD Pharma Franchise Company, PCD Pharma Franchise in ${regionName}, Pharma Distribution Business in ${regionName}, Pharma Franchise Business in ${regionName}, Pharma Franchise Opportunity in ${regionName}, Pharma Products Franchise in ${regionName}, Pharmaceutical Franchise Company in ${regionName}, Top Pharma Franchise Company in ${regionName}`,
    });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.rapidpharmaceuticals.in/pcd1.webp',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.canonicalService.setCanonicalURL(url);

    const faqs = district
      ? this.getDistrictFaqs(district, location?.name)
      : location
        ? this.getStateFaqs(location.name)
        : this.getNationalFaqs();

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': url,
          url: url,
          name: title,
          description: description,
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.rapidpharmaceuticals.in/#website',
            name: 'Rapid Pharmaceuticals',
            url: 'https://www.rapidpharmaceuticals.in/',
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.rapidpharmaceuticals.in/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'PCD Pharma Franchise',
                item: 'https://www.rapidpharmaceuticals.in/pcd-pharma-franchise',
              },
              ...(location
                ? [
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: `PCD Pharma Franchise in ${location.name}`,
                      item: `https://www.rapidpharmaceuticals.in/pcd-pharma-franchise-in-${location.slug}`,
                    },
                  ]
                : []),
              ...(district
                ? [
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: `PCD Pharma Franchise in ${district}`,
                      item: url,
                    },
                  ]
                : []),
            ],
          },
        },
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: title,
          description: description,
          publisher: {
            '@type': 'Organization',
            name: 'Rapid Pharmaceuticals',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.rapidpharmaceuticals.in/assets/logo.webp',
            },
          },
          mainEntityOfPage: url,
          image: 'https://www.rapidpharmaceuticals.in/pcd1.webp',
          author: {
            '@type': 'Organization',
            name: 'Rapid Pharmaceuticals',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${url}#business`,
          name: 'Rapid Pharmaceuticals',
          url: url,
          description: description,
          image: 'https://www.rapidpharmaceuticals.in/assets/logo.webp',
          telephone: '+919878811167',
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            addressLocality: district || location?.name || 'India',
            addressRegion: location?.name || 'India',
            addressCountry: 'India',
          },
        },
      ],
    };

    this.ldJsonService.setSchema(schema);
  }

  goToFranchise(slug: string): void {
    const normalizedSlug = this.getSlug(slug);
    this.router.navigate(['/pcd-pharma-franchise-in-' + normalizedSlug]);
  }

  goToDistrict(district: string): string[] {
    const districtSlug = this.getSlug(district);
    return ['/pcd-pharma-franchise-in-' + districtSlug];
  }

  backToList(): void {
    this.router.navigate(['/pcd-pharma-franchise']);
  }

  scrollToInquiry(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('inquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        this.router.navigate(['/contact']);
      }
    }
  }

  getSeoVariation(name: string): number {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 3;
  }
}
