import { Component } from '@angular/core';

@Component({
  selector: 'header-details',
  templateUrl: './header-details.component.html',
  styleUrl: './header-details.component.css'
})
export class HeaderDetailsComponent {

  availableOptions: string[] = ['لابتوبات', 'ساعات ذكية', 'سماعات', 'موبايلات', 'دراجات نارية', 'سيارات للايجار', 'سيارات للبيع', 'شقق للايجار', 'شقق للبيع'];
}
