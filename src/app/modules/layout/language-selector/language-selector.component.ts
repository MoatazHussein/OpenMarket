import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLang: string = 'ar';
  isRtl: boolean = true; 
  contact: string = 'Contact Us' ;

  constructor(
    private languageService: LanguageService
    , private router: Router
    , private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // this.currentLang = this.languageService.getLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
     this.contact = this.currentLang == 'en' ? 'Contact Us' : 'إتصل بنا';
     this.isRtl = this.currentLang == 'en' ? false : true;
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.languageService.setLanguage(newLang);
    this.contact = this.currentLang == 'en' ? 'Contact Us' : 'إتصل بنا';
  }
  navigateToRouteAndScroll() {
    this.router.navigate(['/PrivacyPolicy']).then(() => {
      setTimeout(() => {
        this.viewportScroller.setHistoryScrollRestoration('manual');
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
          this.viewportScroller.setHistoryScrollRestoration('auto');
        }, 200);
      }, 100);
    });
  }
}
