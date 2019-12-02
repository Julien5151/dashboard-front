import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATION_PAGE_ROUTE_ARRAY } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(AUTHENTICATION_PAGE_ROUTE_ARRAY);
  }

}
