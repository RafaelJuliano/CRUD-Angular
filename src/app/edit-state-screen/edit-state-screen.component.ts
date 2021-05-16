import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-state-screen',
  templateUrl: './edit-state-screen.component.html',
  styleUrls: ['./edit-state-screen.component.css']
})
export class EditStateScreenComponent implements OnInit {
  @Input() public editScreenVisible = false;
  @Input() public stateToEdit = [0, 'name'];
  @Output() public cancelEditScreen = new EventEmitter();
  @Output() public refreshStateList = new EventEmitter();
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

    this.http.get(`${ this.apiURL }/update/estados/${name}/${initial}/${this.stateToEdit[0]}`)
             .subscribe(resultado => {
              console.log(`trying to update country ${this.stateToEdit[1]} in the table estados`)
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
    this.refreshStateList.emit();
    this.cancel();
  }

  cancel(){
    this.editScreenVisible = false;
    this.cancelEditScreen.emit(false);
  }


}
