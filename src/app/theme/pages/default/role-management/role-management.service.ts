import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL } from '../../../../app-service';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  constructor(private http: HttpClient) { }

  /**for set header */
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('token', JSON.parse(localStorage.getItem('token')))
    return headers;
  }

  /**for set header */
  getHeaderWithoutToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }


  deleteRole(RoleId) {
    return this.http.delete(URL + 'role/deleteRole/' + RoleId, { headers: this.getHeaderWithToken() })
  }

  /**
   * returns the detail of particular details
   * @param RoleId 
   */
  getRoleDetails(RoleId) {
    return this.http.get(URL + 'role/fetchRole/' + RoleId, { headers: this.getHeaderWithToken() })
  }


  /**
   * creates new email teplate
   * @param RoleObj detail object of Role
   */
  createRole(RoleObj) {
    return this.http.post(URL + 'role/addRole', RoleObj, { headers: this.getHeaderWithToken() })
  }


  /**
   * update particular email teplate's details
   * @param RoleObj detail object of the Role
   * @param RoleId unique id of the Role
   */
  updateRole(RoleObj, RoleId) {
    return this.http.put(URL + 'role/editRole/' + RoleId, RoleObj, { headers: this.getHeaderWithToken() })
  }

} 
