import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
pageKey: string = '3';
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
