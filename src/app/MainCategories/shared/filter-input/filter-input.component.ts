import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.css'
})
export class FilterInputComponent {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @Input() control!: FormControl;
  @Input() options: string[] = [];
  @Input() label: string = '';

  filteredOptions: string[] = [];

  ngOnInit() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  
}
