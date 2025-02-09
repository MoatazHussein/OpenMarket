import { Component } from '@angular/core';
import {  CategoryService } from '../../../core/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category.model';


@Component({
  selector: 'app-create-step2',
  templateUrl: './create-step2.component.html',
  styleUrl: './create-step2.component.css'
})
export class CreateStep2Component {
  category: Category | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      debugger;
      const categoryId = Number(params.get('id'));
      this.categoryService.getCategories().subscribe(
        categories => {
          this.category = categories.find(c => c.id === categoryId) || null;
        }
      );
    });
  }

  navigateToForm(categoryId: number) {
    debugger;
    this.router.navigate(['/InsertItem', categoryId,'Details']);
  }

}
