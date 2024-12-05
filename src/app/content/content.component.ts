import { Component,OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { mobileCards } from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute, 
    private DataService: DataService){}
  
  data = new Data() // class should convert into object, so only can use
  mobiCover = this.data.mobileCover;
  getContent : mobileCards | undefined;


 /*  getContentDetails(id:number){
    console.log(id)
  } */
  getContentDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.DataService
      .getContentDetails(id)
      .subscribe((content) => (this.getContent = content)); // TODO refactor to getter
  }
  ngOnInit() {
    this.getContentDetails();
  }

}
