import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export class SubCategoriesComponent {
  @Input() items!: Category[];
}
