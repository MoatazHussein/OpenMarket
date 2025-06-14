import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-sections-header',
  templateUrl: './homepage-sections-header.component.html',
  styleUrl: './homepage-sections-header.component.css'
})
export class HomepageSectionsHeaderComponent {
  @Input() rightText?: string = '';
  @Input() rightLink?: string = '';
  @Input() leftText?: string = '';
  @Input() leftLink?: string = '';
  @Input() rightIsLink: boolean = false;
  @Input() lang: string = 'ar';

  isRtl: boolean = false;

  ngOnInit() {
    this.isRtl = this.lang == 'ar' ? true : false;
  }
}
