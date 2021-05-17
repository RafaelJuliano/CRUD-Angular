import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remove-country-screen',
  templateUrl: './remove-country-screen.component.html',
  styleUrls: ['./remove-country-screen.component.css']
})
export class RemoveCountryScreenComponent implements OnInit {
  @Input() public removeScreenVisible = false;
  public showConfirmationScreen = false;
  @Input() public countryToRemove = [0, 'name'];
  @Output() public cancelRemoveScreen = new EventEmitter();
  @Output() public refreshCountryList = new EventEmitter();
  readonly apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }
  public error: boolean = false;
  public children: any;
  ngOnInit(): void {
  }

  verifyStates() {
    this.http.get(`${this.apiURL}/select/estados/${this.countryToRemove[0]}`).subscribe(res => this.children = res);
    console.log(this.children);
  }
  
  onSubmit(form: NgForm) {
    let id = form.value.deleteID;
    let isValid = id == this.countryToRemove[0];

    if(isValid){
      this.verifyStates(); 
      this.cancel();
     this.showConfirmationScreen = true;
    }else {
      alert("Dados informados não conferem");
      this.cancel();
    }
  }

  cancel() {
    this.removeScreenVisible = false;
    this.showConfirmationScreen = false;
    this.cancelRemoveScreen.emit(false);
  }

  confirmDeletion() {
    this.verifyStates();
    if(this.children.length > 0){
      alert("Existem estados cadastrados neste país");
      this.cancel();
    } else {
      this.delete();
      alert("País deletado com sucesso");
      this.cancel();
    }
    this.refreshCountryList.emit();
  }

  delete(){
    console.log(this.countryToRemove[0])
    this.http.get(`${ this.apiURL }/delete/paises/${this.countryToRemove[0]}`)
             .subscribe(resultado => {
              
            },
            erro => {
              if(erro) {
                console.log("Error: "+erro.status);
                alert("Ops, não foi possível deletar o cadastro")
                this.error = true;
              } 
            });  
  }
}
