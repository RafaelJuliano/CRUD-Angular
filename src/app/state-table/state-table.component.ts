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
  @Input() public editScreenVisible = false;
  @Input() public removeScreenVisible = false;
  public stateToEdit : any[] = [0, 'name'];
  public stateToRemove : any[] = [0, 'name'];
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

  changeEditScreenVisible(id:number, name:string){
    this.editScreenVisible = !this.editScreenVisible;
    this.stateToEdit = [id, name];
    console.log(`Edit state screen is visible = ${this.editScreenVisible}`)
  }

  cancelEditScreenVisible($event : boolean){
    console.log('event = '+$event)
    this.editScreenVisible = $event;
  }

  changeRemoveScreenVisible(id:number, name:string){
    this.removeScreenVisible = !this.removeScreenVisible;
    this.stateToRemove = [id, name];

    console.log(`Remove state screen is visible = ${this.removeScreenVisible}`)
  }

  cancelRemoveScreenVisible($event : boolean){
    console.log('event = '+$event)
    this.removeScreenVisible = $event;  }
}
