// tab-carousel.component.ts
import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import SwiperCore, { Navigation, Pagination, A11y, SwiperOptions, Grid } from 'swiper';
import { CarouselItem } from './CarouselItemInterface';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Grid]);



@Component({
  selector: 'app-tab-carousel',
  templateUrl: './tab-carousel.component.html',
  styleUrls: ['./tab-carousel.component.css']
})
export class TabCarouselComponent implements OnInit {
  @Input('control') typeSearchControl!: FormControl;

  config: SwiperOptions = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: true,
    loop: false,
    simulateTouch: false,
    grid:{
      rows: 3,
      fill: 'row'
    },
    rewind: true
  };

  @Input('TabItems') items: CarouselItem[] = [];

  filteredTypeItems: CarouselItem[] = this.items;

  

  ngOnInit() {
    this.filterItems('');
    this.setupSearchFilters();
  }

  private setupSearchFilters() {
    this.typeSearchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      debugger;
      this.filterItems(searchTerm || '');
    });
  }

  filterItems(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    this.filteredTypeItems = this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    
  }
}