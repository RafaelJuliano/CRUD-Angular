import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.css']
})
export class BtnBackComponent implements OnInit {

  @Output() selectedIDs = new EventEmitter();
  @Output() tableLayer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  backToHome(){
    console.log(`Returning parameters to default configuration`)
    this.selectedIDs.emit(0);
    console.log("Changing the table layer to country...")
    this.tableLayer.emit('country');    
  }

}
