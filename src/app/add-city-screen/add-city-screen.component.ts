import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-city-screen',
  templateUrl: './add-city-screen.component.html',
  styleUrls: ['./add-city-screen.component.css']
})
export class AddCityScreenComponent implements OnInit {

  @Input() public addScreenVisible = false;
  @Input() public selectedStateID = 0;
  @Output() public cancelAddScreen = new EventEmitter();
  @Output() public refreshCityList = new EventEmitter();
  readonly apiURL : string;
  public error :boolean = false;
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    let name = form.value.name.toUpperCase();

    this.http.get(`${ this.apiURL }/insert/cidades/${name}/${this.selectedStateID}`)
             .subscribe(resultado => {
              console.log(`trying to insert ${name} in the table estado of country ${this.selectedStateID}`)
            },
            erro => {
              if(erro) {
                console.log("Error: "+erro.status);
                alert("Ops, não foi possível realizar o cadastro")
                this.error = true;
              } 
            });  
             
    if (!this.error){
      alert("Cadastro realizado com sucesso");
    }
    this.refreshCityList.emit();
    this.cancel();
  }

  cancel(){
    this.addScreenVisible = false;
    this.cancelAddScreen.emit(false);
  }


}
