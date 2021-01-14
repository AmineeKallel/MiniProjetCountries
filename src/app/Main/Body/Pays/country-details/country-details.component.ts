import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../service/api.service';
import {Pays} from '../../../../interface/pays';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: Pays;
  region = '';
  // @ts-ignore
  countries: Pays[];
  constructor(private  route: ActivatedRoute, private  api: ApiService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.region = params.pays;
    });
    this.getCountryDetails(this.region);
  }
  getCountryDetails(pays: string): void {
    this.api.getByCountry(pays).subscribe(
      (res) => {
        this.countries = res;
      }
    );
  }
}
