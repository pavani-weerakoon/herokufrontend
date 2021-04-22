import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import sellerDTO from '../dto/sellerDTO';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  public saveSeller(seller: sellerDTO): Observable<any>{
    return this.http.post('https://backendpickerrme.herokuapp.com/api/v1/sellerUserRoute/saveSeller', {
      title: seller.title,
      description: seller.description,
      mobileNo: seller.contactNo,
      image: seller.image,
      other: seller.other
    });
  }
  public getAllSellers(): Observable<any>{
    return this.http.get('https://backendpickerrme.herokuapp.com/api/v1/sellerUserRoute/getAllSeller', {
    });
  }
  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete('https://backendpickerrme.herokuapp.com/api/v1/sellerUserRoute/deleteSeller',
      {headers: {id}});
  }
}
