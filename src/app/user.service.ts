import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import {User} from './user';
import { tap } from 'rxjs/operators';
import { shareReplay} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  public signIn(user){
    return this.http.post<User>('http://localhost:8080/api/auth/signin', user, httpOptions)
      .pipe(
          tap(res => this.setSession),
          shareReplay()
      );
}

private setSession(authResult) {
    localStorage.setItem('tokenType', authResult.tokenType);
    localStorage.setItem('token', authResult.accessToken);
}

logout() {
    localStorage.removeItem("tokenType");
    localStorage.removeItem("token");
    }
}
