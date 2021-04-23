import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public registerUser(email: string, password: string): Observable<any>{
    return this.http.post('https://pickerrme-backend.herokuapp.com/api/v1/adminUserRoute/registerUser', {
      email, password
    });
  }

  public loginUser(email: string, password: string): Observable<any>{
    return this.http.get('https://pickerrme-backend.herokuapp.com/api/v1/adminUserRoute/loginUser', {
      headers: { email, password }
    });
  }
}

