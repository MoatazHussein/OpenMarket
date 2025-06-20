import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-safety-rules',
  templateUrl: './safety-rules.component.html',
  styleUrl: './safety-rules.component.css'
})
export class SafetyRulesComponent {
 pageKey: string = '7';
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
        this.pageHeader = 'قواعد السلامة'   

        this.pageSubHeader = ''
      }
      else {
        this.isRtl = false;
        this.pageHeader = 'Safety Rules'
        this.pageSubHeader = ''
      }
    }
  }
}
