import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { RegisterModel } from 'src/app/models/register-model';
import { ConfigService } from '../utils/config.service';
import {map, tap, switchMap} from 'rxjs/operators';
import { UserProfile } from 'src/app/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '';
  private loggedIn = false;

  private authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this.authNavStatusSource.asObservable();

  private userProfileSource = new Subject<UserProfile>();
  userProfile$ = this.userProfileSource.asObservable();
  userProfile: UserProfile;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.loggedIn = !!localStorage.getItem('auth_key');
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
                this.loggedIn = true;
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
                this.userProfile = up;
                this.userProfileSource.next(up);
                return true;
              })
            );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.authNavStatusSource.next(false);
  }

  register(email: string, password: string, firstname: string, lastname: string): Observable<RegisterModel> {
    return null;
  }
}
