import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from 'src/app/models/register-model';
import { ConfigService } from '../utils/config.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '';
  private loggedIn = false;

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
                return true;
              })
            );
  }

  register(email: string, password: string, firstname: string, lastname: string): Observable<RegisterModel> {
    return null;
  }
}
