import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html'
})
export class Homepage2Component {
  item1SectionArray: any = [{
    header: 'بيع ما لا تحتاج واكسب المال',
    items: ['الوصول إلى الملايين من المشترين','أضف إعلانك وبيع أي شيء','بيع كل ما تريده بأفضل الأسعار'],
    bText: 'احصل على اعلانات اكثر',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  },{
    header: ' 2بيع ما لا تحتاج واكسب المال',
    items: ['2الوصول إلى الملايين من المشترين','2أضف إعلانك وبيع أي شيء','بيع كل ما تريده بأفضل 2الأسعار'],
    bText: 'اضف اعلانك الان',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  }];
}
