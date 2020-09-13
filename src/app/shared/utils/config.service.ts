import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUri: string;

  constructor() {
    this.baseUri = 'https://localhost:5001';
  }

  getBaseUri() {
    return this.baseUri;
  }
}
