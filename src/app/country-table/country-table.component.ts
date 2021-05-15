import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  readonly apiURL : string;
  inputValue : String | undefined;
  public countries :any;
  constructor(private http : HttpClient) {
    this.apiURL = 'https://elephantapi.herokuapp.com';
  }  

  ngOnInit(){
    this.getCountries();
  }

  getCountries() {
    this.http.get(`${ this.apiURL }/select/paises/`)
             .subscribe(res => this.countries = res);
  }
}
