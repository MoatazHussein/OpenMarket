import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  @Input() allOptions: string[] = [];  
  filteredOptions: string[] = [];
  showSuggestions = false;
  selectedOptionIndex = -1; // Tracks the currently selected suggestion

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchKey: string | null) => {
        if (searchKey) {
          this.showSuggestions = true;
          this.filteredOptions = this.allOptions
            .filter(option => option.toLowerCase().includes(searchKey.toLowerCase()))
            .slice(0, 10);
          this.selectedOptionIndex = -1; // Reset selection when typing
        } else {
          this.filteredOptions = [];
          this.showSuggestions = false;
        }
      });
  }

  onOptionClick(option: string): void {
    this.navigateToOption(option);
    // this.searchControl.setValue(option); 
  }

  onSearch(): void {
    const searchKey = this.searchControl.value;
    if (searchKey) {
      this.router.navigate(['/find'], { queryParams: { search_key: searchKey } });
      this.showSuggestions = false;
    }
  }

  navigateToOption(option: string): void {
    this.router.navigate(['/find'], { queryParams: { search_key: option } });
    this.showSuggestions = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showSuggestions = false;
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.showSuggestions || this.filteredOptions.length === 0) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        // Navigate down the list
        this.selectedOptionIndex = (this.selectedOptionIndex + 1) % this.filteredOptions.length;
        event.preventDefault(); // Prevent default scrolling behavior
        break;
      case 'ArrowUp':
        // Navigate up the list
        this.selectedOptionIndex =
          (this.selectedOptionIndex - 1 + this.filteredOptions.length) % this.filteredOptions.length;
        event.preventDefault();
        break;
      case 'Enter':
        console.log(this.selectedOptionIndex);
        // Select the current option
        if (this.selectedOptionIndex >= 0) {
          const selectedOption = this.filteredOptions[this.selectedOptionIndex];
          this.navigateToOption(selectedOption);
        }
        break;
      case 'Escape':
        // Close the suggestions
        this.showSuggestions = false;
        break;
    }
  }
}
  
