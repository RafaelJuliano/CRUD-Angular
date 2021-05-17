import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-state-screen',
  templateUrl: './remove-state-screen.component.html',
  styleUrls: ['./remove-state-screen.component.css']
})
export class RemoveStateScreenComponent implements OnInit {
  @Input() public removeScreenVisible = false;
  public showConfirmationScreen = false;
  @Input() public stateToRemove = [0, 'name'];
  @Output() public cancelRemoveScreen = new EventEmitter();
  @Output() public refreshStateList = new EventEmitter();
  readonly apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }
  public error: boolean = false;
  public children: any;
  ngOnInit(): void {
  }

  verifyCities() {
    this.http.get(`${this.apiURL}/select/cidades/${this.stateToRemove[0]}`).subscribe(res => this.children = res);
    console.log(this.children);
  }
  
  onSubmit(form: NgForm) {
    let id = form.value.deleteID;
    let isValid = id == this.stateToRemove[0];

    if(isValid){
      this.verifyCities(); 
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
    this.verifyCities();
    if(this.children.length > 0){
      alert("Existem cidades cadastradas neste estado");
      this.cancel();
    } else {
      this.delete();
      alert("Estado deletado com sucesso");
      this.cancel();
    }
    this.refreshStateList.emit();
  }

  delete(){
    console.log(this.stateToRemove[0])
    this.http.get(`${ this.apiURL }/delete/estados/${this.stateToRemove[0]}`)
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