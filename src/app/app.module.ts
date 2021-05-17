import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicationComponent } from './aplication/aplication.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StateTableComponent } from './state-table/state-table.component';
import { BtnBackComponent } from './btn-back/btn-back.component';
import { CityTableComponent } from './city-table/city-table.component';
import { AddCountryScreenComponent } from './add-country-screen/add-country-screen.component';
import { AddStateScreenComponent } from './add-state-screen/add-state-screen.component';
import { AddCityScreenComponent } from './add-city-screen/add-city-screen.component';
import { EditCountryScreenComponent } from './edit-country-screen/edit-country-screen.component';
import { EditStateScreenComponent } from './edit-state-screen/edit-state-screen.component';
import { EditCityScreenComponent } from './edit-city-screen/edit-city-screen.component';
import { RemoveCountryScreenComponent } from './remove-country-screen/remove-country-screen.component';
import { RemoveStateScreenComponent } from './remove-state-screen/remove-state-screen.component';
import { RemoveCityScreenComponent } from './remove-city-screen/remove-city-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicationComponent,
    CountryTableComponent,
    HeaderComponent,
    SearchBarComponent,
    StateTableComponent,
    BtnBackComponent,
    CityTableComponent,
    AddCountryScreenComponent,
    AddStateScreenComponent,
    AddCityScreenComponent,
    EditCountryScreenComponent,
    EditStateScreenComponent,
    EditCityScreenComponent,
    RemoveCountryScreenComponent,
    RemoveStateScreenComponent,
    RemoveCityScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
