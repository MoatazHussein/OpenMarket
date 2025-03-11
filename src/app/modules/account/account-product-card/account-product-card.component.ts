import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountPayComponent } from '../account-pay/account-pay.component';

@Component({
  selector: 'account-product-card',
  templateUrl: './account-product-card.component.html',
  styleUrl: './account-product-card.component.css'
})
export class AccountProductCardComponent {

  constructor(private router: Router) {}

  @Input() image: string="";
  @Input() name: string="";
  @Input() description: string="";
  @Input() location: string="";
  @Input() price:string="";
  @Input() id:string="";
  @Input() subCategoryName:string="";
  @Input() contactNumber:string="";
  dialog = inject(MatDialog);


  ngOnInit() {
  }

  PayProduct() {
    this.dialog.open(AccountPayComponent, {
      height: '400px',
      width: '600px',
      data: {
        name: this.name,
        productID: this.id,
        rate: 1
      },
    });
  }

}
