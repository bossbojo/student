import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Url = UrlConfig;
  constructor() { }

  ngOnInit() {
  }

}
