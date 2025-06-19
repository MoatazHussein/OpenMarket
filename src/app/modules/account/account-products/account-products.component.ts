import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../core/services/product.service";
import { LanguageService } from "../../../core/services/language.service";

@Component({
    selector: 'app-account-products',
    templateUrl: './account-products.component.html',
    styleUrl: './account-products.component.css'
})

export class AccountProductsComponent implements OnInit {
    public products: any[] = [];
    lang: string = 'ar';

    constructor(private productService: ProductService,private languageService: LanguageService){

    }
    ngOnInit(): void {
        this.productService.getUserProducts().subscribe(
        {
            next: (data) => {
                this.products = data.values;
                console.log(data.values);
            }
        }
        );
        this.lang = this.languageService.getLanguage();
    }


}