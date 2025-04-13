import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { VerificationDialogComponent } from './verification-dialog.component';
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
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.registerForm = this.fb.group({
      // fullName: ['', Validators.required],
      // birthDate: ['', Validators.required],
      // isMale: [true, Validators.required],
      phone: ['', [Validators.required,Validators.maxLength(15)]],
      // profilePicture: [null, Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // email: ['', [Validators.required, Validators.email]]
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
      } else if(key === 'phone'){
        formData.append(key, '+965' + this.registerForm.value[key]);
      } else {
        formData.append(key, this.registerForm.value[key]);
      }
    });

    this.authService.register(formData).pipe(
      catchError(error => {
        if (error.error && error.error == 'Verification code sent to your WhatsApp. Please verify your account.') {
          return of(error.error);
        }
        throw error;
      })
    ).subscribe({
      next: (response) => {
        if (response == 'Verification code sent to your WhatsApp. Please verify your account.'){
          this.dialogRef.close();
          debugger;
          this.openVerificationDialog('+965' + this.registerForm.value.phone);
          //this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.snackBar.open(`❌ Register Failed ${error.error}`, 'Close', { duration: 3000 });

      }
    });
  }

  openVerificationDialog(phone: string) {
    this.dialog.open(VerificationDialogComponent, {
      width: '400px',
      data: { phone: phone }
    });
  }
}
