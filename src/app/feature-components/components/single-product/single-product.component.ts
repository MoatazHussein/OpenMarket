import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  @Input() product: any = {};

  imgURL: string = "";
  ngOnInit(){
    if(this.product.imageUrl != undefined){
      this.imgURL = this.product.imageUrl;
    } else {
      this.imgURL = this.product.productImages[0];
    }
    
  }
}
