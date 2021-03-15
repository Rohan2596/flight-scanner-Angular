import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ScannerServiceService } from 'src/app/services/scanner-service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor(private dataService: DataService, private SearchService: ScannerServiceService) { }
  options: any[] = [];
  ngOnInit(): void {

    this.dataService.currentMessage.subscribe(message => this.reciveMessage(message));
    console.log(this.options);

  }

  reciveMessage(message) {
    console.log("Recive message" + message);
    this.options = message
    console.log(this.options);



  }
  displayValue(subject) {
    return subject ? subject.name : undefined;
  }

}
