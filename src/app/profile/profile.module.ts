import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileRoutesComponent } from './profile-routes/profile-routes.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';


@NgModule({
  declarations: [ProfileRoutesComponent, ProfileComponent, ProfileInfoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
