import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-homepage-all-categories-section',
  templateUrl: './homepage-all-categories-section.component.html',
  styleUrl: './homepage-all-categories-section.component.css'
})
export class HomepageAllCategoriesSectionComponent {

  categories: Category[] = [
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/ComputerAndLaptops.webp'),
    new Category(2,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(3,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(4,'لابتوب','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(5,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(6,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/ComputerAndLaptops.webp'),
    new Category(7,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(8,'لابتوب','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/ComputerAndLaptops.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'لابتوب','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'لابتوب','https://opensooqui2.os-cdn.com/api/apiV/web/categories/ComputerAndLaptops.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'),
    new Category(1,'متاجر','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp')
  ];


}
