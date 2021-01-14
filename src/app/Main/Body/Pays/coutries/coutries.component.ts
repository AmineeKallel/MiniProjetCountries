import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coutries',
  templateUrl: './coutries.component.html',
  styleUrls: ['./coutries.component.css']
})
export class CoutriesComponent implements OnInit {
  pays = '';
  region = '';
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.region = params.countrie;
    });
  }
}
