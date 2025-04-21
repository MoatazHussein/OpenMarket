import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterDialogComponent } from '../../modules/Homepage/register-dialog/register-dialog.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductAccessServiceService {

  isLoggedIn = false;
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  AddProduct() {
    if (this.isLoggedIn) {

      this.router.navigate(['/InsertItem']);
    } else {
      this.router.navigate(['/register']);
      /*const dialogRef = this.dialog.open(RegisterDialogComponent, {
        height: '650px',
        width: '450px',

      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });*/
    }
  }
}
