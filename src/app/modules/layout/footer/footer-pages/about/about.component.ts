import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../../core/services/language.service';
import { PageSectionService } from '../../../../../Services/page-section.service';
import { PageSection } from '../../../../../models/page-section.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  currentLang: string = 'ar';
  pageKey: string = '1';
  pageHeader: string = '';
  sections: PageSection[] = [];
  isRtl: Boolean = true;

  constructor(private router: Router, private languageService: LanguageService,
    private sectionService: PageSectionService) {
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
        this.pageHeader = 'ما هو موقع وسيلتي ؟';
      }
      else {
        this.isRtl = false;
        this.pageHeader = 'What is the of Wasselati?';
      }
    }
  }


}
