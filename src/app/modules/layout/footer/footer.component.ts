import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { PageSection } from '../../../models/page-section.model';
import { PageSectionService } from '../../../Services/page-section.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  items: any[] = [];
pageKey: string = '6';
  sections: PageSection[] = [];
facebookLink : string ="https://www.facebook.com/waseela.kw";
instagramLink: string ="https://www.instagram.com/waseelati1";
twitterLink: string ="https://twitter.com";
linkedinLink: string ="https://linkedin.com";


  ngOnInit(): void {
    this.categoryService.getSubCategories(1,50,'cars,property,mobiles,appliances,satellite,furniture').subscribe({
      next: (res)=>{
        console.log(res);
        debugger;
        let filterArr = ["سيارات للبيع","سيارات للايجار","عقار للبيع","عقار للايجار","موبايلات وتابلت","اجهزة منزلية كهربائية","ستلايت","نقل عفش"]
        this.items = res.values.filter((val: any) => filterArr.includes(val.nameAr));
        let elements = this.items.map((val: any) => {
          return {
            name: val.nameAr,
            link: 'SubCategory/'+val.id
          }
        });
        elements.push({name: 'مقاولات',link: 'Category/12'});
        elements.push({name: 'اثاث',link: 'Category/10'});
        this.ElementsColumn_03 = elements;
      },
      error: (err)=>{

      }
    })
    if (this.pageKey) {
      this.sectionService.getSectionsByPageKey(this.pageKey).subscribe(data => {
        this.sections = data.sort((a, b) => a.sectionOrder - b.sectionOrder);
        this.facebookLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "facebook" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "facebook" )[0]?.subHeader.toString();

        this.instagramLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "instagram" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "instagram" )[0]?.subHeader.toString();

        this.twitterLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "twitter" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "twitter" )[0]?.subHeader.toString();

        this.linkedinLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "linkedin" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "linkedin" )[0]?.subHeader.toString();


      });
    }
  }

  constructor(private categoryService: CategoryService,private sectionService : PageSectionService) {
  }
  isRtl: boolean = true; 
  title_01:string = "عن وسيلتي";
  title_02:string = "الدعم الفني";
  title_03:string = "كتلوجات";


  ElementsColumn_01:any= [{name : "ما هو موقع وسيلتي؟",link:"About"},{name : "الخدمات الاعلانية",link:"AdvertisingServices"},{name : "خريطة الموقع",link:"not-found"}/*,{name : "دول أخرى",link:"about"}*/];
  
  ElementsColumn_02:any= [{name : "مساعدة",link:"Help"},{name : "فريق المبيعات",link:"SalesTeam"},{name : "شروط الاستخدام",link:"TermsOfUse"},{name : "سياسة الخصوصية",link:"PrivacyPolicy"},{name:"قواعد السلامة",link:"not-found"}];
  
  ElementsColumn_03:any= [
  ];

}














