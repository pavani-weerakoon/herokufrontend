import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobiRecoService {

  constructor(private http: HttpClient) { }


  public checkMobileRecommendation(): Observable<any>{
    return this.http.get('https://backendpickerrme.herokuapp.com/api/v1/phoneRecommendationRoute/checkMobileRecommendation', {
    });
  }

}
