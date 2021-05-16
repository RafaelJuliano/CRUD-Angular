import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent implements OnInit {
  @Input() public tableLayer: string = 'country';

  @Input()
  public selectedCountryID: number = 0;
  @Input()
  public selectedStateID: number = 0;
  @Input()
  public selectedCityID: number = 0;

  constructor() {}

  selectTableLayer($event : string){
    this.tableLayer = $event;
    console.log(`The table layer was change to ${this.tableLayer} sending the IDs: country =${this.selectedCountryID}; state =${this.selectedStateID}; city${this.selectedCityID};`)
  }

  selectCountryID(id: number) {
    this.selectedCountryID = id;
    console.log(`The actual value of selectedCountryID on aplication is ${this.selectedCountryID}`)
  }

  selectStateID($event: number) {
    this.selectedStateID = $event;
  }

  selectCityID($event: number) {
    this.selectedCityID = $event;
  }
  
  backToHome($event: number){
    this.selectedCountryID = $event;
    this.selectedStateID = $event;
    this.selectedCityID = $event;
  }

  ngOnInit() {}
}