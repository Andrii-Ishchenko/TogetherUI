import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileRoutesComponent } from './profile-routes/profile-routes.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {path : '', redirectTo: 'info'},
      {path: 'info', component: ProfileInfoComponent},
      {path: 'routes', component: ProfileRoutesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
