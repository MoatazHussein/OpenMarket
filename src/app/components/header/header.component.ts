import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

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
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map((value: any) => this._filter(value || '')),
  );
}

 // Method to update notification count dynamically
 updateNotificationCount(newCount: number) {
  this.notificationCount = newCount;
}
  
}
