import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/categories';
const newUrl = 'http://localhost:8000/api/categories/cat-id';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCats(): Observable<any> {
    return this.http.get(baseUrl);
  }

  newCat(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getCat(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }

}




