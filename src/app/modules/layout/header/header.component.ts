import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { HomePageService } from '../../../core/services/home-page.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import{RegisterDialogComponent} from '../../Homepage/register-dialog/register-dialog.component'

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
  

  constructor(private homePageService: HomePageService
    , private router: Router
    ,public dialog: MatDialog
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

  // console.log("Categories",this.homePageService.getCategories());
}

 // Method to update notification count dynamically
 updateNotificationCount(newCount: number) {
  this.notificationCount = newCount;
}

AddProduct(){
  //this.router.navigate(['/InsertItem'])
  const dialogRef = this.dialog.open(RegisterDialogComponent, {
    height: '650px',
    width: '450px',
    
    });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
  });
}
Login(){
  this.router.navigateByUrl("/login");
}
}
