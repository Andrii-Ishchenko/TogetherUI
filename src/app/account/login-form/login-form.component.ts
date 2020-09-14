import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Credentials } from '../../models/credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials: Credentials = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService
      .login(this.credentials.email, this.credentials.password)
      .subscribe(
        result => {
          if (result) {
             this.router.navigate(['']);
          }
        });
  }

}
