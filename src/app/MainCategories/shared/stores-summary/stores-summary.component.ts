import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stores-summary',
  templateUrl: './stores-summary.component.html',
  styleUrl: './stores-summary.component.css'
})
export class StoresSummaryComponent {
  @Input() stores: {id: number, name: string, review: number, image1: string, image2: string}[] = [];
}
