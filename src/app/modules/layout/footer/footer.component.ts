import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isRtl: boolean = true; 
  title_01:string = "عن وسيلتي";
  title_02:string = "الدعم الفني";
  title_03:string = "أسعار و حاسبات";
  title_04:string = "أخرى";


  ElementsColumn_01:any= [{name : "ما هو موقع وسيلتي؟",link:"not-found"},{name : "الخدمات الاعلانية",link:"not-found"},{name : "خريطة الموقع",link:"not-found"}/*,{name : "دول أخرى",link:"about"}*/];
  ElementsColumn_02:any= [{name : "مساعدة",link:"not-found"},{name : "فريق المبيعات",link:"not-found"},{name : "شروط الاستخدام",link:"TermsOfUse"},{name : "سياسة الخصوصية",link:"PrivacyPolicy"},{name:"قواعد السلامة",link:"not-found"}];
  ElementsColumn_03:any= [{name : "أسعار و حاسبات",link:"not-found"},{name : "اسعار ومواصفات السيارات ",link:"not-found"},{name : "اسعار ومواصفات الموبايل",link:"not-found"},{name : "اسعار ومواصفات التابلت",link:"not-found"},{name:"أسعار ومواصفات العقارات",link:"not-found"},{name:"حاسبة العقارات",link:"not-found"},{name:"حاسبة القروض",link:"not-found"}];
  ElementsColumn_04:any= [{name : "بيع أي شيء",link:"not-found"},{name : "اكثر السيارات مبيعا في الكويت",link:"not-found"},{name : "كلمات وصفية",link:"not-found"},{name : "مراكز خدمات السيارات",link:"not-found"},{name:"أوقات الصلاة",link:"not-found"}];

}














