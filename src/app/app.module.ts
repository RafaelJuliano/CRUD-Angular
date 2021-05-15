import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { AplicationComponent } from './aplication/aplication.component';
import { BtnAddCountryComponent } from './btn-add-country/btn-add-country.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AplicationComponent,
    BtnAddCountryComponent,
    CountryTableComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
