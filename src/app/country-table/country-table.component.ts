import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input() public addScreenVisible = false;

  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(){
    this.getCountries();
  }

  getCountries() {
    this.http.get(`${ this.apiURL }/select/paises/`)
             .subscribe(res => this.countries = res);
             console.log("Country list updated");  
  }

  selectCountry(id :number){
    console.log(`Country id: ${id} emited from country-table`)
    this.selectedCountry.emit(id);
    console.log("Changing the table layer to state...")
    this.tableLayer.emit('state');    
  }

  changeAddScreenVisible(){
    this.addScreenVisible = !this.addScreenVisible;
    console.log(`Add country screen is visible = ${this.addScreenVisible}`)
  }

  cancelAddScreenVisible($event : boolean){
    console.log('event = '+$event)
    this.addScreenVisible = $event;
  }

}
