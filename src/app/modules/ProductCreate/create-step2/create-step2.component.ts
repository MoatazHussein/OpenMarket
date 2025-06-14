import { Component } from '@angular/core';
import {  CategoryService } from '../../../core/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category.model';
import { LanguageService } from '../../../core/services/language.service';


@Component({
  selector: 'app-create-step2',
  templateUrl: './create-step2.component.html',
  styleUrl: './create-step2.component.css'
})
export class CreateStep2Component {
  category: Category | null = null;
  lang: string = 'ar';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private languageService: LanguageService
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
    this.lang = this.languageService.getLanguage();
  }

  navigateToForm(categoryId: number) {
    debugger;
    this.router.navigate(['/InsertItem', categoryId,'Details']);
  }

}
