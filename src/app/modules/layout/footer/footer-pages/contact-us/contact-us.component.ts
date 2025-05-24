import { Component } from '@angular/core';
import { LanguageService } from '../../../../../core/services/language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../../../contact-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  currentLang: string = 'ar';
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private languageService: LanguageService,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: [''], // optional but must be valid if provided
  phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
  message: ['', [Validators.required, Validators.minLength(10)]]
});
  }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      this.contactService.submitContactForm(this.contactForm.value).subscribe(
        () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        },
        () => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      );
    }
  }
}