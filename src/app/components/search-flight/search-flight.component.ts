import { Component, OnInit } from '@angular/core';
import { ScannerServiceService } from '../../services/scanner-service.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  selected = '';
  myControl = new FormControl();
  options: string[]=[];

  constructor(private SearchService:ScannerServiceService) { }

  ngOnInit(): void {
    this.selected="country"
   this.someMethod(this.selected)
   
  }
 
 
displayValue(subject){
  return subject? subject.name:undefined;
}


  someMethod(value){
    console.log(value);
    this.selected=value;

    if(this.selected==='country'){
      this.SearchService.getCodes('codes/countries').subscribe(
        (response: any) => {
            this.options=response;
        });  
    }

    if(this.selected==='uncode'){
      this.SearchService.getCodes('codes/locations').subscribe(
        (response: any) => {
          console.log(response);
          
               this.options=response;
        });
      // console.log(this.options);
  
    }

  }
}
