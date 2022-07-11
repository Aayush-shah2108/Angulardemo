import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; //use for declare formgroup name
  submitted = false; //use for trigger form submitted
  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    private toastService: ToastrService,
    public spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.buildLoginForm();
    this.spinner.hide();
  }

  buildLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    /**stop here if form is invalid */
    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.show()

    this._loginService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.code == 200) {
        this.toastService.success("Login success fully")
        localStorage.setItem('token', JSON.stringify(response.data.userDetails.jwt))
        // localStorage.setItem('_id', JSON.stringify(response.data.userDetails._id))
        // localStorage.setItem('userType', JSON.stringify(response.data.userDetails.userType))
        // localStorage.setItem('userName', JSON.stringify(response.data.userDetails.userName))
        // this._loginService.changeDisplayname(localStorage.getItem('firstName'))
        // let returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/product-management';
        this._router.navigate(['/product-management']);
        // this._router.navigateByUrl(returnUrl);

        // this.spinner.hide()
      } else {
        this.toastService.error(response.responseMessage)
        // this._router.navigate(['/index']);
        this.spinner.hide()
      }
    }, error => {
      this.spinner.hide()
      this.toastService.error(error.error.responseMessage)
    })
  }
}

