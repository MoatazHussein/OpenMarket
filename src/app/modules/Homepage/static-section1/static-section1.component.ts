import { Component } from '@angular/core';
import { AddProductAccessServiceService } from '../../../core/services/add-product-access-service.service';

@Component({
  selector: 'app-static-section1',
  templateUrl: './static-section1.component.html',
  styleUrl: './static-section1.component.css'
})
export class StaticSection1Component {

  constructor(private addProductAccessServiceService: AddProductAccessServiceService
  ) { }

  AddProduct() {
    this.addProductAccessServiceService.AddProduct();
  }
}
