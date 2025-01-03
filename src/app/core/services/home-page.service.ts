import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {
    categories: string[] = ["مركبات", "عقارات"];

    getCategories() {
        return this.categories;
    }

}
