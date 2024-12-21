import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-single-category',
  templateUrl: './homepage-single-category.component.html',
  styleUrl: './homepage-single-category.component.css'
})
export class HomepageSingleCategoryComponent {
  @Input() id?:number = 0;
  @Input() imageUrl?:string = '';
  @Input() name?:string = '';
}
