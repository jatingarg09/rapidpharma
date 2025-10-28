import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
    { name: 'Andhra Pradesh', slug: 'andhra-pradesh', image: '/pcdimagestate1.png', description: 'Start your own PCD Pharma Franchise in Andhra Pradesh with Rapid Pharmaceuticals. Get monopoly rights and high-quality medicines for your region.' },
    { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh', image: '/pcdimagestate1.png', description: 'Grow your pharma business with our PCD franchise opportunities in Arunachal Pradesh. Join a trusted WHO-GMP certified company.' },
    { name: 'Assam', slug: 'assam', image: '/pcdimagestate1.png', description: 'Rapid Pharmaceuticals offers PCD pharma franchise in Assam with full marketing and product support.' },
    { name: 'Bihar', slug: 'bihar', image: '/pcdimagestate1.png', description: 'Start your PCD Pharma Franchise in Bihar and become a part of a leading pharmaceutical brand in India.' },
    { name: 'Chhattisgarh', slug: 'chhattisgarh', image: '/pcdimagestate1.png', description: 'Partner with Rapid Pharmaceuticals for PCD Pharma Franchise in Chhattisgarh and grow your pharma business.' },
    { name: 'Goa', slug: 'goa', image: '/pcdimagestate1.png', description: 'Join our pharma network in Goa. Low investment, high returns with monopoly-based PCD rights.' },
    { name: 'Gujarat', slug: 'gujarat', image: '/pcdimagestate1.png', description: 'Get PCD Pharma Franchise in Gujarat with WHO-GMP certified products and high-quality medicines.' },
    { name: 'Haryana', slug: 'haryana', image: '/pcdimagestate1.png', description: 'Become a PCD Pharma Franchise partner in Haryana. Monopoly rights and full marketing support available.' },
    { name: 'Himachal Pradesh', slug: 'himachal-pradesh', image: '/pcdimagestate1.png', description: 'Rapid Pharmaceuticals provides pharma franchise opportunities in Himachal Pradesh with quality products.' },
    { name: 'Jharkhand', slug: 'jharkhand', image: '/pcdimagestate1.png', description: 'Start your own PCD Pharma Franchise in Jharkhand and enjoy exclusive distribution rights.' },
    { name: 'Karnataka', slug: 'karnataka', image: '/pcdimagestate1.png', description: 'Launch your PCD Pharma Franchise business in Karnataka with Rapid Pharmaceuticals.' },
    { name: 'Kerala', slug: 'kerala', image: '/pcdimagestate1.png', description: 'Partner with us for PCD Pharma Franchise in Kerala. Monopoly rights and support guaranteed.' },
    { name: 'Madhya Pradesh', slug: 'madhya-pradesh', image: '/pcdimagestate1.png', description: 'Expand your pharma business with a PCD Pharma Franchise in Madhya Pradesh.' },
    { name: 'Maharashtra', slug: 'maharashtra', image: '/pcdimagestate1.png', description: 'Get exclusive PCD Pharma Franchise rights in Maharashtra and access our top-quality product range.' },
    { name: 'Manipur', slug: 'manipur', image: '/pcdimagestate1.png', description: 'Rapid Pharmaceuticals offers pharma franchise opportunities in Manipur with full marketing support.' },
    { name: 'Meghalaya', slug: 'meghalaya', image: '/pcdimagestate1.png', description: 'Join Rapid Pharmaceuticals for PCD Pharma Franchise opportunities in Meghalaya.' },
    { name: 'Mizoram', slug: 'mizoram', image: '/pcdimagestate1.png', description: 'Start your PCD pharma franchise in Mizoram with trusted pharmaceutical support.' },
    { name: 'Nagaland', slug: 'nagaland', image: '/pcdimagestate1.png', description: 'Become a franchise partner in Nagaland and expand your business with our quality medicines.' },
    { name: 'Odisha', slug: 'odisha', image: '/pcdimagestate1.png', description: 'Get PCD pharma franchise in Odisha and enjoy full marketing assistance and product range.' },
    { name: 'Punjab', slug: 'punjab', image: '/pcdimagestate1.png', description: 'Start your own PCD Pharma Franchise in Punjab with Rapid Pharmaceuticals. Get full support and monopoly rights.' },
    { name: 'Rajasthan', slug: 'rajasthan', image: '/pcdimagestate1.png', description: 'Avail PCD Pharma Franchise opportunities in Rajasthan with our WHO-GMP certified products.' },
    { name: 'Sikkim', slug: 'sikkim', image: '/pcdimagestate1.png', description: 'Join Rapid Pharmaceuticals as a franchise partner in Sikkim and get exclusive business rights.' },
    { name: 'Tamil Nadu', slug: 'tamil-nadu', image: '/pcdimagestate1.png', description: 'Start your PCD pharma franchise in Tamil Nadu and explore high business potential.' },
    { name: 'Telangana', slug: 'telangana', image: '/pcdimagestate1.png', description: 'Grow your pharma business with PCD Franchise in Telangana under Rapid Pharmaceuticals.' },
    { name: 'Tripura', slug: 'tripura', image: '/pcdimagestate1.png', description: 'Expand your business network with a pharma franchise opportunity in Tripura.' },
    { name: 'Uttar Pradesh', slug: 'uttar-pradesh', image: '/pcdimagestate1.png', description: 'Start your own PCD Pharma Franchise in Uttar Pradesh and gain monopoly rights.' },
    { name: 'Uttarakhand', slug: 'uttarakhand', image: '/pcdimagestate1.png', description: 'Rapid Pharmaceuticals offers monopoly-based pharma franchise in Uttarakhand.' },
    { name: 'West Bengal', slug: 'west-bengal', image: '/pcdimagestate1.png', description: 'Launch your pharma franchise in West Bengal with a leading Indian pharmaceutical brand.' },
    // Union Territories
    { name: 'Delhi', slug: 'delhi', image: '/pcdimagestate1.png', description: 'PCD Pharma Franchise in Delhi — grow your pharma business with our high-quality product range.' },
    { name: 'Chandigarh', slug: 'chandigarh', image: '/pcdimagestate1.png', description: 'Get monopoly-based PCD franchise in Chandigarh from Rapid Pharmaceuticals.' },
    { name: 'Jammu and Kashmir', slug: 'jammu-and-kashmir', image: '/pcdimagestate1.png', description: 'Start PCD Pharma Franchise in Jammu and Kashmir with WHO-certified products.' },
    { name: 'Ladakh', slug: 'ladakh', image: '/pcdimagestate1.png', description: 'Expand your pharma business in Ladakh with our monopoly-based franchise rights.' },
    { name: 'Andaman and Nicobar Islands', slug: 'andaman-nicobar', image: '/pcdimagestate1.png', description: 'Explore franchise opportunities in Andaman & Nicobar Islands with Rapid Pharmaceuticals.' },
    { name: 'Lakshadweep', slug: 'lakshadweep', image: '/pcdimagestate1.png', description: 'Launch your PCD franchise in Lakshadweep and grow your pharma business network.' },
    { name: 'Puducherry', slug: 'puducherry', image: '/pcdimagestate1.png', description: 'Rapid Pharmaceuticals offers pharma franchise opportunities in Puducherry with full support.' },
  ];

  selectedLocation: Location | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.selectedLocation = this.locations.find((loc) => loc.slug === slug) || null;
        if (this.selectedLocation) this.updateSEO(this.selectedLocation);
      } else {
        this.selectedLocation = null;
        this.updateSEO();
      }
    });
  }

  scrollToInquiry() {
    const element = document.getElementById('inquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateSEO(location?: Location) {
    const baseTitle = 'PCD Pharma Franchise in India | Rapid Pharmaceuticals';
    const baseDesc = 'Join Rapid Pharmaceuticals for monopoly-based PCD Pharma Franchise opportunities across India. Get WHO-GMP certified products and full support.';
    const title = location
      ? `PCD Pharma Franchise in ${location.name} | Rapid Pharmaceuticals`
      : baseTitle;
    const description = location ? location.description : baseDesc;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });

    if (isPlatformBrowser(this.platformId)) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': location ? 'LocalBusiness' : 'Organization',
        name: title,
        description,
        url: location
          ? `https://rapidpharmaceuticals.in/pcd-pharma-franchise/${location.slug}`
          : 'https://rapidpharmaceuticals.in/pcd-pharma-franchise',
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }

  goToFranchise(slug: string): void {
    this.router.navigate(['/pcd-pharma-franchise', slug]);
  }

  backToList(): void {
    this.router.navigate(['/pcd-pharma-franchise']);
  }
}
