import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../theme.service';

declare let mLayout: any;
@Component({
  selector: "app-aside-nav",
  templateUrl: "./aside-nav.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {

  profileData: any;
  constructor(public spinner: NgxSpinnerService, private router: Router, private themeService: ThemeService) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {

    setTimeout(() => {
      // this.themeService.getProfile()
      // this.spinner.show()
      this.themeService.updatedProfileData.subscribe((response: any) => {
        if (response.responseCode && response.responseCode == 200 && response.responseData) {
          this.profileData = response.responseData ? response.responseData : {};
          this.spinner.hide()
        } else {
          this.spinner.hide()
        }

      }, error => {
        this.spinner.hide()
      });
      mLayout.initAside();
    });
  }

  //allow permission based on role and management module
  getAccess(url) {
    switch (url) {
      case "role":
      case "company profile":
        return this.profileData && this.profileData.role === "SUPER ADMIN" ? true : false;
      // break;
      case "SUB_USER_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.SUB_USER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.SUB_USER_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "USER_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.USER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.USER_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "BUSINESS_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.BUSINESS_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.BUSINESS_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "SUBSCRIPTION_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.SUBSCRIPTION_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.SUBSCRIPTION_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "CMS_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.CMS_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.CMS_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "EVENT_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.EVENT_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.EVENT_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "COUPONCODE_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "COUPONCODE_ASSIGNMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.write == true)) {
          return true;
        } else {
          return false;
        }
      case "CATEGORY_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.CATEGORY_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.CATEGORY_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "NOTIFICATION_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "INVOICE_BILLING_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.INVOICE_BILLING_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.INVOICE_BILLING_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }
      case "General Settings":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && ((this.profileData.permissionDetails.permissions.PARAMETER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.PARAMETER_MANAGEMENT.read == true)
          || (this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.read == true)
        ))) {
          return true;
        } else {
          return false;
        }

      case "FORUM_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.read == true))) {
          return true;
        } else {
          return false;
        }

      case "ENQUIRY_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN")) {
          return true;
        } else {
          return false;
        }

      case "REPORTS_MANAGEMENT":
        if ((this.profileData && this.profileData.role === "SUPER ADMIN")) {
          return true;
        } else {
          return false;
        }

      default:
        break;
    }
  }

  activateSpinner(route) {
    if (this.router.url != route) {
      this.spinner.show()
    }
  }

}