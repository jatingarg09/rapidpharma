import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { stateDistricts } from '../../data/state-districts';
import { CanonicalService } from '../../services/canonicalService';

interface Location {
  name: string;
  slug: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-pcd-franchise',
  templateUrl: './pcd-franchise.component.html',
  styleUrls: ['./pcd-franchise.component.css'],
})
export class PcdFranchiseComponent implements OnInit {
  locations: Location[] = [
    {
      name: 'Andhra Pradesh',
      slug: 'andhra-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD business with Rapid Pharmaceuticals, a trusted pharma franchise company in Andhra Pradesh offering monopoly rights, quality medicines, and strong support.',
    },
    {
      name: 'Arunachal Pradesh',
      slug: 'arunachal-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Grow your pharma business with a leading pharma franchise company offering PCD franchise opportunities in Arunachal Pradesh with WHO-GMP certified medicines.',
    },
    {
      name: 'Assam',
      slug: 'assam',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals is a trusted pharma franchise company offering PCD pharma franchise in Assam with quality medicines, marketing support, and monopoly rights.',
    },
    {
      name: 'Bihar',
      slug: 'bihar',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD business with a leading pharma franchise company in Bihar. Join a trusted pharmaceutical brand offering quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Chhattisgarh',
      slug: 'chhattisgarh',
      image: '/pcdimagestate1.webp',
      description:
        'Partner with Rapid Pharmaceuticals, a trusted pharma franchise company offering PCD pharma franchise in Chhattisgarh with quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Goa',
      slug: 'goa',
      image: '/pcdimagestate1.webp',
      description:
        'Join a trusted pharma franchise company in Goa. Start your PCD pharma franchise with low investment, monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'Gujarat',
      slug: 'gujarat',
      image: '/pcdimagestate1.webp',
      description:
        'Get PCD pharma franchise in Gujarat with a trusted pharma franchise company offering WHO-GMP certified products, quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Haryana',
      slug: 'haryana',
      image: '/pcdimagestate1.webp',
      description:
        'Become a partner with a trusted pharma franchise company in Haryana. Start your PCD pharma franchise with monopoly rights, quality medicines, and full marketing support.',
    },
    {
      name: 'Himachal Pradesh',
      slug: 'himachal-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals is a trusted pharma franchise company offering PCD pharma franchise opportunities in Himachal Pradesh with quality medicines and strong marketing support.',
    },
    {
      name: 'Jharkhand',
      slug: 'jharkhand',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with a trusted pharma franchise company in Jharkhand. Get PCD pharma franchise with exclusive distribution rights, quality medicines, and marketing support.',
    },
    {
      name: 'Karnataka',
      slug: 'karnataka',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your business with Rapid Pharmaceuticals, a trusted pharma franchise company offering PCD pharma franchise opportunities in Karnataka with quality medicines and support.',
    },
    {
      name: 'Kerala',
      slug: 'kerala',
      image: '/pcdimagestate1.webp',
      description:
        'Partner with a trusted pharma franchise company in Kerala. Get PCD pharma franchise with monopoly rights, quality medicines, and complete marketing support for business growth.',
    },
    {
      name: 'Madhya Pradesh',
      slug: 'madhya-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with a trusted pharma franchise company offering PCD pharma franchise in Madhya Pradesh with quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Maharashtra',
      slug: 'maharashtra',
      image: '/pcdimagestate1.webp',
      description:
        'Get exclusive PCD pharma franchise in Maharashtra with a trusted pharma franchise company offering top-quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Manipur',
      slug: 'manipur',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals is a trusted pharma franchise company offering PCD pharma franchise in Manipur with quality medicines, monopoly rights, and full marketing support.',
    },
    {
      name: 'Meghalaya',
      slug: 'meghalaya',
      image: '/pcdimagestate1.webp',
      description:
        'Join Rapid Pharmaceuticals, a trusted pharma franchise company offering PCD pharma franchise opportunities in Meghalaya with quality medicines and strong marketing support.',
    },
    {
      name: 'Mizoram',
      slug: 'mizoram',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with a trusted pharma franchise company offering PCD pharma franchise in Mizoram with quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Nagaland',
      slug: 'nagaland',
      image: '/pcdimagestate1.webp',
      description:
        'Become a partner with a trusted pharma franchise company in Nagaland. Start your PCD pharma franchise with quality medicines, monopoly rights, and marketing support.',
    },
    {
      name: 'Odisha',
      slug: 'odisha',
      image: '/pcdimagestate1.webp',
      description:
        'Get PCD pharma franchise in Odisha with a trusted pharma franchise company offering quality medicines, wide product range, monopoly rights, and full marketing support.',
    },
    {
      name: 'Punjab',
      slug: 'punjab',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Punjab with Rapid Pharmaceuticals, a trusted pharma franchise company offering quality medicines, monopoly rights, and full marketing support.',
    },
    {
      name: 'Rajasthan',
      slug: 'rajasthan',
      image: '/pcdimagestate1.webp',
      description:
        'Avail PCD pharma franchise in Rajasthan with a trusted pharma franchise company offering WHO-GMP certified medicines, monopoly rights, wide product range, and marketing support.',
    },
    {
      name: 'Sikkim',
      slug: 'sikkim',
      image: '/pcdimagestate1.webp',
      description:
        'Join Rapid Pharmaceuticals, a trusted pharma franchise company offering PCD pharma franchise in Sikkim with exclusive monopoly rights, quality medicines, and marketing support.',
    },
    {
      name: 'Tamil Nadu',
      slug: 'tamil-nadu',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Tamil Nadu with a trusted pharma franchise company offering quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Telangana',
      slug: 'telangana',
      image: '/pcdimagestate1.webp',
      description:
        'Grow your pharma business with Rapid Pharmaceuticals, a trusted pharma franchise company offering PCD pharma franchise in Telangana with quality medicines and marketing support.',
    },
    {
      name: 'Tripura',
      slug: 'tripura',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with a trusted pharma franchise company offering PCD pharma franchise in Tripura with quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Uttar Pradesh',
      slug: 'uttar-pradesh',
      image: '/pcdimagestate1.webp',
      description:
        'Start your PCD pharma franchise in Uttar Pradesh with a trusted pharma franchise company offering quality medicines, monopoly rights, wide product range, and marketing support.',
    },
    {
      name: 'Uttarakhand',
      slug: 'uttarakhand',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals is a trusted pharma franchise company offering PCD pharma franchise in Uttarakhand with monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'West Bengal',
      slug: 'west-bengal',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your business with a trusted pharma franchise company in West Bengal offering PCD pharma franchise, quality medicines, monopoly rights, and strong marketing support.',
    },
    // Union Territories
    {
      name: 'Delhi',
      slug: 'delhi',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with a trusted pharma franchise company offering PCD pharma franchise in Delhi with quality medicines, monopoly rights, wide product range, and marketing support.',
    },
    {
      name: 'Chandigarh',
      slug: 'chandigarh',
      image: '/pcdimagestate1.webp',
      description:
        'Get monopoly-based PCD pharma franchise in Chandigarh with Rapid Pharmaceuticals, a trusted pharma franchise company offering quality medicines and strong marketing support.',
    },
    {
      name: 'Jammu and Kashmir',
      slug: 'jammu-and-kashmir',
      image: '/pcdimagestate1.webp',
      description:
        'Start your business with a trusted pharma franchise company offering PCD pharma franchise in Jammu and Kashmir with WHO-GMP certified medicines and marketing support.',
    },
    {
      name: 'Ladakh',
      slug: 'ladakh',
      image: '/pcdimagestate1.webp',
      description:
        'Expand your business with a trusted pharma franchise company offering PCD pharma franchise in Ladakh with monopoly rights, quality medicines, and strong marketing support.',
    },
    {
      name: 'Andaman and Nicobar Islands',
      slug: 'andaman-nicobar',
      image: '/pcdimagestate1.webp',
      description:
        'Explore PCD pharma franchise in Andaman & Nicobar Islands with Rapid Pharmaceuticals, a trusted pharma franchise company offering quality medicines and marketing support.',
    },
    {
      name: 'Lakshadweep',
      slug: 'lakshadweep',
      image: '/pcdimagestate1.webp',
      description:
        'Launch your PCD pharma franchise in Lakshadweep with a trusted pharma franchise company offering quality medicines, monopoly rights, and strong marketing support.',
    },
    {
      name: 'Puducherry',
      slug: 'puducherry',
      image: '/pcdimagestate1.webp',
      description:
        'Rapid Pharmaceuticals is a trusted pharma franchise company offering PCD pharma franchise in Puducherry with quality medicines, monopoly rights, and full marketing support.',
    },
  ];

