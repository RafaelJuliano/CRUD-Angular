import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  @Output() selectedCountry = new EventEmitter();
  @Output() tableLayer = new EventEmitter();
  readonly apiURL : string;
  inputValue : String | undefined;
  public countries :any;

  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(){
    this.getCountries();
  }

  getCountries() {
    this.http.get(`${ this.apiURL }/select/paises/`)
             .subscribe(res => this.countries = res);  
  }

  selectCountry(id :number){
    console.log(`Country id: ${id} emited from country-table`)
    this.selectedCountry.emit(id);
    console.log("Changing the table layer to state...")
    this.tableLayer.emit('state');    
  }
}
