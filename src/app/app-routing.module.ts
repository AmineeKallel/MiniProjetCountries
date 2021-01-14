import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Main/Body/Home/home/home.component';
import { RegionComponent } from './Main/Body/region/region.component';
import {CoutriesComponent} from './Main/Body/Pays/coutries/coutries.component';
import {CountryDetailsComponent} from './Main/Body/Pays/country-details/country-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'CountriesInfo', pathMatch: 'full'},
  {path: 'CountriesInfo' , component: HomeComponent  },
  {path: 'CountriesInfo/regions', component: RegionComponent },
  {path: 'CountriesInfo/countries', component: CoutriesComponent },
  {path: 'CountriesInfo/countries', children: [
      { path: ':countrie' , component:  CoutriesComponent},
    ]},
  {path: 'CountriesInfo/country/:pays' , component: CountryDetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
