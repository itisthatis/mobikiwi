import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { mobileCards } from '../model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.css'
})
export class ContentDetailsComponent implements OnInit{
  constructor(private dataService: DataService,
    private route: ActivatedRoute){}
  

  phoneCase: mobileCards[] = []
  data = new(Data)
  contentDetails: mobileCards | null = null;

    ngOnInit(): void {
      this.contentDetails = this.dataService.getSelectedContent();
    }
}
