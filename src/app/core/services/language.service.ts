import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('ar'); 
  language$ = this.currentLanguage.asObservable(); 

  constructor() {}

  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
    // localStorage.setItem('language', lang); // Persist the language setting
    console.log("lang-serv",lang);
  }

  getLanguage(): string {
    // return localStorage.getItem('language') || 'ar';
    return this.currentLanguage.value;

  }
}
