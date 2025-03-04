import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { HomePageService } from '../../../core/services/home-page.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/services/auth.service';
import { AddProductAccessServiceService } from '../../../core/services/add-product-access-service.service';

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

  notificationCount = 5;
  myControl = new FormControl('');
  
  isLoggedIn = false;
  constructor(private homePageService: HomePageService
    , private router: Router
    ,public dialog: MatDialog
    ,private authService :AuthService
    ,private addProductAccessServiceService :AddProductAccessServiceService
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
}
