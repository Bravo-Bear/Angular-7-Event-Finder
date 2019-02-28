import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEvents(location) {
    return this.http.get(`http://localhost:5000/events/${location}`)
  }
  getImages(location) {
    return this.http.get(`http://localhost:5000/img/${location}`)
  }
}
