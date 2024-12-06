import { Component,OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { mobileCards } from '../model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  constructor(private DataService: DataService){}
  
  data = new Data() // class should convert into object, so only can use
  mobiCover = this.data.mobileCover;

  onCardClick(content: mobileCards): void {
    this.DataService.setSelectedContent(content);
  }
  
  ngOnInit() {

  }


}
