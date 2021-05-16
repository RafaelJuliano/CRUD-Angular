import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {
  @Output() selectedCity = new EventEmitter();
  @Input() public addScreenVisible = false;
  @Input() selectedStateID : number = 0;
  readonly apiURL : string;
  @Input() public editScreenVisible = false;
  public cityToEdit : any[] = [0, 'name'];
  public cities :any;
  
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(){
    this.getCities();
  }

  getCities() {
    console.log(`Searching for cities with StateID = ${this.selectedStateID}`)
    this.http.get(`${ this.apiURL }/select/cidades/${this.selectedStateID}`)
             .subscribe(res => this.cities = res);            
  }

  selectCity(id :number){
    console.log(`City id: ${id} emited from city-table`)
    this.selectedCity.emit(id);  
  }

  changeAddScreenVisible(){
    this.addScreenVisible = !this.addScreenVisible;
    console.log(`Add country screen is visible = ${this.addScreenVisible}`)
  }
  
  cancelAddScreenVisible($event : boolean){
    console.log('event = '+$event)
    this.addScreenVisible = $event;
  }

  changeEditScreenVisible(id:number, name:string){
    this.editScreenVisible = !this.editScreenVisible;
    this.cityToEdit = [id, name];
    console.log(`Edit city screen is visible = ${this.editScreenVisible}`)
  }

  cancelEditScreenVisible($event : boolean){
    console.log('event = '+$event)
    this.editScreenVisible = $event;
  }
}
