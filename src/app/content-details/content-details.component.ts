import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { mobileCards } from '../model';


@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.css'
})
export class ContentDetailsComponent implements OnInit{

  constructor(private dataService: DataService){}
  
  contentDetails: mobileCards | null = null;

    ngOnInit(): void {
      this.contentDetails = this.dataService.getSelectedContent();
    }
}