  selectedLocation: Location | null = null;
  selectedDistrict: string | null = null;
  districtList: string[] = [];
  isStatePage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      if (!slug) {
        this.selectedLocation = null;
        this.selectedDistrict = null;
        this.isStatePage = false;
        this.updateSEO();
        return;
      }

      // 1️⃣ Try to match a STATE first
      const matchedState = this.locations.find((loc) => loc.slug === slug);
      if (matchedState) {
        this.selectedLocation = matchedState;
        this.isStatePage = true;
        this.selectedDistrict = null;
        this.districtList = stateDistricts[matchedState.slug] || [];
        this.updateSEO(this.selectedLocation);
        return;
      }

      // 2️⃣ Flatten all districts across all states
      const allDistricts = Object.entries(stateDistricts).flatMap(
        ([state, districts]) =>
          districts.map((d) => ({
            state,
            name: d,
            slug: d.toLowerCase().replace(/\s+/g, '-'),
          })),
      );

      // 3️⃣ Check if slug matches a district
      const matchedDistrict = allDistricts.find((d) => d.slug === slug);

      if (matchedDistrict) {
        this.selectedDistrict = matchedDistrict.name;
        this.selectedLocation =
          this.locations.find((l) => l.slug === matchedDistrict.state) || null;
        this.isStatePage = false;
        this.updateSEO(
          this.selectedLocation || undefined,
          this.selectedDistrict,
        );
        return;
      }

