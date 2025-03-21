import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../core/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-all-categories-section',
  templateUrl: './homepage-all-categories-section.component.html',
  styleUrl: './homepage-all-categories-section.component.css'
})
export class HomepageAllCategoriesSectionComponent {
  lang = 'ar';

  constructor(private router: Router, private categoryService: CategoryService) { }



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


  ngOnInit() {
    this.categoryService.getSubCategories(1, 20).subscribe(
      (categories: any) => {
        categories.values.forEach((e: any) => {
          this.subCategories.push({ id: e.id, name: this.lang == 'ar' ? e.nameAr : e.nameEn, imageUrl: e.imageURL })
        })
      }
    );
  }
}
