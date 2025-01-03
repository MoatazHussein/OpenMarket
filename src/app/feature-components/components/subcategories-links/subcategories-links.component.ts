import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-subcategories-links',
  templateUrl: './subcategories-links.component.html',
  styleUrl: './subcategories-links.component.css'
})
export class SubcategoriesLinksComponent {
  @Input() categories?: Category[];
}
