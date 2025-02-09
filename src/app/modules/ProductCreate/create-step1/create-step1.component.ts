import { Component } from '@angular/core';
import {  CategoryService } from '../../../core/services/categories.service';
import { Router } from '@angular/router';
import { Category } from '../../../models/category.model';


@Component({
  selector: 'app-create-step1',
  templateUrl: './create-step1.component.html',
  styleUrl: './create-step1.component.css'
})
export class CreateStep1Component {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  navigateToSubcategories(categoryId: number) {
    debugger;
    this.router.navigate(['/InsertItem', categoryId]);
  }
}
