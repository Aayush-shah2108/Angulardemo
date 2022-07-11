(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-product-management-product-management-module"],{

/***/ "./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">Product Management</h3>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12\">\r\n\t\t\t<div class=\"m-portlet m-portlet--full-height\">\r\n\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<H3 class=\"m-portlet__head-text\" *ngIf=\"!productForm.value._id\"> Add New Product </H3>\r\n\t\t\t\t\t\t\t<H3 class=\"m-portlet__head-text\" *ngIf=\"productForm.value._id\"> Edit Product </H3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<form [formGroup]=\"productForm\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Product Id</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"enter unique product id\" formControlName=\"productId\" [ngClass]=\"{brdrRed: formSubmitted&&productForm.controls.productId.invalid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Product Name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"enter product name here\" formControlName=\"productName\" [ngClass]=\"{brdrRed: formSubmitted&&productForm.controls.productName.invalid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex w-100 justify-content-center mt-3\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary w-90\" (click)=\"saveProduct()\">Save</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-danger w-90 ml-4\" [routerLink]=\"['/product-management']\" (click)=\"spinner.show()\">Cancel</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProductComponent", function() { return AddEditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _product_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-management.service */ "./src/app/theme/pages/default/product-management/product-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEditProductComponent = /** @class */ (function () {
    function AddEditProductComponent(formBuilder, activeRoute, toastr, spinner, router, apiFactory) {
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.apiFactory = apiFactory;
    }
    AddEditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.hide();
        this.buildProductForm();
        if (this.activeRoute.snapshot.params['id']) {
            this.apiFactory.getProductDetails(this.activeRoute.snapshot.params['id']).subscribe(function (result) {
                // this.spinner.hide()
                if (!result.success) {
                    var data = result;
                    if (data && data.code && data.code == 200 && data.code) {
                        _this.productForm.patchValue(data.data);
                    }
                }
                else {
                    _this.toastr.success(result.message);
                }
            });
        }
    };
    /**
     * builds user form
     */
    AddEditProductComponent.prototype.buildProductForm = function () {
        this.productForm = this.formBuilder.group({
            _id: [],
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    /**
     * add or update product details
     */
    AddEditProductComponent.prototype.saveProduct = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.productForm.invalid) {
            this.toastr.error('Please provide valid details');
            return false;
        }
        var fd = new FormData();
        fd.append('productId', this.productForm.value.productId);
        fd.append('productName', this.productForm.value.productName);
        var result;
        if (this.activeRoute.snapshot.paramMap.get('id')) {
            result = this.apiFactory.updateProduct(fd, this.productForm.value._id);
        }
        else {
            result = this.apiFactory.createProduct(fd);
        }
        this.spinner.show();
        result.subscribe(function (response) {
            if (response && response.code && response.code == 200) {
                _this.spinner.hide();
                _this.formSubmitted = false;
                _this.router.navigate(['product-management']);
                _this.toastr.success(response.message);
            }
            else {
                _this.spinner.hide();
                _this.toastr.error(response.message);
            }
        });
    };
    AddEditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-edit-product",
            template: __webpack_require__(/*! ./add-edit-product.component.html */ "./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_management_service__WEBPACK_IMPORTED_MODULE_5__["ProductManagementService"]])
    ], AddEditProductComponent);
    return AddEditProductComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/product-management/product-management.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/product-management.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <H1 class=\"ml-5 mt-3\">Coming soon..</H1> -->\r\n\r\n\r\n\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto d-flex w-100 justify-content-between\">\r\n\t\t\t<div class=\"\" appunwraptag=\"\">\r\n\t\t\t\t<div class=\"d-flex align-items-center\">\r\n\t\t\t\t\t<div class=\"mr-auto\">\r\n\t\t\t\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">Product Management</h3>\r\n\t\t\t\t\t\t<!-- <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t\t\t\t<a class=\"m-nav__link m-nav__link--icon\" routerLink=\"/product-management\" (click)=\"spinner.show()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-nav__separator\"></li>\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link disabled\" routerLink=\"/product-management\" (click)=\"spinner.show()\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Product Management</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<button class=\"btn btn-primary\" routerLink=\"/product-management/add\" (click)=\"spinner.show()\">Add New product</button>\r\n\t</div>\r\n</div>\r\n<div class=\"m-content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xl-12\">\r\n\t\t\t<div class=\"m-portlet m-portlet--full-height custom-datatables-style\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<table class=\"table table-striped table-bordered table-hover table-checkable\" id=\"m_table_1\">\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/product-management/product-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/product-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementComponent", function() { return ProductManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-service */ "./src/app/app-service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _product_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-management.service */ "./src/app/theme/pages/default/product-management/product-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme.service */ "./src/app/theme/theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








function _window() {
    // return the global native browser window object
    return window;
}
var ProductManagementComponent = /** @class */ (function () {
    function ProductManagementComponent(_script, spinner, toastr, apiFactory, router, themeService) {
        this._script = _script;
        this.spinner = spinner;
        this.toastr = toastr;
        this.apiFactory = apiFactory;
        this.router = router;
        this.themeService = themeService;
    }
    ProductManagementComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        if (typeof (_window().isScriptLoadedproductmgmt) == "undefined")
            _window().my = _window().my || {};
        _window().my.productmgmt = _window().my.productmgmt || {};
        _window().my.productmgmt.edit = this.edit.bind(this);
        _window().my.productmgmt.delete = this.delete.bind(this);
        if (typeof (_window().isScriptLoadedproductmgmt) == "undefined")
            _window().isScriptLoadedeproductmgmt = false;
    };
    ProductManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadedproductmgmt) {
            scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
        }
        setTimeout(function () {
            _this.themeService.updatedProfileData.subscribe(function (response) {
                if (response.responseCode && response.responseCode == 200 && response.responseData) {
                    _this.profileData = response.responseData ? response.responseData : {};
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
                        'url': _app_service__WEBPACK_IMPORTED_MODULE_3__["URL"] + "product/getProductList",
                        'type': 'get',
                        'beforeSend': function (request) {
                            var token = JSON.parse(localStorage.getItem('token'));
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
                                return '\n <button class="btn btn-success btn-small" data-id="' + id + '" onclick="window.my.productmgmt.edit(this)" style="margin-right:16px" title="Edit"><i class="fa fa-pencil"></i><button class="btn btn-danger btn-small" data-id="' + id + '" onclick="window.my.productmgmt.delete(this)" style="margin-right:16px" title="Delete"><i class="fa fa-trash"></i>';
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
            });
        });
        this.spinner.hide();
    };
    /**
   * delete template
   * @param btnRef button element
   */
    ProductManagementComponent.prototype.delete = function (id) {
        var _this = this;
        var ids = $(id).attr("data-id");
        this.spinner.show();
        this.apiFactory.deleteProduct(ids).subscribe(function (response) {
            if (response.code == 200) {
                _this.spinner.hide();
                _this.toastr.success(response.message);
                $('#m_table_1').DataTable().ajax.reload();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.toastr.error(response.message);
            }
        }, function (error) {
            _this.spinner.hide();
            (error && error.error && error.error.responseMessage) ? _this.toastr.error(error.error.responseMessage) :
                _this.toastr.error('Something went worng while deleting record');
        });
    };
    ProductManagementComponent.prototype.edit = function (id) {
        var ids = $(id).attr("data-id");
        this.router.navigate(['product-management/edit', ids]);
    };
    // check permission for read and write
    ProductManagementComponent.prototype.getRWAccess = function () {
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.write == true))) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-management",
            template: __webpack_require__(/*! ./product-management.component.html */ "./src/app/theme/pages/default/product-management/product-management.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _product_management_service__WEBPACK_IMPORTED_MODULE_5__["ProductManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]])
    ], ProductManagementComponent);
    return ProductManagementComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/product-management/product-management.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/product-management.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementModule", function() { return ProductManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-management.component */ "./src/app/theme/pages/default/product-management/product-management.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "./src/app/theme/pages/default/product-management/add-edit-product/add-edit-product.component.ts");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        "path": "",
        "component": _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _product_management_component__WEBPACK_IMPORTED_MODULE_3__["ProductManagementComponent"]
            }, {
                "path": "add",
                "component": _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
            },
            {
                "path": "edit/:id",
                "component": _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
            }
        ]
    }
];
var ProductManagementModule = /** @class */ (function () {
    function ProductManagementModule() {
    }
    ProductManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _product_management_component__WEBPACK_IMPORTED_MODULE_3__["ProductManagementComponent"],
                _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
            ],
            providers: []
        })
    ], ProductManagementModule);
    return ProductManagementModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/product-management/product-management.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/default/product-management/product-management.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementService", function() { return ProductManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductManagementService = /** @class */ (function () {
    function ProductManagementService(http) {
        this.http = http;
    }
    /**for set header */
    ProductManagementService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('token', JSON.parse(localStorage.getItem('token')));
        return headers;
    };
    /**for set header */
    ProductManagementService.prototype.getHeaderWithoutToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    ProductManagementService.prototype.deleteProduct = function (ProductId) {
        return this.http.delete(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'product/deleteProduct/' + ProductId, { headers: this.getHeaderWithToken() });
    };
    /**
     * returns the detail of particular details
     * @param ProductId
     */
    ProductManagementService.prototype.getProductDetails = function (ProductId) {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'product/fetchProduct/' + ProductId, { headers: this.getHeaderWithToken() });
    };
    /**
     * creates new email teplate
     * @param ProductObj detail object of Product
     */
    ProductManagementService.prototype.createProduct = function (ProductObj) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'product/addProduct', ProductObj, { headers: this.getHeaderWithToken() });
    };
    /**
     * update particular email teplate's details
     * @param ProductObj detail object of the Product
     * @param ProductId unique id of the Product
     */
    ProductManagementService.prototype.updateProduct = function (ProductObj, ProductId) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'product/editProduct/' + ProductId, ProductObj, { headers: this.getHeaderWithToken() });
    };
    ProductManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductManagementService);
    return ProductManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-product-management-product-management-module.js.map