import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-product-sidebar',
  templateUrl: './single-product-sidebar.component.html',
  styleUrl: './single-product-sidebar.component.css'
})
export class SingleProductSidebarComponent {
  @Input() product: any;

  mapClick(e: Event){
    e.preventDefault();
  }
}
