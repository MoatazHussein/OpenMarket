import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrl: './category-summary.component.css'
})
export class CategorySummaryComponent {
  @Input() category!: Category;
  @Input() topProducts: any[] = [];
  @Input() lang: string = 'ar';
  
  
  navigationText: string = '';
  isRtl:boolean=false;

  ngOnInit(){
    if(this.lang=='ar'){
    this.navigationText='المزيد';
    this.isRtl=true;
    }
    else{
    this.navigationText='More';
    this.isRtl=false;
    }
  }
 
}
