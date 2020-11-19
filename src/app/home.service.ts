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

  newHouse(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getHouse(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }

  updateHouse(id, data): Observable<any> {
    return this.http.put(`${newUrl}/${id}`, data);
  }

  deleteHouse(id): Observable<any> {
    return this.http.delete(`${newUrl}/${id}`);
  }
}
