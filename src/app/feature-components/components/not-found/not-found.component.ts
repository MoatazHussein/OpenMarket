import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  
  currentLang: string = 'ar';

  constructor(private router: Router,private languageService: LanguageService) {
    }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
}
