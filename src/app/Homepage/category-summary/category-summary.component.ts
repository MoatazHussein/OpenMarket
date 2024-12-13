import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrl: './category-summary.component.css'
})
export class CategorySummaryComponent {
  category: Category = new Category(1,'عقارات للايجار','https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp',[new Category(5,'بيع',''),new Category(5,'شراء',''),new Category(5,'ايجار','')]);

  topProducts: Product[] = [
    new Product(52,'شواحن وكوابل . جديد','https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp',55),
    new Product(52,'شواحن وكوابل . جديد','https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp',55)
  ];

}
