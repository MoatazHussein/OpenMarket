import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {
    categories: string[] = ["مركبات", "عقارات"];
    isLoading: Subject<boolean> = new Subject<boolean>();

    getCategories() {
        return this.categories;
    }

}
