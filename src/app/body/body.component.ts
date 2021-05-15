import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: '<app-body>',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  readonly apiURL : string;
  inputValue : String | undefined;
  public countries :any;
  constructor(private http : HttpClient) {
    this.apiURL = 'https://elephantapi.herokuapp.com';
  }

  ngOnInit(){
    this.getCountries();
  }

  getCountries() {
    this.http.get(`${ this.apiURL }/select/paises/`)
             .subscribe(res => this.countries = res);
  }

  filterTable(event:any, tr:any) {
    var filter, table, tr, td, i, txtValue;    
    filter = event.value.toUpperCase(); 

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
  
  
}

/*
<tbody *ngFor="let pais of paises">
            <tr>
              <td>{{pais.id_pais}}</td>
              <td>{{pais.pais_nome}}</td>
              <td>{{pais.pais_sigla}}</td>
              <td><a href=''>Edt</a><a href=''>Del</a></td>
            </tr>
          </tbody>
          */