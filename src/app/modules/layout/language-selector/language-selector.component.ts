import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLang: string = 'ar';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.currentLang = this.languageService.getLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.languageService.setLanguage(newLang);
  }
}
