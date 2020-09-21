import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main/main.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { AuthGuard } from './account/auth.guard';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent},
  {
    path:  'route',
    loadChildren: './route-detail/route-detail.module#RouteDetailModule',
  },
  { path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule', //() => import('./profile/profile.module').then(m => m.ProfileModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
