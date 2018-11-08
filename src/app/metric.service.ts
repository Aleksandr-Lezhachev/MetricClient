import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Metric} from './metric';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor(private http: HttpClient) { }

  public createMetric(metric){
  return this.http.post<Metric>('http://localhost:8080/api/v1/metrics/post', JSON.stringify(metric), httpOptions);
  }
}
