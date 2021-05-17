import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-city-screen',
  templateUrl: './remove-city-screen.component.html',
  styleUrls: ['./remove-city-screen.component.css']
})
export class RemoveCityScreenComponent implements OnInit {
  @Input() public removeScreenVisible = false;
  public showConfirmationScreen = false;
  @Input() public cityToRemove = [0, 'name'];
  @Output() public cancelRemoveScreen = new EventEmitter();
  @Output() public refreshCityList = new EventEmitter();
  readonly apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:8888';
  }
  public error: boolean = false;
  ngOnInit(): void {
  }

   
  onSubmit(form: NgForm) {
    let id = form.value.deleteID;
    let isValid = id == this.cityToRemove[0];

    if(isValid){
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
      this.delete();
      alert("Cidade deletada com sucesso");
      this.cancel();   
    this.refreshCityList.emit();
  }

  delete(){
    console.log(this.cityToRemove[0])
    this.http.get(`${ this.apiURL }/delete/cidades/${this.cityToRemove[0]}`)
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