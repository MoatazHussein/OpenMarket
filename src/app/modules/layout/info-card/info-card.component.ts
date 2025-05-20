import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {

  @Input() imageUrl = 'assets/placeholder.jpg';
  @Input() title = 'title';
  @Input() description = 'description';
  @Input() buttonText = 'Learn More';
  @Input() buttonClick?: () => void; 
}
