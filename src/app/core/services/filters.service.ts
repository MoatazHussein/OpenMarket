import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FilterValue } from '../../models/filter-value.model';
import { AllGenericDTO, AttributeDetailsDTO, AttributeService } from './attributeDetails.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private triggerSource = new Subject<number>();
  resetFilterTrigger$ = this.triggerSource.asObservable();
  resetFilterTrigger(id: number) {
    this.triggerSource.next(id);
  }

  combinedFilters: FilterValue[] = [];
  private filtersFromComponents: { [key: number]: any[] } = {};
  updateAllFilters(filterId: number, filters: any[]) {
    this.filtersFromComponents[filterId] = filters;
    this.combinedFilters = Object.values(this.filtersFromComponents).flat();
  }

  private changedFilterSubject = new BehaviorSubject<any>(null);
  private filtersCriteriaSubject = new BehaviorSubject<any>(null);

  changedFilter$: Observable<any> = this.changedFilterSubject.asObservable();
  filtersCriteria$: Observable<any> = this.filtersCriteriaSubject.asObservable();

  sendDataFromFilter(filterId: number, data: any) {
    this.updateAllFilters(filterId, data);
    this.changedFilterSubject.next({ FilterParams:{filterId, data} });

    var SearchResult =this.combinedFilters;
    this.filtersCriteriaSubject.next(SearchResult);
  }


}


