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

  verifyNames(formName: string, formInit: string) {
    let table = <HTMLInputElement>document.getElementById("myTable")
    let tr = table.getElementsByTagName('tr');
    let i, td, nameValue, initValue, nameTd, initTd;
    for (i = 0; i < tr.length; i++) {
      nameTd = tr[i].getElementsByTagName('td')[1];
      initTd = tr[i].getElementsByTagName('td')[2];
      if (nameTd && initTd) {
        nameValue = nameTd.textContent || nameTd.innerText;
        initValue = initTd.textContent || initTd.innerText;
        if (nameValue == formName || initValue == formInit) {
          return false;
        }
      }
    } return true;
  }


  onSubmit(form: NgForm) {    
    let name = form.value.name.toUpperCase();
    let initial = form.value.initial.toUpperCase();
    let isavailable: boolean = this.verifyNames(name, initial);

    if (isavailable) {
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
  }else{
    alert("Nome ou sigla informados não estão disponíveis");
  }
    this.refreshStateList.emit();
    this.cancel();
  }

  cancel(){
    this.addScreenVisible = false;
    this.cancelAddScreen.emit(false);
  }

}
