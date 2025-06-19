import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../../core/services/language.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-products',
    templateUrl: './user-products.component.html',
    styleUrl: './user-products.component.css'
})

export class UserProductsComponent implements OnInit {
    lang: string = 'ar';
    public products: any[] = [];
    private url = `${environment.apiUrl}/Product/seller`;
    userImage: string = '';

    constructor(private languageService: LanguageService,private http: HttpClient, private route: ActivatedRoute){}
    ngOnInit(): void {
        const paramId = this.route.snapshot.paramMap.get('id');
        let params = new HttpParams().set('productID',paramId!);
        
        this.lang = this.languageService.getLanguage();
        this.http.get<any>(this.url,{params: params}).subscribe({
            next: (res) =>{
                console.log(res);
                this.products = res.products.values;
                this.userImage = res.customer.profilePicture;
            }
        })
    }

}