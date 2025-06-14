import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';
import { LanguageService } from '../../../core/services/language.service';

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

  constructor(private languageService: LanguageService){}

  ngOnInit(){
    this.lang = this.languageService.getLanguage();
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
