import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  navigationService: NavbarService;

  constructor( public nav: NavbarService ) {
    this.navigationService = nav;
  }


    ngOnInit(): void {
        this.navigationService.hide();
    }

}
