import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main/main.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
