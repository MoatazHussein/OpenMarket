import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FilterValue } from '../../../../../models/filter-value.model';
@Component({
  selector: 'sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export  class SidebarSearchComponent{
  @Output() allSearchesEvent = new EventEmitter<{ [key: string]: string }>();
  // allFilters:  any = [];

  statusLabel : string = "الحالة";
  statusOptions: string[] = ['جديد', 'مستعمل']; 
  typeLabel : string = "النوع";
  typeOptions: string[] = ['اوبل', 'اودي','مرسيدس','افاتار']; 
  modelLabel: string = "الموديل"
  modelOptions: string[] = ['2023', '2022','2021','2019']; 


forwardSearch(event: any) {
    // console.log("event",event);
    this.allSearchesEvent.emit(event); // Emit combined data
  }
}