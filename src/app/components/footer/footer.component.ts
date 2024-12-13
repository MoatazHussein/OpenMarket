import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isRtl: boolean = true; 
  title_01:string = "عن السوق المفتوح";
  title_02:string = "الدعم الفني";
  title_03:string = "أسعار و حاسبات";
  title_04:string = "أخرى";


  ElementsColumn_01:any= [{name : "ما هو موقع السوق المفتوح؟",link:"about"},{name : "الخدمات الاعلانية",link:"home"},{name : "خريطة الموقع",link:"contact"},{name : "دول أخرى",link:"home"}];
  ElementsColumn_02:any= [{name : "مساعدة",link:"about"},{name : "فريق المبيعات",link:"home"},{name : "شروط الاستخدام",link:"contact"},{name : "سياسة الخصوصية",link:"home"},{name:"قواعد السلامة",link:"home"}];
  ElementsColumn_03:any= [{name : "أسعار و حاسبات",link:"about"},{name : "اسعار ومواصفات السيارات ",link:"home"},{name : "اسعار ومواصفات الموبايل",link:"contact"},{name : "اسعار ومواصفات التابلت",link:"home"},{name:"أسعار ومواصفات العقارات",link:"home"},{name:"حاسبة العقارات",link:"home"},{name:"حاسبة القروض",link:"home"}];
  ElementsColumn_04:any= [{name : "بيع أي شيء",link:"about"},{name : "اكثر السيارات مبيعا في الكويت",link:"home"},{name : "كلمات وصفية",link:"contact"},{name : "مراكز خدمات السيارات",link:"home"},{name:"أوقات الصلاة",link:"home"}];

}














