import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FilterValue } from '../../../../../models/filter-value.model';
@Component({
  selector: 'sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrl: './sidebar-search.component.css'
})
export class SidebarSearchComponent {
  @Output() allSearchesEvent = new EventEmitter<any>();
  // allFilters:  any = [];

  statusLabel: string = "الحالة";
  statusOptions: string[] = ['جديد', 'مستعمل'];
  typeLabel: string = "النوع";
  typeOptions: string[] = ["أوبل", 'اودي', 'مرسيدس', 'افاتار'];
  modelLabel: string = "الموديل"
  modelOptions: string[] = ['2023', '2022', '2021', '2019'];

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