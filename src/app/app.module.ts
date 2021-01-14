import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Main/Header/header/header.component';
import { HomeComponent } from './Main/Body/Home/home/home.component';
import { RegionComponent } from './Main/Body/region/region.component';
// import { CountryDetailsComponent } from './Main/Body/Countries/country-details/country-details.component';
// import { CountryCardComponent } from './Main/Body/Countries/country-card/country-card.component';
// import { CountryListComponent } from './Main/Body/Countries/country-list/country-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CoutriesComponent } from './Main/Body/Pays/coutries/coutries.component';
import { CountryCardComponent } from './Main/Body/Pays/country-card/country-card.component';
import { CountryListComponent } from './Main/Body/Pays/country-list/country-list.component';
import { CountryDetailsComponent } from './Main/Body/Pays/country-details/country-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegionComponent,
    CoutriesComponent,
    CountryCardComponent,
    CountryListComponent,
    CountryDetailsComponent,
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
