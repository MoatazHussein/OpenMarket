import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() phoneNumber: string = '';

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faPhone, faWhatsapp);
  }

  callUser(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  whatsappUser(): void {
    const cleanNumber = this.phoneNumber.replace(/\D/g, '');
    window.open(`https://wa.me/+965${cleanNumber}`, '_blank');
  }


}
