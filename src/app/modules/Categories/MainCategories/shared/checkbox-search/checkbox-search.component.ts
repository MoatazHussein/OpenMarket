import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FilterValue } from '../../../../../models/filter-value.model';
import { Subscription } from 'rxjs';
import { FiltersService } from '../../../../../core/services/filters.service';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'checkbox-search',
  templateUrl: './checkbox-search.component.html',
  styleUrl: './checkbox-search.component.css'
})
export class CheckboxSearchComponent {
 @Input() options: string[] = ['جديد', 'مستعمل']; 
 @Input() label: string = "الحالة"; 
 @Input() filterId: number=0; // Unique id for each search component
 @Input() parentId: number=0; 
 @Input() disabled: boolean=false; 
 @Output() searchEvent = new EventEmitter<FilterValue[]>();
  filteredOptions: string[] = [...this.options];
  selectedOptions: string[] = [];
  searchText = '';
  showOptions = false;
  allSelected = false;
  currentLang: string = 'ar';
  private subscription!: Subscription;

  constructor(private filtersService: FiltersService,private languageService: LanguageService) {}

  ngOnInit() {
    this.subscription = this.filtersService.resetFilterTrigger$.subscribe((id) => {
      if (id === this.filterId) {
        this.resetFilter();
      }
    });

    this.currentLang = this.languageService.getLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

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
    this.onSelectionChange();
  }

  // Toggle all options
  toggleAllOptions(event: any) {
    this.allSelected = event.target.checked;
    this.selectedOptions = this.allSelected ? [...this.options] : [];
    this.onSelectionChange();
  }


  // Remove selected option from tags
  removeSelectedOption(option: string) {
    debugger;
    this.selectedOptions = this.selectedOptions.filter(
      (selected) => selected !== option
    );
    this.allSelected = false;
    this.onSelectionChange();
  }

  resetFilter(){
    debugger;
    this.selectedOptions = [];
    this.allSelected = false;
    this.onSelectionChange();
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
  
onSelectionChange(){
  debugger;
 const searchObject : FilterValue[] = [];
   this.selectedOptions.forEach(e=>{
     searchObject.push({"filterId":this.filterId,"parentId":this.parentId,"value":e,})
   });
   this.searchEvent.emit(searchObject);
   this.onDataChange();
}

onDataChange() {
  debugger;
  const searchObject : FilterValue[] = [];
  this.selectedOptions.forEach(e=>{
    searchObject.push({"filterId":this.filterId,"parentId":this.parentId,"value":e,})
  });
  this.searchEvent.emit(searchObject);
  this.filtersService.sendDataFromFilter(this.filterId,searchObject);
  // console.log("this.filterId",this.filterId);
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}