import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL } from '../app-service'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public profileData: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
  public updatedProfileData = this.profileData.asObservable();
  constructor(private http: HttpClient) {
 }

  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')))
    headers = headers.set('Content-Type', 'application/json')

    return headers;
}


/**for fetch profile details */
getProfile() {
    var adminId = JSON.parse(localStorage.getItem('adminId'));
      
       this.http.get(URL + 'getProfile/' + adminId, { headers: this.getHeaderWithToken() }).subscribe((data) => {
             this.profileData.next(data);
        });
     
}

  // check permission for read and write
  //  getRWAccess(management): boolean{
  //   switch (management) {
  //     case "SUBSCRIPTION_MANAGEMENT":
  //     case "EVENT_MANAGEMENT":
  //      this.updatedProfileData.subscribe((response: any) => {
  //     if (response.responseCode && response.responseCode == 200 && response.responseData) {
  //       this.profileData = response.responseData ? response.responseData : {} ;
  //       console.log("IN OUT========>",this.profileData['permissionDetails'].permissions[management].write)
  //       console.log()
  //       if((this.profileData && this.profileData['role'] === "SUPER ADMIN") || (this.profileData && this.profileData['permissionDetails'] &&  this.profileData['permissionDetails'].status === "ACTIVE" && (this.profileData['permissionDetails'].permissions[management].write == true))) {
  //     console.log("in if")
  //     return true;
  //   }else{
  //     console.log("in else")
  //     return false;
  //   }
  //   }
  //   });
  //     default:
  //       // code...
  //       return false;
  //   }
    
  // }

}
