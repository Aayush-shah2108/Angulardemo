import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderNavService } from '../header-nav/header-nav.service';
import { FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/login.service';

declare let mLayout: any;
@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  encapsulation: ViewEncapsulation.None,
})

export class HeaderNavComponent {
  loginForm: FormGroup;
  name: string;
  email: string;
  profilesList: any;
  // profileForm: FormGroup;
  imageUrl: string;
  userName: string;
  response: any;
  userFirstName: String;
  userLastName: String;
  userImageUrl: String;


  constructor(private HeaderNavService: HeaderNavService,
    private router: Router,
    private toastService: ToastrService,
    // private _formBuilder: FormBuilder
    private api: LoginService
  ) {
  }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('userName'))
  }

  logout() {
    this.HeaderNavService.logout().subscribe((response: any) => {

    })
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }
  routeToProfile() {
    this.router.navigate(['/role'])
  }
}