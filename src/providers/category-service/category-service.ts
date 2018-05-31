import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {

  constructor() {
    console.log('Hello CategoryServiceProvider Provider');
  }
  async list() {
    return [{
      _id: '1',
      name:'ข้าว',
      img: 'http://taamkru.com/media/images/articlepics/%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7-01.jpg'
    },
    {
      _id: '2',
      name:'ผัก',
      img: 'data:image/jpeg;base64,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'
    },{
      _id: '3',
      name:'ผลไม้',
      img: 'http://taamkru.com/media/images/articlepics/%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89-01.jpg'
    },{
      _id: '4',
      name:'เครื่องเทศ',
      img: 'https://fb1-dp.lnwfile.com/7uoi5m.jpg'
    },
    {
      _id: '5',
      name:'หนึ่งตำบล',
      img: 'http://nongkhai.cdd.go.th/wp-content/uploads/sites/70/2017/06/OTOP1.jpg'
    }];
  }
}