import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-city-screen',
  templateUrl: './edit-city-screen.component.html',
  styleUrls: ['./edit-city-screen.component.css']
})
export class EditCityScreenComponent implements OnInit {

  @Input() public editScreenVisible = false;
  @Input() public cityToEdit = [0, 'name'];
  @Output() public cancelEditScreen = new EventEmitter();
  @Output() public refreshCityList = new EventEmitter();
  readonly apiURL : string;
  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }  
  public error :boolean = false;

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    
    let name = form.value.editName.toUpperCase();
    console.log(`${ this.apiURL }/update/cidades/${name}/${this.cityToEdit[0]}`)

    this.http.get(`${ this.apiURL }/update/cidades/${name}/${this.cityToEdit[0]}`)
             .subscribe(resultado => {
              console.log(`trying to update city ${this.cityToEdit[1]} in the table cidades`)
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
    this.refreshCityList.emit();
    this.cancel();
  }

  cancel(){
    this.editScreenVisible = false;
    this.cancelEditScreen.emit(false);
  }



}
