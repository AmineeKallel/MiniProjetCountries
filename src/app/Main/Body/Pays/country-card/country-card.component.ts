import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../../service/api.service';
import {Router} from '@angular/router';
import {Pays} from '../../../../interface/pays';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
  @Input() pays = '';
  // @ts-ignore
  @Input() region: Pays;
  constructor( private api: ApiService, private route: Router){ }
  dataCountries: any;
  ngOnInit(): void {

  }
  goToDetails(): void {
    this.route.navigate(['CountriesInfo/country/', this.region?.name]);
  }

}
