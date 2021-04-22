import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }

  public checkLaptop(email: string): Observable<any>{
    return this.http.get('https://backendpickerrme.herokuapp.com/api/v1/phonePredictRoute/checkLaptop', {
      headers: { email }
    });
  }
}
