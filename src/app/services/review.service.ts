import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const baseUrl = 'http://localhost:8080/api/review';


@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  addReview(data) {
    return this.http.post(baseUrl, data);
  }









}
