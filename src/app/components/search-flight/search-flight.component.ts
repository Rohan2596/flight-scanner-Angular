import { Component, OnInit } from '@angular/core';
import { ScannerServiceService } from '../../services/scanner-service.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  selected = '';
  myControl = new FormControl();
  namesControl = new FormControl();
  options: string[] = [];
  form = '';
  to = '';
  constructor(private SearchService: ScannerServiceService) { }

  ngOnInit(): void {
    this.selected = "country"
    this.someMethod(this.selected)

  }


  displayValue(subject) {
    return subject ? subject.name : undefined;
  }


  someMethod(value) {
    console.log(this.myControl.value);
    console.log(this.namesControl.value);
    this.selected = value;

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
      console.log(event.option.value.uncode);
      this.form = event.option.value.uncode

    }
    if (this.selected == 'country') {
      console.log(event.option.value.code);
      this.form = event.option.value.code

    }
  }
  optionSelectTo(event) {
    console.log(event);

    if (this.selected == 'uncode') {
      console.log(event.option.value.uncode);
      this.to = event.option.value.uncode

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
        this.options = response;
      }, (error) => {                              //Error callback
        console.log(error);
      }
    );
  }
}
