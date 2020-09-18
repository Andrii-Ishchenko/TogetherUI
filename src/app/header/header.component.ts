import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService} from '../shared/services/user.service';
import { UserProfile } from '../models/user-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isAuthenticated: boolean;
  private isProfileLoaded = false;
  private profile: UserProfile;

  authSubscription: Subscription;
  profileSubscription: Subscription;

  constructor(private userService: UserService) {
    this.authSubscription = this.userService.authNavStatus$.subscribe((value) => this.isAuthenticated = value);
    this.profileSubscription = this.userService.userProfile$.subscribe((profile) => {
      console.log('getting profile in header');
      console.dir(profile);
      this.isProfileLoaded = true;
      this.profile = profile;
    });
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.profileSubscription.unsubscribe();
  }
}
