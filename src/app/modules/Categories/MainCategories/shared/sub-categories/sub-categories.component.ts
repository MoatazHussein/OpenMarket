import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../../models/category.model';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export class SubCategoriesComponent implements OnInit {
  @Input() items!: Category[];
  lang: string = 'ar';

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(){
    this.lang = this.languageService.getLanguage();
  }
}
