import { Component, Input } from '@angular/core';
import { AddProductAccessServiceService } from '../../../../core/services/add-product-access-service.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'
})
export class Item1Component {
  @Input() itemData: any;
  @Input() lang: string ='ar';


   constructor(private addProductAccessServiceService :AddProductAccessServiceService
    ) {}

  AddProduct(){
    debugger;
   this.addProductAccessServiceService.AddProduct();
  }
}
