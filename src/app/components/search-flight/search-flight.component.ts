import { Component, OnInit } from '@angular/core';
import { ScannerServiceService } from '../../services/scanner-service.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  selected = '';

  constructor(private SearchService:ScannerServiceService) { }

  ngOnInit(): void {
  }

  someMethod(value){
    console.log(value);
    this.selected=value;

    this.SearchService.getCountryCodes('codes/countries').subscribe(
      (response: any) => {
    //  this.note = response;
     console.log(response);
      });

  }
}
