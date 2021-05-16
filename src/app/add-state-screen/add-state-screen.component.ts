import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-state-screen',
  templateUrl: './add-state-screen.component.html',
  styleUrls: ['./add-state-screen.component.css']
})
export class AddStateScreenComponent implements OnInit {

  @Input() public addScreenVisible = false;
  @Input() public selectedCountryID = 0;
  @Output() public cancelAddScreen = new EventEmitter();
  @Output() public refreshStateList = new EventEmitter();
  readonly apiURL : string;
  public error :boolean = false;
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    let name = form.value.name.toUpperCase();
    let initial = form.value.initial.toUpperCase();

    this.http.get(`${ this.apiURL }/insert/estados/${name}/${initial}/${this.selectedCountryID}`)
             .subscribe(resultado => {
              console.log(`trying to insert ${name} in the table estado of country ${this.selectedCountryID}`)
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
    this.refreshStateList.emit();
    this.cancel();
  }

  cancel(){
    this.addScreenVisible = false;
    this.cancelAddScreen.emit(false);
  }

}
