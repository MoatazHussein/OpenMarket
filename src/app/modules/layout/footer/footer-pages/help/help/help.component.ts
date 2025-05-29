import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
 helptext="كيف استخدم وسيلتي ؟";

  qaList = [
    {
      question: 'ما هو موقع وسيلتي؟',
      answer: 'وسيلتي هي منصة كويتية ناشئة تأسست برؤية واضحة و أن نصبح الوجهة الأولى للإعلانات المبوبة والتجارية في الكويت وخارجها '
    },
  ];
  pageKey: string = '5';
    sections: PageSection[] = [];
      constructor(
        private sectionService : PageSectionService) {
        }
        ngOnInit() {
  
       if (this.pageKey) {
        this.sectionService.getSectionsByPageKey(this.pageKey).subscribe(data => {
          this.sections = data.sort((a, b) => a.sectionOrder - b.sectionOrder);
        });
      }
    }
}
