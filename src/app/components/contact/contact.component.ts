import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonicalService';

declare let gtag: Function;

@Component({
  selector: 'appcontact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  showPopup = false; // Add popup flag

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private canonicalService: CanonicalService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],
      message: ['', Validators.required],
      time: [''],
    });
  }

  ngOnInit(): void {
    const title = 'Contact Rapid Pharmaceuticals';

    const description =
      'Contact Rapid Pharmaceuticals in Dhuri, Punjab, for PCD Pharma Franchise enquiries, pharmaceutical wholesale pricing, product information and business support.';

    const url = 'https://www.rapidpharmaceuticals.in/contact';
    const image = 'https://www.rapidpharmaceuticals.in/rapidlogo.jpeg';

    this.meta.updateTag({
      name: 'description',
      content: description,
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.canonicalService.setCanonicalURL(url);
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.contactForm.patchValue({
      time: new Date().toLocaleString(),
    });
    if (isPlatformBrowser(this.platformId)) {
      emailjs
        .send(
          'service_btcpt2j',
          'template_ofwcgmv',
          this.contactForm.value,
          'fu9yESWivu9LZ56rt',
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            this.showPopup = true;
            setTimeout(() => {
              this.showPopup = false;
            }, 3000); // Hide popup after 3 seconds
            this.contactForm.reset();
            this.submitted = false;
          },
          (error) => {
            console.log(error.text);
          },
        );

      if (typeof gtag === 'function') {
        gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'Contact Page',
        });
      }
    }
  }
}
