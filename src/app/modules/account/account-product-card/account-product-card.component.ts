import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountPayComponent } from '../account-pay/account-pay.component';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'account-product-card',
  templateUrl: './account-product-card.component.html',
  styleUrl: './account-product-card.component.css'
})
export class AccountProductCardComponent {

  constructor(private router: Router, private categoryService: CategoryService) {}

  @Input() image: string="";
  @Input() name: string="";
  @Input() description: string="";
  @Input() location: string="";
  @Input() price:string="";
  @Input() id:string="";
  @Input() subCategoryName:string="";
  @Input() contactNumber:string="";
  @Input() IsApproved:boolean=false;
  @Input() IsPaid:boolean=false;
  @Input() PaidUntilDate:Date= new Date(1900,1,1);
  dialog = inject(MatDialog);
  rate: number = 0;


  ngOnInit() {
    // this.dialog.afterOpened.subscribe({
    //   next: (ref) => {
    //     this.categoryService.getProductPricePerDay(this.id).subscribe({
    //       next: (d) => {
    //         this.rate = d.pricePerDay;
    //         console.log(this.rate);
    //       }
    //     })
    //   }
    // });
  }

  PayProduct() {
    this.categoryService.getProductPricePerDay(this.id).subscribe({
      next: (d) => {
        this.rate = d.pricePerDay;
        console.log(this.rate);
        this.dialog.open(AccountPayComponent, {
          height: '400px',
          width: '600px',
          data: {
            name: this.name,
            productID: this.id,
            rate: this.rate
          },
        });
      }
    })
    
  }

}
