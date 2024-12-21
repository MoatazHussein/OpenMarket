import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-homepage-all-categories-section',
  templateUrl: './homepage-all-categories-section.component.html',
  styleUrl: './homepage-all-categories-section.component.css'
})
export class HomepageAllCategoriesSectionComponent {

  categories: Category[] = [
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'},
    {id: 9, name: 'متاجر',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp'}
  ]
}
