import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { RegisterModel } from 'src/app/models/register-model';
import { ConfigService } from '../utils/config.service';
import {map, tap, switchMap} from 'rxjs/operators';
import { UserProfile } from 'src/app/models/user-profile';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '';
  // tslint:disable-next-line:variable-name
  private _loggedIn = false;
  public get loggedIn() {
    return this._loggedIn;
  }

  private authNavStatusSource;
  authNavStatus$;

  private userProfileSource;
  userProfile$;
  userProfile: UserProfile;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this._loggedIn = !!localStorage.getItem('auth_token');
    console.log('Logged In Status: ' + this.loggedIn);

    this.authNavStatusSource = new BehaviorSubject<boolean>(this._loggedIn);
    this.authNavStatus$ = this.authNavStatusSource.asObservable();

    if (this._loggedIn) {
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }

    this.userProfileSource = new BehaviorSubject<UserProfile>(this.userProfile);
    this.userProfile$ = this.userProfileSource.asObservable();

    this.baseUrl = configService.getBaseUri();

  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    return this.http
          .post(
              this.baseUrl + '/auth/login',
              JSON.stringify({ username, password }),
              { headers }
            )
            .pipe(
              map((data: any) => {
                localStorage.setItem('auth_token', data.token);
                this._loggedIn = true;
                this.authNavStatusSource.next(true);
                return true;
              }),
              switchMap( () => this.getProfile())
            );
  }

  getProfile() {
    const bearer = `Bearer ${localStorage.getItem('auth_token')}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: bearer});

    return this.http
          .post(
              this.baseUrl + '/accounts/profile',
              {},
              { headers }
            )
            .pipe(
              map((data: UserProfile) => {
                const up = data as UserProfile;
                localStorage.setItem('profile', JSON.stringify(data));
                this.userProfile = up;
                this.userProfileSource.next(up);
                return true;
              })
            );
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('profile');
    this._loggedIn = false;
    this.authNavStatusSource.next(false);
  }

  register(model: RegisterModel) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    return this.http
          .post(
              this.baseUrl + '/accounts',
              model,
              { headers }
          );
  }
}
