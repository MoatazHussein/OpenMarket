import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from "../../../../environments/environment";

interface UserInformationDTO {
    fullName?: string;
    birthDate: Date;
    isMale: boolean;
    phone?: string;
    profilePicture?: string;
    email?: string;
  }
  
  interface EditUserInformationDTO {
    fullName?: string;
    birthDate: Date;
    isMale: boolean;
    phone?: string;
    profilePicture?: File;
    email?: string;
  }

@Component({
    selector: 'app-account-details',
    templateUrl: './account-details.component.html',
    styleUrl: './account-details.component.css'
})

export class AccountDetailsComponent implements OnInit {
    userForm: FormGroup;
  isLoading = false;
  isSaving = false;
  errorMessage = '';
  successMessage = '';
  selectedFile: File | null = null;
  profileImagePreview: string | null = null;
  private userApiUrl = `${environment.apiUrl}/UserProfile`;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      isMale: [true],
      phone: [{value: '', disabled: true}, [Validators.required,Validators.maxLength(15)]],
      email: [{value: '', disabled: true}, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadUserInformation();
  }

  loadUserInformation(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<UserInformationDTO>(this.userApiUrl + '/GetUserInformation')
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(data => {
        // Convert string date to Date object if needed
        if (typeof data.birthDate === 'string') {
          data.birthDate = new Date(data.birthDate);
        }

        this.userForm.patchValue({
          fullName: data.fullName,
          birthDate: this.formatDateForInput(data.birthDate),
          isMale: data.isMale,
          phone: data.phone,
          email: data.email
        });

        // Set profile picture preview if available
        if (data.profilePicture) {
          this.profileImagePreview = data.profilePicture;
        }
      });
  }

  formatDateForInput(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
  }

  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.selectedFile = element.files[0];
      
      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = new FormData();
    const formValues = this.userForm.getRawValue();
    debugger;
    
    // Add form fields to FormData
    formData.append('fullName', formValues.fullName);
    
    // Format date to appropriate format if needed
    const birthDate = new Date(formValues.birthDate);
    formData.append('birthDate', birthDate.toISOString());
    
    formData.append('isMale', formValues.isMale);
    formData.append('phone', formValues.phone || '');
    formData.append('email', formValues.email || '');
    
    // Add file if selected
    if (this.selectedFile) {
      formData.append('profilePicture', this.selectedFile);
    }

    this.http.put<string>(this.userApiUrl, formData)
      .pipe(
        finalize(() => this.isSaving = false)
      )
      .subscribe({
        next: (response) => {
            this.successMessage = 'Profile updated successfully';
            // Optionally reload user data
            this.loadUserInformation();
          },
        error: (response) => {
            console.log(response);
          }
      })
  }
}