import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { URL } from '../../../../app-service';
import { ToastrService } from 'ngx-toastr';
import { ProductManagementService } from './product-management.service';
import { Router } from '@angular/router';
import { ThemeService } from '../../../theme.service';

function _window(): any {
    // return the global native browser window object
    return window;
}

@Component({
    selector: "app-product-management",
    templateUrl: "./product-management.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProductManagementComponent implements OnInit, AfterViewInit {
    profileData: any;
    constructor(private _script: ScriptLoaderService,
        public spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private apiFactory: ProductManagementService,
        private router: Router,
        private themeService: ThemeService) {

    }
    ngOnInit() {
        this.spinner.show()
        if (typeof (_window().isScriptLoadedproductmgmt) == "undefined")
            _window().my = _window().my || {};
        _window().my.productmgmt = _window().my.productmgmt || {};
        _window().my.productmgmt.edit = this.edit.bind(this);
        _window().my.productmgmt.delete = this.delete.bind(this);
        if (typeof (_window().isScriptLoadedproductmgmt) == "undefined")
            _window().isScriptLoadedeproductmgmt = false;
    }

    ngAfterViewInit() {
        const that = this;
        let scripts = [];
        if (!_window().isScriptLoadedproductmgmt) {
            scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
        }
        setTimeout(() => {
            this.themeService.updatedProfileData.subscribe((response: any) => {
                if (response.responseCode && response.responseCode == 200 && response.responseData) {
                    this.profileData = response.responseData ? response.responseData : {};
                }
            });
        });
        this._script.loadScripts('app-product-management', scripts).then(function () {

            _window().isScriptLoadedproductmgmt = true;
            jQuery(document).ready(function () {
                var t;
                t = $("#m_table_1").DataTable({
                    responsive: !0,
                    //   pagingType: "full_numbers",
                    serverSide: false,
                    order: [],
                    ajax: {
                        'url': URL + `product/getProductList`,
                        'type': 'get',
                        'beforeSend': function (request) {
                            let token = JSON.parse(localStorage.getItem('token'))
                            request.setRequestHeader("token", token);
                        },
                    },

                    columns: [
                        {
                            title: 'Sr No.',
                            data: 'id'
                        },
                        {
                            title: 'Product Id',
                            data: 'productId',
                            "width": "30%"
                        },
                        {
                            title: 'Product Name',
                            data: 'productName'
                        },
                        {
                            title: 'Actions',
                            data: 'Actions'
                        }
                    ],
                    columnDefs: [
                        {
                            targets: -1,
                            title: "Actions",
                            orderable: !1,
                            render: function (t, a, e, n) {

                                var id = (e._id).toString();
                                return '\n <button class="btn btn-success btn-small" data-id="' + id + '" onclick="window.my.productmgmt.edit(this)" style="margin-right:16px" title="Edit"><i class="fa fa-pencil"></i><button class="btn btn-danger btn-small" data-id="' + id + '" onclick="window.my.productmgmt.delete(this)" style="margin-right:16px" title="Delete"><i class="fa fa-trash"></i>'

                            }
                        },
                        {
                            targets: 0,
                            title: "Sr No.",
                            render: function (data, type, row, meta) {
                                return meta.row + 1;
                            }
                        }
                    ],
                });
            })
        });
        this.spinner.hide()

    }

    /**
   * delete template
   * @param btnRef button element
   */
    delete(id) {
        var ids = $(id).attr("data-id")
        this.spinner.show();

        this.apiFactory.deleteProduct(ids).subscribe((response: any) => {
            if (response.code == 200) {
                this.spinner.hide();
                this.toastr.success(response.message)
                $('#m_table_1').DataTable().ajax.reload();
                this.spinner.hide();
            } else {
                this.spinner.hide();
                this.toastr.error(response.message)
            }
        }, error => {
            this.spinner.hide();
            (error && error.error && error.error.responseMessage) ? this.toastr.error(error.error.responseMessage) :
                this.toastr.error('Something went worng while deleting record')
        })
    }

    edit(id) {
        var ids = $(id).attr("data-id")
        this.router.navigate(['product-management/edit', ids]);
    }

    // check permission for read and write
    getRWAccess() {
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.write == true))) {
            return true;
        } else {
            return false;
        }
    }
}