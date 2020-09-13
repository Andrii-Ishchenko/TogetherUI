import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials: Credentials = { email: '', password: '' };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService
      .login(this.credentials.email, this.credentials.password)
      .subscribe(() => console.log('login successfull'));
  }

}
