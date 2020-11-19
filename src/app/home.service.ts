import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/houses';
const newUrl = 'http://localhost:8000/api/house';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
