import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  countrie( pays: string): void {
    this.route.navigate(['CountriesInfo/countries' , pays]);

  }

}
