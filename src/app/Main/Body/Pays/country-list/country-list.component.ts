import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../../service/api.service';
import {Pays} from '../../../../interface/pays';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  @Input() pays = '';
  constructor(private api: ApiService) {}
  countries: Pays[] | undefined;
  ngOnInit(): void {
    this.getCoutries(this.pays);
  }
  getCoutries(region: string): void{
    this.api.getRagion(region).subscribe(
      (res) => {
        this.countries = res;
        return res;
      }
    );
  }
}
