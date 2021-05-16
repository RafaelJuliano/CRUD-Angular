import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent implements OnInit {
  @Output() selectedState = new EventEmitter();
  @Output() tableLayer = new EventEmitter();
  @Input() public addScreenVisible = false;
  @Input() public selectedCountryID : number = 0;
  readonly apiURL : string;
  inputValue : String | undefined;
  public states :any;
  
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(){
    this.getStates();
  }

  getStates() {
    console.log(`Searching for states with contryID = ${this.selectedCountryID}`)
    this.http.get(`${ this.apiURL }/select/estados/${this.selectedCountryID}`)
             .subscribe(res => this.states = res);            
  }

  selectState(id :number){
    console.log(`State id: ${id} emited from state-table`)
    this.selectedState.emit(id);
    console.log("Changing the table layer to city...")
    this.tableLayer.emit('city');    
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
