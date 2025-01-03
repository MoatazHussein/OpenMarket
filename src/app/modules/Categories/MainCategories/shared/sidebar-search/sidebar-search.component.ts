import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export  class SidebarSearchComponent{
  statusLabel : string = "الحالة";
  statusOptions: string[] = ['جديد', 'مستعمل']; 
  typeLabel : string = "النوع";
  typeOptions: string[] = ['اوبل', 'اودي','مرسيدس','افاتار']; 
  modelLabel: string = "الموديل"
  modelOptions: string[] = ['2023', '2022','2021','2019']; 
}