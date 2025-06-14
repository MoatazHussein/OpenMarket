import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  pageKey: string = '3';
  pageHeader: string = '';
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
        this.pageHeader = 'شروط الاستخدام للابليكشن و الويب سايت';
      }
      else {
        this.isRtl = false;
        this.pageHeader = 'Terms of Use for the Application and Website';
      }
    }
  }
}
