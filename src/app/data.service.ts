import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }

  getMetrics() {
    return this.http.get('http://localhost:8080/api/v1/metrics/get/all/all')
  }

}
