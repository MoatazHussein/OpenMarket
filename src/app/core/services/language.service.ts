import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // private currentLanguage = new BehaviorSubject<string>('ar');
    private currentLanguage = new BehaviorSubject<string>(this.getSavedLanguage());
    language$ = this.currentLanguage.asObservable(); 


  constructor() {}
  private getSavedLanguage(): string {
    return localStorage.getItem('preferredLanguage') || 'ar'; // Default to Arabic
  }
  setLanguage(lang: string) {
        localStorage.setItem('preferredLanguage', lang);

    this.currentLanguage.next(lang);
    // localStorage.setItem('language', lang); // Persist the language setting
    console.log("lang-serv",lang);
  }

  getLanguage(): string {
    // return localStorage.getItem('language') || 'ar';
    return this.currentLanguage.value;

  }
}
