import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, model } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'account-pay',
  templateUrl: './account-pay.component.html',
  styleUrl: './account-pay.component.css'
})
export class AccountPayComponent {

    data = inject(MAT_DIALOG_DATA);
    //@Input() productId: string = '';
    //@Input() rate: number = 0;
  
  daysForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.daysForm = this.fb.group({
      days: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]],
      productId: ['', [Validators.required]],
      rate: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Set the productId value when the component initializes
    this.daysForm.patchValue({
      productId: this.data.productID,
      rate: this.data.rate
    });
    //console.log(this.data.productID);
    this.daysForm.get('days')?.valueChanges.subscribe(days => {
        this.updateTotalValue(days);
    });
  }

  onSubmit(): void {
    if (this.daysForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = this.daysForm.value;

    this.http.post('/api/submit-days', formData)
      .subscribe({
        next: (response: any) => {
          this.successMessage = 'Days submitted successfully!';
          this.isSubmitting = false;
        },
        error: (error) => {
          this.errorMessage = error.message || 'An error occurred. Please try again.';
          this.isSubmitting = false;
        }
      });
  }

  updateTotalValue(days: number): void {
    debugger;
    if (days && days > 0) {
      this.totalPrice = days * this.data.rate;
    } else {
      this.totalPrice = 0;
    }
  }

}
