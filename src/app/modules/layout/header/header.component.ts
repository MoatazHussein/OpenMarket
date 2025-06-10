import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { HomePageService } from '../../../core/services/home-page.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/services/auth.service';
import { AddProductAccessServiceService } from '../../../core/services/add-product-access-service.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  AddText="أضف إعلانك الآن";
  isRtl: boolean = true; 
  searchInput = '';
  options: string[] = ['جميع المدن', 'مدينة الكويت', 'الفروانية','الجهراء'];
  filteredOptions!: Observable<string[]>;
  currentLang: string = 'ar';

  notificationCount = 5;
  myControl = new FormControl('');

  searchValue: string = '';
  showButton: boolean = false;
  
  isLoggedIn = false;
  constructor(private homePageService: HomePageService
    , private router: Router
    ,public dialog: MatDialog
    ,private authService :AuthService
    ,private addProductAccessServiceService :AddProductAccessServiceService
    ,private languageService: LanguageService
  ) {}


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map((value: any) => this._filter(value || '')),
  );
  this.authService.isLoggedIn().subscribe(status => {
    this.isLoggedIn = status;
  });
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });

  // console.log("Categories",this.homePageService.getCategories());
}

 // Method to update notification count dynamically
 updateNotificationCount(newCount: number) {
  this.notificationCount = newCount;
}

AddProduct(){
  debugger;
 this.addProductAccessServiceService.AddProduct();
}
Login(){
  this.router.navigateByUrl("/login");
}
LogOut() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('preferredLanguage', newLang);

    this.languageService.setLanguage(newLang);
      window.location.reload();

  }

  onSearchInput(): void {
    debugger;
    this.showButton = this.searchValue.trim().length > 0;
  }

  onSearchSubmit(): void {
    if (this.searchValue.trim()) {
      this.router.navigate(['/items'], { 
        queryParams: { search: this.searchValue.trim() } 
      });
    }
  }
}
