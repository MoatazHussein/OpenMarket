import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
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
      error: () => {
        this.snackBar.open('❌ Login failed. Check your credentials.', 'Close', { duration: 3000 });
      },
      complete: () => (this.isLoading = false)
    });
  }
}
