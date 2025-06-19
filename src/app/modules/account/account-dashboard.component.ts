import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../core/services/language.service";

@Component({
    selector: 'app-account-dashboard',
    templateUrl: './account-dashboard.component.html',
    styleUrl: './account-dashboard.component.css'
})

export class AccountDashboardComponent implements OnInit {
    lang: string = 'ar';


    constructor(private languageService: LanguageService){}
    ngOnInit(): void {
        this.lang = this.languageService.getLanguage();
    }

}