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
  constructor(private DataService: DataService){}

  phoneCase: mobileCards[] = []
  data = new(Data)
  contentDetails = this.data.mobileCover;

  getContent(): void {
    this.phoneCase = this.DataService.getContent();
  }

  ngOnInit(): void {
    this.getContent()
  }
}
