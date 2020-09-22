import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { RegisterModel } from 'src/app/models/register-model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registerModel: RegisterModel = {email: '', password: '', firstname: '', lastname: ''};
  submitted = false;
  error;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  register() {
    this.submitted = true;

    this.userService
      .register(this.registerModel)
      .subscribe(
        response => {
          this.submitted = false;
        },
        error => {
          this.submitted = false;
          this.error = error.message;
          console.dir(error);
        }
      );

  }

}
