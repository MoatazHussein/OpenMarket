import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  currentLang: string = 'ar';

  constructor(private router: Router,private languageService: LanguageService) {
    }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  
}
