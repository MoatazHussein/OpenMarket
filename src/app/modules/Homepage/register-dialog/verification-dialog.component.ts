import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-dialog',
  template: `
    <h2 mat-dialog-title>Verify Your Account</h2>
    <mat-dialog-content>
      <p>
        A verification code has been sent to your WhatsApp. Please enter it
        below:
      </p>
      <form [formGroup]="verificationForm">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Verification Code</mat-label>
          <input
            maxlength="6"
            matInput
            formControlName="code"
            placeholder="Enter verification code"
          />
          <mat-error *ngIf="verificationForm.get('code')?.hasError('required')">
            Verification code is required
          </mat-error>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="resendCode()" [disabled]="isResendDisabled">
      {{ isResendDisabled ? 'Resend Code (' + timeRemaining + 's)' : 'Resend Code' }}
      </button>
      <button
        mat-raised-button
        style="background-color: #6b2327; color: #fff;"
        [disabled]="verificationForm.invalid"
        (click)="verify()"
      >
        Verify
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class VerificationDialogComponent {
  verificationForm: FormGroup;
  isResendDisabled: boolean = true;
  timeRemaining = 30;
  private timer: any;
  private countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<VerificationDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { phone: string }
  ) {
    this.verificationForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.maxLength(6), Validators.minLength(6)],
      ],
    });
  }

  verify() {
    if (this.verificationForm.invalid) return;

    const verificationData = {
      phone: this.data.phone,
      code: this.verificationForm.value.code,
    };

    this.authService.verifyAccount(verificationData).subscribe({
      next: (response) => {
        this.snackBar.open('Login successfully!', 'Close', {
          duration: 3000,
        });
        this.dialogRef.close();
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Verification failed', error);
        this.snackBar.open(
          `❌ Verification Failed: ${error.message}`,
          'Close',
          { duration: 3000 }
        );
      },
    });
  }
  resendCode() {
    this.isResendDisabled = true;
    this.timeRemaining = 30;
    this.startTimer();
    let phone = this.data.phone;
    this.authService.ResendCode(phone).subscribe({
        next: (response) => {
            if(response.message == 'New verification code sent to your WhatsApp'){
                this.snackBar.open('Code Sent', 'Close', {
                    duration: 3000,
                });
            } else {
                this.snackBar.open(
                    `❌ Code Sending Failed: ${response.message}`,
                    'Close',
                    { duration: 3000 }
                  );
            }
        },
        error: (error) => {
          console.error('Code Sending Failed', error);
          this.snackBar.open(
            `❌ Code Sending Failed: ${error.message}`,
            'Close',
            { duration: 3000 }
          );
        },
      });
  }

  ngOnDestroy() {
    this.clearTimers();
  }
  ngOnInit(){
    this.resendCode();
    this.startTimer();
  }

  private startTimer() {
    this.clearTimers();

    this.timer = setTimeout(() => {
      this.isResendDisabled = false;
    }, 30000);
    this.countdownInterval = setInterval(() => {
        this.timeRemaining--;
        
        if (this.timeRemaining <= 0) {
          this.isResendDisabled = false;
          this.clearTimers();
        }
      }, 1000);
  }

  private clearTimers() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
