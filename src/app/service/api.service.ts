import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pays} from '../interface/pays';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fixUrl = 'https://restcountries.eu/rest/v2';
  constructor(
    private httpClient: HttpClient
  ) { }

  getRagion(region: string): Observable<Pays[]>{
    if (region !== undefined) {
      return this.httpClient.get<Pays[]>(this.fixUrl + '/region/' + region);
    }
    else {
      return this.httpClient.get<Pays[]>(this.fixUrl + '/all');
    }
  }
  getByCountry(country: string): Observable<Pays[]>{
    return this.httpClient.get<Pays[]>(this.fixUrl + '/name/' + country);
  }
}
