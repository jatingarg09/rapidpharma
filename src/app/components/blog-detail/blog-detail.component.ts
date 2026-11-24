import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CanonicalService } from '../../services/canonicalService';
import { Title, Meta } from '@angular/platform-browser';
import { blogPosts, BlogPost } from '../../data/blog-posts';
import { LdJsonService } from '../../services/ld-json.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  post: BlogPost | undefined;
  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private ldJsonService: LdJsonService,
    private canonicalService: CanonicalService,
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.post = blogPosts.find((p) => p.slug === slug);

      if (this.post) {
        const baseUrl = 'https://www.rapidpharmaceuticals.in';
        const postUrl = `${baseUrl}/blogs/${this.post.slug}`;
        const imageUrl = `${baseUrl}${this.post.imageUrl}`;

        this.canonicalService.setCanonicalURL(postUrl);

        this.meta.updateTag({
          name: 'robots',
          content: 'index, follow, max-image-preview:large',
        });

        // Standard SEO
        this.title.setTitle(`${this.post.title} | Rapid Pharmaceuticals Blog`);
        this.meta.updateTag({
          name: 'description',
          content: this.post.seoDescription,
        });

        // Open Graph Tags
        this.meta.updateTag({ property: 'og:title', content: this.post.title });
        this.meta.updateTag({
          property: 'og:description',
          content: this.post.seoDescription,
        });
        this.meta.updateTag({ property: 'og:image', content: imageUrl });
        this.meta.updateTag({ property: 'og:url', content: postUrl });
        this.meta.updateTag({ property: 'og:type', content: 'article' });

        // Twitter Card Tags
        this.meta.updateTag({
          name: 'twitter:card',
          content: 'summary_large_image',
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: this.post.title,
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: this.post.seoDescription,
        });
        this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

        // JSON-LD Structured Data
        const breadcrumbSchema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blogs',
              item: `${baseUrl}/blogs`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: this.post.title,
              item: postUrl,
            },
          ],
        };

        const schemas: any[] = [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${postUrl}#article`,

            headline: this.post.title,
            description: this.post.seoDescription,
            url: postUrl,

            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': postUrl,
            },

            image: [imageUrl],

            datePublished: new Date(this.post.date).toISOString(),

            author: {
              '@type': 'Organization',
              name: this.post.author,
              url: baseUrl,
            },

            publisher: {
              '@type': 'Organization',
              name: 'Rapid Pharmaceuticals',
              url: baseUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.svg`,
              },
            },

            inLanguage: 'en-IN',
          },

          breadcrumbSchema,
        ];

        // Add FAQPage Schema for AI Search Engines (GEO)
        if (this.post.faqs && this.post.faqs.length > 0) {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: this.post.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          });
        }

        this.ldJsonService.setSchema(schemas);
      } else {
        console.warn('Blog post not found:', slug);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.ldJsonService.removeSchema();
  }
}
