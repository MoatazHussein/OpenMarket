import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-single-category',
  templateUrl: './homepage-single-category.component.html',
  styleUrl: './homepage-single-category.component.css'
})
export class HomepageSingleCategoryComponent implements OnInit {
  @Input() id?:number = 0;
  @Input() imageUrl?:string = '';
  @Input() name?:string = '';

  ngOnInit(): void {
    if(this.imageUrl == null || this.imageUrl == ''){
      this.imageUrl = 'https://cdn.iconscout.com/icon/free/png-256/free-category-icon-download-in-svg-png-gif-file-formats--price-sale-shop-tag-title-ui-essence-pack-user-interface-icons-267498.png'
    }
  }
}
