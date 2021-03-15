import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ScannerServiceService } from '../../services/scanner-service.service';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  selected = '';
  myControl = new FormControl();
  namesControl = new FormControl();
  options: any[] = [];
  form = '';
  to = '';
  message:string;
  data:any[]=[];

  constructor(private SearchService: ScannerServiceService,
    private dataService:DataService
    ) { }

  ngOnInit(): void {
   this.dataService.currentMessage.subscribe(message => this.message)

  }


  displayValue(subject) {
    return subject ? subject.name : undefined;
  }


  someMethod(value) {
    console.log(value);
    
    this.selected = value.value;

    if (this.selected === 'country') {
      this.SearchService.getCodes('codes/countries').subscribe(
        (response: any) => {
          this.options = response;
        });
    }

    if (this.selected === 'uncode') {
      this.SearchService.getCodes('codes/locations').subscribe(
        (response: any) => {
          console.log(response);

          this.options = response;
        });
      // console.log(this.options);

    }

  }
  optionSelectFrom(event) {
    if (this.selected == 'uncode') {
      console.log(event.option.value.unCode);
      this.form = event.option.value.unCode

    }
    if (this.selected == 'country') {
      console.log(event.option.value.code);
      this.form = event.option.value.code

    }
  }
  optionSelectTo(event) {
    console.log(event);

    if (this.selected == 'uncode') {
      console.log(event.option.value.unCode);
      this.to = event.option.value.unCode

    }

    if (this.selected == 'country') {
      console.log(event.option.value.code);
      this.to = event.option.value.code

    }

  }

  onSearch() {
    this.SearchService.getSchedule('schedules', this.form, this.to).subscribe(
      (response: any) => {
        console.log(response);
        this.data = response;
        this.dataService.changeMessage(this.data)
        this.data=[];

      }, (error) => {      
                               //Error callback
       // console.log(error);
       this.dataService.changeMessage(this.data)
        this.data=[];
      }
    );
  }
}
