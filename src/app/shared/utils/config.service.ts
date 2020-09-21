import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseUri: string;
  private apiUri: string;

  constructor() {
    this.baseUri = 'https://localhost:5001';
    this.apiUri = `${this.baseUri}/api`;
  }

  getBaseUri() {
    return this.baseUri;
  }

  getApiUri() {
    return this.apiUri;
  }
}
