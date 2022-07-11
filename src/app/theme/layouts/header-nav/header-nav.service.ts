import 'rxjs/Rx';
import { URL } from '../../../app-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavService {
  constructor(private http: HttpClient) { }

  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')))
    return headers;
  }

  logout() {
    var adminId = JSON.parse(localStorage.getItem('adminId'));
    return this.http.get(URL + 'logout/' + adminId, { headers: this.getHeaderWithToken() })

  }


}
