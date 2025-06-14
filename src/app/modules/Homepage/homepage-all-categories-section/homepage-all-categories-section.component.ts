import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../core/services/category.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-homepage-all-categories-section',
  templateUrl: './homepage-all-categories-section.component.html',
  styleUrl: './homepage-all-categories-section.component.css'
})
export class HomepageAllCategoriesSectionComponent {
  currentLang :string = 'ar';
  firstCategoryelement :string= '';
  navigationText :string= '';
  headerTitle :string= '';
  isRtl:boolean=false;

  constructor(private router: Router, private categoryService: CategoryService , private languageService:LanguageService) { }



  subCategories: Category[] = [
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    //   {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'}
  ];

  //Commercial Advertisements

  ngOnInit() {
     this.languageService.language$.subscribe(lang => {
        this.currentLang = lang;
      });
      
    this.categoryService.getSubCategories(1, 20).subscribe(
      (categories: any) => {
        categories.values.forEach((e: any) => {
          this.subCategories.push({ id: e.id, name: this.currentLang == 'ar' ? e.nameAr : e.nameEn, imageUrl: e.imageURL })
        })
      }
    );

   if(this.currentLang=='ar'){
    this.isRtl=true;
    this.firstCategoryelement='اعلانات تجارية';
    this.navigationText='شاهد الكل';
    this.headerTitle='سوق الكويت';
    }
    else{
    this.isRtl=false;
    this.firstCategoryelement= 'Commercials';
    this.navigationText='See all';
    this.headerTitle='Kuwait Market';

    }
  }
}
