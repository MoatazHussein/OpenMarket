import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'
})
export class Item1Component {
  @Input() itemData: any;
}
