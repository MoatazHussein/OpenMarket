import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Category } from '../../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {
    isLoading: Subject<boolean> = new Subject<boolean>();

}
