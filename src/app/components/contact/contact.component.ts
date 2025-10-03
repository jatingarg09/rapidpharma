import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'appcontact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  showPopup = false; // Add popup flag

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],
      message: ['', Validators.required],
      time: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    // if (this.contactForm.valid) {
    //   console.log(this.contactForm.value);
    //   this.showPopup = true;
    //   setTimeout(() => {
    //     this.showPopup = false;
    //   }, 3000); // Hide popup after 3 seconds
    //   this.contactForm.reset();
    //   this.submitted = false;
    // }

    if(this.contactForm.invalid) {
      return;
    }

    this.contactForm.patchValue({
      time: new Date().toLocaleString()
    });
    emailjs.send('service_btcpt2j', 'template_ofwcgmv', this.contactForm.value, 'fu9yESWivu9LZ56rt')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.showPopup = true;
        setTimeout(() => {
          this.showPopup = false;
        }, 3000); // Hide popup after 3 seconds
        this.contactForm.reset();
        this.submitted = false;
      }, (error) => {
        console.log(error.text);
      });
  }
}
