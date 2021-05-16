import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-country-screen',
  templateUrl: './add-country-screen.component.html',
  styleUrls: ['./add-country-screen.component.css']
})
export class AddCountryScreenComponent implements OnInit {

  @Input() public addScreenVisible = false;
  @Output() public cancelAddScreen = new EventEmitter();
  @Output() public refreshCountryList = new EventEmitter();
  readonly apiURL : string;
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  
  public error :boolean = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    let name = form.value.name.toUpperCase();
    let initial = form.value.initial.toUpperCase();

    this.http.get(`${ this.apiURL }/insert/paises/${name}/${initial}`)
             .subscribe(resultado => {
              console.log(`trying to insert ${name} in the table pais`)
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
    this.refreshCountryList.emit();
    this.cancel();
  }

  cancel(){
    this.addScreenVisible = false;
    this.cancelAddScreen.emit(false);
  }

}
