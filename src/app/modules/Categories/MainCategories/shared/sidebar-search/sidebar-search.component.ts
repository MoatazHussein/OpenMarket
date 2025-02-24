import { Component, EventEmitter, HostListener, Input, Output, QueryList, ViewChildren } from '@angular/core';
@Component({
  selector: 'sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export class SidebarSearchComponent {
  @Input() filters: any; 

}