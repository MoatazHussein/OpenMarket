import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-sales-team',
  templateUrl: './sales-team.component.html',
  styleUrl: './sales-team.component.css'
})
export class SalesTeamComponent {
  pageKey: string = '4';
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
        this.sections = data.sort((a, b) => a.sectionOrder - b.sectionOrder)
          ;
      });
      this.isRtl = this.currentLang == 'ar' ? true : false;
    }
  }
  contacts = [
    {
      imageUrl: "assets/placeholder.jpg", name: 'عاصم تحسين', title: 'مندوب مبيعات',
      phoneNumber: '+965 69982458'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'رأفت أسعد', title: 'مندوب مبيعات',
      phoneNumber: '+965 98080481'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'محمود مكاوى', title: 'مندوب مبيعات',
      phoneNumber: '+965 50823230'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'نائلة هشام', title: 'مندوب مبيعات',
      phoneNumber: '+965 98531865'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'ريم محمد', title: 'مندوب مبيعات',
      phoneNumber: '+965 67040589'
    },



  ];

}