      // 4️⃣ If no match, fallback to main page
      this.selectedLocation = null;
      this.selectedDistrict = null;
      this.isStatePage = false;
      this.updateSEO();
    });

    // Scroll-to-top for navigation
    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationEnd &&
        isPlatformBrowser(this.platformId)
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  scrollToInquiry() {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('inquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  updateSEO(location?: Location, district?: string): void {
    const baseTitle =
      'PCD Pharma Franchise in India | Monopoly Rights | Rapid Pharmaceuticals';
    const baseDesc =
      'Join Rapid Pharmaceuticals for monopoly-based PCD Pharma Franchise opportunities across India with WHO-GMP certified products and 150+ DCGI-approved formulations.';

    let title = baseTitle;
    let description = baseDesc;
    let url = 'https://rapidpharmaceuticals.in/pcd-pharma-franchise';

    if (district) {
      title = `PCD Pharma Franchise in ${district} | Rapid Pharmaceuticals`;
      description = `Start your PCD Pharma Franchise in ${district} with Rapid Pharmaceuticals. WHO-GMP certified products and full marketing support.`;
      url = `https://rapidpharmaceuticals.in/pcd-pharma-franchise-in-${district
        .toLowerCase()
        .replace(/\s+/g, '-')}`;
    } else if (location) {
      title = `PCD Pharma Franchise in ${location.name} | Rapid Pharmaceuticals`;
      description = location.description;
      url = `https://rapidpharmaceuticals.in/pcd-pharma-franchise-in-${location.slug}`;
    }

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonicalService.setCanonicalURL(url);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': url,
      name: 'Rapid Pharmaceuticals',
      url: url,
      description: description,
      image: 'https://rapidpharmaceuticals.in/assets/logo.webp',
      address: {
        '@type': 'PostalAddress',
        addressLocality: district || location?.name || 'India',
        addressRegion: location?.name || 'India',
        addressCountry: 'India',
      },
    };

    const existing = this.document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existing) existing.remove();

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  goToFranchise(slug: string): void {
    const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/pcd-pharma-franchise-in-' + normalizedSlug]);
  }

  goToDistrict(district: string): string[] {
    const districtSlug = district.toLowerCase().replace(/\s+/g, '-');
    return ['/pcd-pharma-franchise-in-' + districtSlug];
  }

  backToList(): void {
    this.router.navigate(['/pcd-pharma-franchise']);
  }
}
