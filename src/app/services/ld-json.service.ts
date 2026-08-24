import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LdJsonService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setSchema(schema: any) {
    // Clean up any existing script element to avoid duplicates
    const existing = this.document.getElementById('app-schema-jsonld');
    if (existing) {
      this.renderer.removeChild(this.document.head, existing);
    }

    const script = this.renderer.createElement('script');
    script.id = 'app-schema-jsonld';
    script.type = 'application/ld+json';
    const textNode = this.renderer.createText(JSON.stringify(schema));
    this.renderer.appendChild(script, textNode);
    this.renderer.appendChild(this.document.head, script);
  }

  removeSchema() {
    const existing = this.document.getElementById('app-schema-jsonld');
    if (existing) {
      this.renderer.removeChild(this.document.head, existing);
    }
  }
}
