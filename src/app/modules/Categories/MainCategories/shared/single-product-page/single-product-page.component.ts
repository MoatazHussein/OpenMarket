import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent implements OnInit{

  public product: any = {};

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({productData}) => {
        this.product = productData;
        console.log(productData);
      });
  }

}
