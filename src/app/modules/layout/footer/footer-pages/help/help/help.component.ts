import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  currentLang = "ar";
  isRtl: Boolean = true;

  qaList = [
    {
      question: 'ما هو موقع وسيلتي؟',
      answer: 'وسيلتي هي منصة كويتية ناشئة تأسست برؤية واضحة و أن نصبح الوجهة الأولى للإعلانات المبوبة والتجارية في الكويت وخارجها '
    },
  ];
  pageKey: string = '5';
  pageHeader: string = '';
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
        if(this.currentLang == 'ar'){
          this.isRtl = true;
          this.pageHeader = 'كيف استخدم وسيلتي ؟';
        }
        else{
          this.isRtl = false;
          this.pageHeader = 'How To use Waseelti ?';

        }
      });
    }
  }
}
