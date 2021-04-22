import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) {
  }

  public checkMobile(email: string): Observable<any>{
    return this.http.get('https://backendpickerrme.herokuapp.com/api/v1/phonePredictRoute/checkPhone', {
      headers: { email }
    });
  }

  public getAllPhone(): Observable<any>{
    return this.http.get('https://backendpickerrme.herokuapp.com/api/v1/phonePredictRoute/getAllPhone', {
    });
  }
}

