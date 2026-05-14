import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { blogPosts, BlogPost } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {
  posts: BlogPost[] = blogPosts;
  private scriptElement: HTMLScriptElement | null = null;

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const baseUrl = 'https://www.rapidpharmaceuticals.in';
    const pageUrl = `${baseUrl}/blogs`;
    const imageUrl = `${baseUrl}/pcd1.webp`; // Generic blog image
    const description = 'Read the latest insights on PCD Pharma Franchise opportunities, healthcare trends, and pharmaceutical manufacturing from Rapid Pharmaceuticals.';
    const pageTitle = 'Healthcare & Franchise Insights | Rapid Pharmaceuticals';

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
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    // JSON-LD Structured Data
    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "url": pageUrl,
      "name": pageTitle,
      "description": description,
      "publisher": {
        "@type": "Organization",
        "name": "Rapid Pharmaceuticals",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.svg`
        }
      }
    };

    this.scriptElement = this.renderer.createElement('script');
    this.scriptElement!.type = 'application/ld+json';
    this.scriptElement!.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, this.scriptElement);
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      this.renderer.removeChild(this.document.head, this.scriptElement);
    }
  }
}
