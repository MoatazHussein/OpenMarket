import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrl: './category-summary.component.css'
})
export class CategorySummaryComponent {
  @Input() category!: Category;

  @Input() topProducts: Product[] = [];

}
