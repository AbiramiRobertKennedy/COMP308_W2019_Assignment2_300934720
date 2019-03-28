import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    //private authService: AuthService
    ) {
    super(route);
  }

  ngOnInit() {
  }

  //isLoggedIn(): boolean {
   // return this.authService.loggedIn();
  }

//}
