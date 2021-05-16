import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {
  @Output() selectedCity = new EventEmitter();
  @Input() selectedStateID : number = 0;
  readonly apiURL : string;
  public cities :any;
  
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(){
    this.getStates();
  }

  getStates() {
    console.log(`Searching for cities with StateID = ${this.selectedStateID}`)
    this.http.get(`${ this.apiURL }/select/cidades/${this.selectedStateID}`)
             .subscribe(res => this.cities = res);            
  }

  selectCity(id :number){
    console.log(`City id: ${id} emited from city-table`)
    this.selectedCity.emit(id);  
  }
}
