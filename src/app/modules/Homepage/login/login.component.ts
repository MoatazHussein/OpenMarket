import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { VerificationDialogComponent } from '../register-dialog/verification-dialog.component';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  lang: string = 'ar';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    private languageService: LanguageService
  ) {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.lang = this.languageService.getLanguage();
  }

  Old_login() {
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
  }

  login() {
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
  }

  openVerificationDialog(phone: string) {
      this.dialog.open(VerificationDialogComponent, {
        width: '400px',
        data: { phone: phone }
      });
    }
}
