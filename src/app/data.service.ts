import { Injectable } from '@angular/core';
import { mobileCards } from './model';
import { Data } from './data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = new Data() // class should convert into object, so only can use
  DATA = this.data.mobileCover;

  constructor() { }

  getContentDetails(id:number):Observable<mobileCards | undefined>{
    const result = this.DATA.find(item => item.id === id);
    return of(result); // Returns an Observable of the found item
  }

  getContent(): mobileCards[] {
    return this.DATA;
  }


}
