import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FilterValue } from '../../../../../models/filter-value.model';

@Component({
  selector: 'checkbox-search',
  templateUrl: './checkbox-search.component.html',
  styleUrl: './checkbox-search.component.css'
})
export class CheckboxSearchComponent {
 @Input() options: string[] = ['جديد', 'مستعمل']; 
 @Input() label: string = "الحالة"; 
 @Input() filterId: Number=0; // Unique key for each search component
 @Output() searchEvent = new EventEmitter<FilterValue>();
  filteredOptions: string[] = [...this.options];
  selectedOptions: string[] = [];
  searchText = '';
  showOptions = false;
  allSelected = false;

  // Filter options dynamically based on input
  filterOptions() {
    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(lowerCaseSearch)
    );

    // Show options if there's a match
    this.showOptions = this.filteredOptions.length > 0;
  }
  

  // Show options on input focus
  showFilteredOptions() {
    if (this.searchText.trim() === '') {
      this.filteredOptions = [...this.options]; // Reset options
    }
    this.showOptions = true;
  }

  // Toggle individual options
  toggleOption(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
      if (this.selectedOptions.length == this.options.length) {
        this.allSelected = true;
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (selected) => selected !== option
      );
      this.allSelected = false; // Deselect "All" if an option is unchecked
    }
    this.sendAPIRequest();
  }

  // Toggle all options
  toggleAllOptions(event: any) {
    this.allSelected = event.target.checked;
    this.selectedOptions = this.allSelected ? [...this.options] : [];
    this.sendAPIRequest();
  }


  // Remove selected option from tags
  removeSelectedOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(
      (selected) => selected !== option
    );
    this.allSelected = false;
    this.sendAPIRequest();
  }

  // Hide options on blur
  onBlur() {
    setTimeout(() => {
      this.showOptions = false;
    }, 150);
  }

  // Handle clicks outside the dropdown
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.showOptions = false;
    }
  }
sendAPIRequest(){
  console.log('selectedOptions',this.selectedOptions);
  console.log("send request...");
  const searchObject : any = [];
  this.selectedOptions.forEach(e=>{
    searchObject.push({"filterId":this.filterId,"value":e})
  });
  this.searchEvent.emit(searchObject);
}
}