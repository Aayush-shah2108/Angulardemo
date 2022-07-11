(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-role-management-role-management-module"],{

/***/ "./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">Role Management</h3>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"m-portlet m-portlet--full-height\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<H3 class=\"m-portlet__head-text\" *ngIf=\"!roleForm.value._id\"> Add New Role </H3>\n\t\t\t\t\t\t\t<H3 class=\"m-portlet__head-text\" *ngIf=\"roleForm.value._id\"> Edit Role </H3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t<form [formGroup]=\"roleForm\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Role Id</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"enter unique role id\" formControlName=\"roleId\" [ngClass]=\"{brdrRed: formSubmitted&&roleForm.controls.roleId.invalid}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Role Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"enter role name here\" formControlName=\"roleName\" [ngClass]=\"{brdrRed: formSubmitted&&roleForm.controls.roleName.invalid}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-flex w-100 justify-content-center mt-3\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary w-90\" (click)=\"saveRole()\">Save</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger w-90 ml-4\" [routerLink]=\"['/role-management']\" (click)=\"spinner.show()\">Cancel</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddEditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditRoleComponent", function() { return AddEditRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _role_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role-management.service */ "./src/app/theme/pages/default/role-management/role-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEditRoleComponent = /** @class */ (function () {
    function AddEditRoleComponent(formBuilder, activeRoute, toastr, spinner, router, apiFactory) {
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.apiFactory = apiFactory;
    }
    AddEditRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.hide();
        this.buildRoleForm();
        if (this.activeRoute.snapshot.params['id']) {
            this.apiFactory.getRoleDetails(this.activeRoute.snapshot.params['id']).subscribe(function (result) {
                // this.spinner.hide()
                if (!result.success) {
                    var data = result;
                    if (data && data.code && data.code == 200 && data.code) {
                        _this.roleForm.patchValue(data.data);
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
    AddEditRoleComponent.prototype.buildRoleForm = function () {
        this.roleForm = this.formBuilder.group({
            _id: [],
            roleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            roleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    /**
     * add or update role details
     */
    AddEditRoleComponent.prototype.saveRole = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.roleForm.invalid) {
            this.toastr.error('Please provide valid details');
            return false;
        }
        var fd = new FormData();
        fd.append('roleId', this.roleForm.value.roleId);
        fd.append('roleName', this.roleForm.value.roleName);
        var result;
        if (this.activeRoute.snapshot.paramMap.get('id')) {
            result = this.apiFactory.updateRole(fd, this.roleForm.value._id);
        }
        else {
            result = this.apiFactory.createRole(fd);
        }
        this.spinner.show();
        result.subscribe(function (response) {
            if (response && response.code && response.code == 200) {
                _this.spinner.hide();
                _this.formSubmitted = false;
                _this.router.navigate(['role-management']);
                _this.toastr.success(response.message);
            }
            else {
                _this.spinner.hide();
                _this.toastr.error(response.message);
            }
        });
    };
    AddEditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-edit-role",
            template: __webpack_require__(/*! ./add-edit-role.component.html */ "./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _role_management_service__WEBPACK_IMPORTED_MODULE_5__["RoleManagementService"]])
    ], AddEditRoleComponent);
    return AddEditRoleComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/role-management/role-management.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/role-management.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <H1 class=\"ml-5 mt-3\">Coming soon..</H1> -->\n\n\n\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto d-flex w-100 justify-content-between\">\n\t\t\t<div class=\"\" appunwraptag=\"\">\n\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t<div class=\"mr-auto\">\n\t\t\t\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">Role Management</h3>\n\t\t\t\t\t\t<!-- <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t\t\t\t<a class=\"m-nav__link m-nav__link--icon\" routerLink=\"/role-management\" (click)=\"spinner.show()\">\n\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__separator\"></li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link disabled\" routerLink=\"/role-management\" (click)=\"spinner.show()\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">Role Management</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<button class=\"btn btn-primary\" routerLink=\"/role-management/add\" (click)=\"spinner.show()\">Add New role</button>\n\t</div>\n</div>\n<div class=\"m-content\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"m-portlet m-portlet--full-height custom-datatables-style\">\n\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t<table class=\"table table-striped table-bordered table-hover table-checkable\" id=\"m_table_1\">\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/role-management/role-management.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/role-management.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-service */ "./src/app/app-service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _role_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-management.service */ "./src/app/theme/pages/default/role-management/role-management.service.ts");
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
var RoleManagementComponent = /** @class */ (function () {
    function RoleManagementComponent(_script, spinner, toastr, apiFactory, router, themeService) {
        this._script = _script;
        this.spinner = spinner;
        this.toastr = toastr;
        this.apiFactory = apiFactory;
        this.router = router;
        this.themeService = themeService;
    }
    RoleManagementComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        if (typeof (_window().isScriptLoadedrolemgmt) == "undefined")
            _window().my = _window().my || {};
        _window().my.rolemgmt = _window().my.rolemgmt || {};
        _window().my.rolemgmt.edit = this.edit.bind(this);
        _window().my.rolemgmt.delete = this.delete.bind(this);
        if (typeof (_window().isScriptLoadedrolemgmt) == "undefined")
            _window().isScriptLoadederolemgmt = false;
    };
    RoleManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var that = this;
        var scripts = [];
        if (!_window().isScriptLoadedrolemgmt) {
            scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
        }
        setTimeout(function () {
            _this.themeService.updatedProfileData.subscribe(function (response) {
                if (response.responseCode && response.responseCode == 200 && response.responseData) {
                    _this.profileData = response.responseData ? response.responseData : {};
                }
            });
        });
        this._script.loadScripts('app-role-management', scripts).then(function () {
            _window().isScriptLoadedrolemgmt = true;
            jQuery(document).ready(function () {
                var t;
                t = $("#m_table_1").DataTable({
                    responsive: !0,
                    //   pagingType: "full_numbers",
                    serverSide: false,
                    order: [],
                    ajax: {
                        'url': _app_service__WEBPACK_IMPORTED_MODULE_3__["URL"] + "admin/getUserList",
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
                            title: 'Role Id',
                            data: 'roleId',
                            "width": "30%"
                        },
                        {
                            title: 'Role Name',
                            data: 'roleName'
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
                                return '\n <button class="btn btn-success btn-small" data-id="' + id + '" onclick="window.my.rolemgmt.edit(this)" style="margin-right:16px" title="Edit"><i class="fa fa-pencil"></i><button class="btn btn-danger btn-small" data-id="' + id + '" onclick="window.my.rolemgmt.delete(this)" style="margin-right:16px" title="Delete"><i class="fa fa-trash"></i>';
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
    RoleManagementComponent.prototype.delete = function (id) {
        var _this = this;
        var ids = $(id).attr("data-id");
        this.spinner.show();
        this.apiFactory.deleteRole(ids).subscribe(function (response) {
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
    RoleManagementComponent.prototype.edit = function (id) {
        var ids = $(id).attr("data-id");
        this.router.navigate(['role-management/edit', ids]);
    };
    // check permission for read and write
    RoleManagementComponent.prototype.getRWAccess = function () {
        if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.write == true))) {
            return true;
        }
        else {
            return false;
        }
    };
    RoleManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-role-management",
            template: __webpack_require__(/*! ./role-management.component.html */ "./src/app/theme/pages/default/role-management/role-management.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _role_management_service__WEBPACK_IMPORTED_MODULE_5__["RoleManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]])
    ], RoleManagementComponent);
    return RoleManagementComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/role-management/role-management.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/role-management.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RoleManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementModule", function() { return RoleManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-management.component */ "./src/app/theme/pages/default/role-management/role-management.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/fesm5/ngx-ckeditor.js");
/* harmony import */ var _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-edit-role/add-edit-role.component */ "./src/app/theme/pages/default/role-management/add-edit-role/add-edit-role.component.ts");
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
                "component": _role_management_component__WEBPACK_IMPORTED_MODULE_3__["RoleManagementComponent"]
            }, {
                "path": "add",
                "component": _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["AddEditRoleComponent"]
            },
            {
                "path": "edit/:id",
                "component": _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["AddEditRoleComponent"]
            }
        ]
    }
];
var RoleManagementModule = /** @class */ (function () {
    function RoleManagementModule() {
    }
    RoleManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _role_management_component__WEBPACK_IMPORTED_MODULE_3__["RoleManagementComponent"],
                _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["AddEditRoleComponent"]
            ],
            providers: []
        })
    ], RoleManagementModule);
    return RoleManagementModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/role-management/role-management.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/pages/default/role-management/role-management.service.ts ***!
  \********************************************************************************/
/*! exports provided: RoleManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementService", function() { return RoleManagementService; });
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



var RoleManagementService = /** @class */ (function () {
    function RoleManagementService(http) {
        this.http = http;
    }
    /**for set header */
    RoleManagementService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('token', JSON.parse(localStorage.getItem('token')));
        return headers;
    };
    /**for set header */
    RoleManagementService.prototype.getHeaderWithoutToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    RoleManagementService.prototype.deleteRole = function (RoleId) {
        return this.http.delete(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'role/deleteRole/' + RoleId, { headers: this.getHeaderWithToken() });
    };
    /**
     * returns the detail of particular details
     * @param RoleId
     */
    RoleManagementService.prototype.getRoleDetails = function (RoleId) {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'role/fetchRole/' + RoleId, { headers: this.getHeaderWithToken() });
    };
    /**
     * creates new email teplate
     * @param RoleObj detail object of Role
     */
    RoleManagementService.prototype.createRole = function (RoleObj) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'role/addRole', RoleObj, { headers: this.getHeaderWithToken() });
    };
    /**
     * update particular email teplate's details
     * @param RoleObj detail object of the Role
     * @param RoleId unique id of the Role
     */
    RoleManagementService.prototype.updateRole = function (RoleObj, RoleId) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'role/editRole/' + RoleId, RoleObj, { headers: this.getHeaderWithToken() });
    };
    RoleManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleManagementService);
    return RoleManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-role-management-role-management-module.js.map