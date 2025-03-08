import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../core/services/product.service";

@Component({
    selector: 'app-account-products',
    templateUrl: './account-products.component.html',
    styleUrl: './account-products.component.css'
})

export class AccountProductsComponent implements OnInit {
    public products: any[] = [];

    constructor(private productService: ProductService){

    }
    ngOnInit(): void {
        this.productService.getUserProducts().subscribe(
        {
            next: (data) => {
                this.products = data.values;
                console.log(data.values);
            }
        }
        )
    }


}