import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { blogPosts, BlogPost } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  post: BlogPost | undefined;
  private scriptElement: HTMLScriptElement | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.post = blogPosts.find(p => p.slug === slug);

      if (this.post) {
        const baseUrl = 'https://www.rapidpharmaceuticals.in';
        const postUrl = `${baseUrl}/blogs/${this.post.slug}`;
        const imageUrl = `${baseUrl}${this.post.imageUrl}`;

        // Standard SEO
        this.title.setTitle(`${this.post.title} | Rapid Pharmaceuticals Blog`);
        this.meta.updateTag({ name: 'description', content: this.post.seoDescription });

        // Open Graph Tags
        this.meta.updateTag({ property: 'og:title', content: this.post.title });
        this.meta.updateTag({ property: 'og:description', content: this.post.seoDescription });
        this.meta.updateTag({ property: 'og:image', content: imageUrl });
        this.meta.updateTag({ property: 'og:url', content: postUrl });
        this.meta.updateTag({ property: 'og:type', content: 'article' });

        // Twitter Card Tags
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: this.post.title });
        this.meta.updateTag({ name: 'twitter:description', content: this.post.seoDescription });
        this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

        // JSON-LD Structured Data
        const schemas: any[] = [
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": this.post.title,
            "image": [ imageUrl ],
            "datePublished": new Date(this.post.date).toISOString(),
            "author": [{
                "@type": "Person",
                "name": this.post.author
            }]
          }
        ];

        // Add FAQPage Schema for AI Search Engines (GEO)
        if (this.post.faqs && this.post.faqs.length > 0) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": this.post.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          });
        }

        // Clean up any previous script if navigating between posts
        if (this.scriptElement) {
          this.renderer.removeChild(this.document.head, this.scriptElement);
        }

        this.scriptElement = this.renderer.createElement('script');
        this.scriptElement!.type = 'application/ld+json';
        this.scriptElement!.text = JSON.stringify(schemas);
        this.renderer.appendChild(this.document.head, this.scriptElement);

      } else {
        this.router.navigate(['/blogs']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      this.renderer.removeChild(this.document.head, this.scriptElement);
    }
  }
}
