import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor(  private dataService:DataService) { }
array:[];
  ngOnInit(): void {
  
    this.dataService.currentMessage.subscribe(message => this.array==message);
    
console.log(this.array);

  }

}
