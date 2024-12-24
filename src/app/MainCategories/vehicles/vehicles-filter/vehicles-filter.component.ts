import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarouselItem } from '../../shared/tab-content/CarouselItemInterface';

@Component({
  selector: 'app-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styleUrl: './vehicles-filter.component.css'
})
export class VehiclesFilterComponent {
  
  controlBrand = new FormControl('');
  controlModel = new FormControl('');
  controlCat = new FormControl('');
  controlYearFrom = new FormControl('');
  controlYearTo = new FormControl('');

  brandControl = new FormControl('');
  modelControl = new FormControl('');
  yearControl = new FormControl('');

  years: string[] = ['2024','2023','2022','2021','2020'];

  brandItems: CarouselItem[] = [
      { id: 1, name: 'سيدان', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'تويوتا', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'جي ام سي', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'فولكسفاجن', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'فورد', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'كيا', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'هيونداي', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'نيسان', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'مرسيدس', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'بي ام دبليو', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'هوندا', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع رباعي', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 2', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 3', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 4', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 5', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 6', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 },
      { id: 2, name: 'دفع 7', image: 'https://opensooqui2.os-cdn.com/prod/public/images/taxonomy/landing/carBike-v1.webp',quantity: 2 }
    ];

  modelItems: CarouselItem[] = [
    {id: 2, name: 'كامري', quantity: 2},
    {id: 2, name: 'لانسر', quantity: 3},
    {id: 2, name: 'رانجلر', quantity: 4},
    {id: 2, name: 'سبورتاج', quantity: 56},
    {id: 2, name: 'تاهو', quantity: 7},
    {id: 2, name: 'كورولا', quantity: 8},
    {id: 2, name: 'يوكن', quantity: 2},
    {id: 2, name: 'التيما', quantity: 0},
    {id: 2, name: 'برادو', quantity: 47},
    {id: 2, name: '1', quantity: 47},
    {id: 2, name: '2', quantity: 47},
    {id: 2, name: '3', quantity: 47},
    {id: 2, name: '4', quantity: 47},
    {id: 2, name: '5', quantity: 47}
  ]

  yearItems: CarouselItem[] = [
    {id:5,name: '2024',quantity: 3},
    {id:5,name: '2023',quantity: 3},
    {id:5,name: '2022',quantity: 3},
    {id:5,name: '2021',quantity: 3},
    {id:5,name: '2020',quantity: 3},
    {id:5,name: '2019',quantity: 3},
    {id:5,name: '2018',quantity: 3},
    {id:5,name: '2017',quantity: 3}
  ]
}
