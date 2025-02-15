import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FilterValue } from '../../../../../models/filter-value.model';
@Component({
  selector: 'sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export class SidebarSearchComponent {
  @Input() filters: any; 
  @Output() allSearchesEvent = new EventEmitter<any>();
  
  combinedFilters: FilterValue[] = [];
  private filtersFromComponents: { [key: number]: any[] } = {};

  updateAllFilters(filterId: number, filters: any[]) {
    // Update filters for the specific filterId
    this.filtersFromComponents[filterId] = filters;

    // Combine all filters from all search components
    this.combinedFilters = Object.values(this.filtersFromComponents).flat();

    // console.log('Final Combined Filters:', this.combinedFilters);
    this.allSearchesEvent.emit(this.combinedFilters); // Emit combined data

  }

}