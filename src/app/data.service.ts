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

    private selectedContent: mobileCards | null = null;

    setSelectedContent(content: mobileCards): void {
      this.selectedContent = content;
    }

    getSelectedContent(): mobileCards | null {
      return this.selectedContent;
    }
}
