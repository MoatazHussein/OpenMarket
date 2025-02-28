import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {
  registerForm: FormGroup;
  profilePicture: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<RegisterDialogComponent>
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      isMale: [true, Validators.required],
      phone: ['', [Validators.maxLength(15)]],
      profilePicture: [null],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelected(event: any) {
    this.profilePicture = event.target.files[0];
  }

  register() {
    if (this.registerForm.invalid) return;

    const formData = new FormData();
    Object.keys(this.registerForm.value).forEach((key) => {
      if (key === 'profilePicture' && this.profilePicture) {
        formData.append(key, this.profilePicture);
      } else {
        formData.append(key, this.registerForm.value[key]);
      }
    });

    this.authService.register(formData).subscribe({
      next: (response) => {
        this.authService.setLoggedIn(true);
        this.dialogRef.close();
        this.router.navigate(['/dashboard']); // Change to your route
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
