import { Component } from '@angular/core';
import { PageSection } from '../../../../../../models/page-section.model';
import { PageSectionService } from '../../../../../../Services/page-section.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
pageKey: string = '2';
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
