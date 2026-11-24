import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { blogPosts, BlogPost } from '../../data/blog-posts';
import { LdJsonService } from '../../services/ld-json.service';
import { CanonicalService } from '../../services/canonicalService';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  posts: BlogPost[] = blogPosts;

  constructor(
    private title: Title,
    private meta: Meta,
    private ldJsonService: LdJsonService,
    private canonicalService: CanonicalService,
  ) {}

  ngOnInit(): void {
    const baseUrl = 'https://www.rapidpharmaceuticals.in';
    const pageUrl = `${baseUrl}/blogs`;
    const imageUrl = `${baseUrl}/pcd1.webp`; // Generic blog image
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    const description =
      'Explore pharmaceutical insights, medicine information, healthcare trends and PCD Pharma Franchise opportunities in India with Rapid Pharmaceuticals.';
    const pageTitle = 'Pharma & PCD Franchise Blog | Rapid Pharmaceuticals';
    this.canonicalService.setCanonicalURL(pageUrl);

    // Standard SEO
    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card Tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    // JSON-LD Structured Data
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      url: pageUrl,
      name: pageTitle,
      description: description,
      publisher: {
        '@type': 'Organization',
        name: 'Rapid Pharmaceuticals',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.svg`,
        },
      },
    };

    this.ldJsonService.setSchema(schema);
  }

  ngOnDestroy(): void {
    this.ldJsonService.removeSchema();
  }
}
