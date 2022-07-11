
import 'rxjs/Rx';
import { URL } from '../app-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private nameSource = new BehaviorSubject(localStorage.getItem('firstName'));
  displayName = this.nameSource.asObservable();
  private imageSource = new BehaviorSubject(localStorage.getItem('imageUrl'));
  displayImage = this.imageSource.asObservable();

  changeDisplayname(name) {
    this.nameSource.next(name)
  }

  changeDisplayimage(imageUrl) {
    this.imageSource.next(imageUrl)
  }

  getHeaderWithoutToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  getProfileHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')))
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  login(loginData) {
    return this.http.post(URL + 'admin/login', loginData)
  }
}
