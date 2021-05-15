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

  selectCountryID($event: number) {
    this.selectedCountryID = $event;
  }

  selectStateID($event: number) {
    this.selectedStateID = $event;
  }

  selectCityID($event: number) {
    this.selectedCityID = $event;
  }

  ngOnInit() {}
}