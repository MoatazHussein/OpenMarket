import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  pageKey: string = '2';
  pageHeader: string = '';
  pageSubHeader: string = '';
  currentLang: string = 'ar';
  isRtl: Boolean = true;

  sections: PageSection[] = [];
  constructor(
    private sectionService: PageSectionService, private languageService: LanguageService,) {
  }
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });

    if (this.pageKey) {
      this.sectionService.getSectionsByPageKey(this.pageKey).subscribe(data => {
        this.sections = data.sort((a, b) => a.sectionOrder - b.sectionOrder);
      });
      if (this.currentLang == 'ar') {
        this.isRtl = true;
        this.pageHeader = 'سياسة الخصوصية'
        this.pageSubHeader = 'سياسة الخصوصية لموقع وتطبيق وسيلتي'
      }
      else {
        this.isRtl = false;
        this.pageHeader = 'Privacy Policy'
        this.pageSubHeader = 'Privacy Policy for Waseelti Website and Application'
      }
    }
  }
}
