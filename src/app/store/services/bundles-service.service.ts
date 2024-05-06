import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BundleService  {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getBundles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bundles`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

}
