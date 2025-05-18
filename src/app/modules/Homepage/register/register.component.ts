import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { VerificationDialogComponent } from '../register-dialog/verification-dialog.component';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  profilePicture: File | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
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

  /*Old_login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please enter valid credentials', 'Close', { duration: 3000 });
      return;
    }

    //this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.authService.setLoggedIn(true);
        this.snackBar.open('✅ Login successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        if(err.error.includes('Account Not Verrified')){
          let pho = err.error.split(':')[1];
          this.openVerificationDialog(pho);
        } else {
          this.snackBar.open('❌ Login failed. Check your credentials.', 'Close', { duration: 3000 });
        }
      },
      complete: () => (this.isLoading = false)
    });
  }*/

  /*login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please enter valid phone', 'Close', { duration: 3000 });
      return;
    }

    this.authService.login('+965' + this.loginForm.get('phone')?.value).subscribe({
      next: (res) => {
        if(res){
          this.openVerificationDialog('+965' + this.loginForm.get('phone')?.value);
        } else {
          this.snackBar.open('❌ Login failed. Number Not Exist', 'Close', { duration: 3000 });
        }
      },
      error: (err) => {
        this.snackBar.open('❌ Login failed. Check your credentials.', 'Close', { duration: 3000 });
      },
      complete: () => (this.isLoading = false)
    });
  }*/

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
