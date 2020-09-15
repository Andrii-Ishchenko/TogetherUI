import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main/main.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { RouteDetialComponent } from './route-detail/route-detial/route-detial.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: 'route/:id', component: RouteDetialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
