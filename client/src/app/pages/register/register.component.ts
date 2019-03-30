/*
Register page
Abirami Robert Kennedy
300934720
3/30/2019
*/
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.user = new User();
  }

//Register new user
  onRegisterSubmit(): void {
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and may log in', {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('A registration Error Occurred', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/register']);
      }
    });
  }


}
