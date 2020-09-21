import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../utils/config.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  apiUri: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUri = configService.getApiUri();
   }

  getRoute(id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

    return this.http.get(this.apiUri + `/routes/${id}`, {headers});
  }
}
