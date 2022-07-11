import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService, public spinner: NgxSpinnerService,
        private router: Router) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    try {
                        this.spinner.hide()
                        this.toasterService.error((err.error.responseMessage)?err.error.responseMessage:'An error occurred');
                        if (err.error.responseCode == 403) {
                            localStorage.clear()
                            this.router.navigate(['login'])
                        }
                    } catch (e) {
                        this.spinner.hide()
                        this.toasterService.error('An error occurred');
                    }
                }
                return of(err);
            }));

    }

}