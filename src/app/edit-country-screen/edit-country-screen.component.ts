import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-country-screen',
  templateUrl: './edit-country-screen.component.html',
  styleUrls: ['./edit-country-screen.component.css']
})
export class EditCountryScreenComponent implements OnInit {
  @Input() public editScreenVisible = false;
  @Input() public countryToEdit = [0, 'name'];
  @Output() public cancelEditScreen = new EventEmitter();
  @Output() public refreshCountryList = new EventEmitter();
  readonly apiURL : string;
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  
  public error :boolean = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    let name = form.value.editName.toUpperCase();
    let initial = form.value.editInitial.toUpperCase();

    this.http.get(`${ this.apiURL }/update/paises/${name}/${initial}/${this.countryToEdit[0]}`)
             .subscribe(resultado => {
              console.log(`trying to update country ${this.countryToEdit[1]} in the table pais`)
            },
            erro => {
              if(erro) {
                console.log("Error: "+erro.status);
                alert("Ops, não foi possível atualizar o cadastro")
                this.error = true;
              } 
            });  
             
    if (!this.error){
      alert("Cadastro atualizado com sucesso");
    }
    this.refreshCountryList.emit();
    this.cancel();
  }

  cancel(){
    this.editScreenVisible = false;
    this.cancelEditScreen.emit(false);
  }


}
