import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PriceEndpoint {
  currency: string,
  privateEncrypt: string
}

@Injectable({
  providedIn: 'root'
})
export class NomicsService {

  apiUrl: string = 'https://api.nomics.com/v1';
  apiKey: string = '0e9a6df5db1b0d1f8c5d5d6c182019ae';

  constructor(private http: HttpClient) { }

  getPriceList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prices?key=${this.apiKey}`);
  }

  getDashboardData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard?key=${this.apiKey}`);
  }

  
}
