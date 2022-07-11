(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/default/product-management/product-management.module": [
		"./src/app/theme/pages/default/product-management/product-management.module.ts",
		"pages-default-product-management-product-management-module~pages-default-role-management-role-manage~d07fc37e",
		"pages-default-product-management-product-management-module"
	],
	"./pages/default/role-management/role-management.module": [
		"./src/app/theme/pages/default/role-management/role-management.module.ts",
		"pages-default-product-management-product-management-module~pages-default-role-management-role-manage~d07fc37e",
		"pages-default-role-management-role-management-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/script-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/_guards/login.guard */ "./src/app/auth/_guards/login.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        "canActivate": [_auth_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-service.ts":
/*!********************************!*\
  !*** ./src/app/app-service.ts ***!
  \********************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
var URL = '/api/';


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<!-- <div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n   <div class=\"m-blockui\">\n      <span>Please wait...</span>\n      <span>\n         <div class=\"m-loader m-loader--brand\"></div>\n      </span>\n   </div>\n</div> -->\n<!-- <ngx-ui-loader></ngx-ui-loader> -->\n\n<ngx-spinner bdOpacity=0.9 bdColor=\"#333\" size=\"medium\" color=\"#3080c0\" type=\"ball-circus\" [fullScreen]=\"true\">\n   <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n\n<!-- end::Page loader -->\n<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<!-- <app-quick-sidebar></app-quick-sidebar> -->\n<!-- <app-scroll-top></app-scroll-top> -->\n<!-- <app-tooltips></app-tooltips> -->\n<!--begin::Base Scripts -->\n<!--end::Base Scripts -->\n<!--begin::Page Vendors -->\n<!--end::Page Vendors -->\n<!--begin::Page Snippets -->\n<!--end::Page Snippets -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_router, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
        this.spinner.show();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/theme-routing.module */ "./src/app/theme/theme-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./http.interceptor */ "./src/app/http.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
// import { NgxUiLoaderModule } from  'ngx-ui-loader';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__["ThemeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            ],
            imports: [
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_9__["ThemeRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                // NgxUiLoaderModule,
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"].forRoot()
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__["ScriptLoaderService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_16__["AppHttpInterceptor"], multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = localStorage.getItem('token');
        if (currentUser) {
            return true;
        }
        else {
            this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/_guards/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/_guards/login.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') && localStorage.getItem('adminId')) {
            this._router.navigate(['/main-dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/http.interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/http.interceptor.ts ***!
  \*************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppHttpInterceptor = /** @class */ (function () {
    function AppHttpInterceptor(toasterService, spinner, router) {
        this.toasterService = toasterService;
        this.spinner = spinner;
        this.router = router;
    }
    AppHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                try {
                    _this.spinner.hide();
                    _this.toasterService.error((err.error.responseMessage) ? err.error.responseMessage : 'An error occurred');
                    if (err.error.responseCode == 403) {
                        localStorage.clear();
                        _this.router.navigate(['login']);
                    }
                }
                catch (e) {
                    _this.spinner.hide();
                    _this.toasterService.error('An error occurred');
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    AppHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrap {\n    display: flex;\n    height: 90vh;\n    align-items: center;\n}\n\n.m-login.m-login--1.m-login--signin .m-login__forget-password {\n    display: block !important;\n}\n\n.m-login__forget-password .m-login.m-login--1 .m-login__wrapper .m-login__form .m-form__group .form-control {\n    border: 1px solid #ebedf2 !important;\n    border-radius: 0.25rem !important;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap\">\n\t<div class=\"w-100 m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\"\n\t id=\"m_login\">\n\t\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside m-auto\">\n\t\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\n\t\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\n\n\t\t\t\t\t<div class=\"m-login__wrapper pt-0\">\n\n\t\t\t\t\t\t<div class=\"m-login__logo\">\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"m-login__signin flipInX animated\" *ngIf=\"!showForgotPasswordForm\">\n\t\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t\t<h3 class=\"m-login__title mb-5\">Sign In To Admin</h3>\n\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<form name=\"loginForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t<ng-template #alertSignin></ng-template>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"email\" name=\"email\" formControlName=\"email\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"lbl-err\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">email is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"lbl-err\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"m-login__form-action mt-5 text-center\">\n\t\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\"\n\t\t\t\t\t\t\t\t\t class=\"btn btn-danger\">Sign In</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBuilder, _router, _loginService, toastService, spinner, activatedRoute) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._loginService = _loginService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.submitted = false; //use for trigger form submitted
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildLoginForm();
        this.spinner.hide();
    };
    LoginComponent.prototype.buildLoginForm = function () {
        this.loginForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        /**stop here if form is invalid */
        if (this.loginForm.invalid) {
            return;
        }
        this.spinner.show();
        this._loginService.login(this.loginForm.value).subscribe(function (response) {
            if (response.code == 200) {
                _this.toastService.success("Login success fully");
                localStorage.setItem('token', JSON.stringify(response.data.userDetails.jwt));
                // localStorage.setItem('_id', JSON.stringify(response.data.userDetails._id))
                // localStorage.setItem('userType', JSON.stringify(response.data.userDetails.userType))
                // localStorage.setItem('userName', JSON.stringify(response.data.userDetails.userName))
                // this._loginService.changeDisplayname(localStorage.getItem('firstName'))
                // let returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/product-management';
                _this._router.navigate(['/product-management']);
                // this._router.navigateByUrl(returnUrl);
                // this.spinner.hide()
            }
            else {
                _this.toastService.error(response.responseMessage);
                // this._router.navigate(['/index']);
                _this.spinner.hide();
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastService.error(error.error.responseMessage);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.nameSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](localStorage.getItem('firstName'));
        this.displayName = this.nameSource.asObservable();
        this.imageSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](localStorage.getItem('imageUrl'));
        this.displayImage = this.imageSource.asObservable();
    }
    LoginService.prototype.changeDisplayname = function (name) {
        this.nameSource.next(name);
    };
    LoginService.prototype.changeDisplayimage = function (imageUrl) {
        this.imageSource.next(imageUrl);
    };
    LoginService.prototype.getHeaderWithoutToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    LoginService.prototype.getProfileHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')));
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    LoginService.prototype.login = function (loginData) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'admin/login', loginData);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\r\n\t<i class=\"la la-close\"></i>\r\n</button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\r\n\t<!-- BEGIN: Aside Menu -->\r\n\t<div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\" m-menu-vertical=\"1\" m-menu-scrollable=\"1\"\r\n\t m-menu-dropdown-timeout=\"500\" style=\"position: relative;\">\r\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\r\n\r\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t<a routerLink=\"/product-management\" class=\"m-menu__link\" (click)=\"activateSpinner('/product-management')\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-dashboard\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">ProductManagement</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t<a routerLink=\"/role-management\" class=\"m-menu__link\" (click)=\"activateSpinner('/role-management')\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-dashboard\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">RoleManagement</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme.service */ "./src/app/theme/theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent(spinner, router, themeService) {
        this.spinner = spinner;
        this.router = router;
        this.themeService = themeService;
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            // this.themeService.getProfile()
            // this.spinner.show()
            _this.themeService.updatedProfileData.subscribe(function (response) {
                if (response.responseCode && response.responseCode == 200 && response.responseData) {
                    _this.profileData = response.responseData ? response.responseData : {};
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (error) {
                _this.spinner.hide();
            });
            mLayout.initAside();
        });
    };
    //allow permission based on role and management module
    AsideNavComponent.prototype.getAccess = function (url) {
        switch (url) {
            case "role":
            case "company profile":
                return this.profileData && this.profileData.role === "SUPER ADMIN" ? true : false;
            // break;
            case "SUB_USER_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.SUB_USER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.SUB_USER_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "USER_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.USER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.USER_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "BUSINESS_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.BUSINESS_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.BUSINESS_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "SUBSCRIPTION_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.SUBSCRIPTION_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.SUBSCRIPTION_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "CMS_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.CMS_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.CMS_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "EVENT_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.EVENT_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.EVENT_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "COUPONCODE_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "COUPONCODE_ASSIGNMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && this.profileData.permissionDetails.permissions.COUPONCODE_MANAGEMENT.write == true)) {
                    return true;
                }
                else {
                    return false;
                }
            case "CATEGORY_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.CATEGORY_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.CATEGORY_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "NOTIFICATION_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.NOTIFICATION_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "INVOICE_BILLING_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.INVOICE_BILLING_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.INVOICE_BILLING_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "General Settings":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && ((this.profileData.permissionDetails.permissions.PARAMETER_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.PARAMETER_MANAGEMENT.read == true)
                    || (this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.read == true)))) {
                    return true;
                }
                else {
                    return false;
                }
            case "FORUM_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN") || (this.profileData && this.profileData.permissionDetails && this.profileData.permissionDetails.status === "ACTIVE" && (this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.write == true || this.profileData.permissionDetails.permissions.FORUM_MANAGEMENT.read == true))) {
                    return true;
                }
                else {
                    return false;
                }
            case "ENQUIRY_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN")) {
                    return true;
                }
                else {
                    return false;
                }
            case "REPORTS_MANAGEMENT":
                if ((this.profileData && this.profileData.role === "SUPER ADMIN")) {
                    return true;
                }
                else {
                    return false;
                }
            default:
                break;
        }
    };
    AsideNavComponent.prototype.activateSpinner = function (route) {
        if (this.router.url != route) {
            this.spinner.show();
        }
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t<span class=\"m-footer__copyright\"> 2020 &copy; Meet60</span>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span\n\t\t\t\t\t\t\t\tclass=\"m-nav__link-text\">About</span> </a> </li>\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span\n\t\t\t\t\t\t\t\tclass=\"m-nav__link-text\">Privacy</span> </a> </li>\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span class=\"m-nav__link-text\">T&C</span>\n\t\t\t\t\t\t</a> </li>\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span\n\t\t\t\t\t\t\t\tclass=\"m-nav__link-text\">Purchase</span> </a> </li>\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\"> <a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\"\n\t\t\t\t\t\t\ttitle=\"Support Center\" data-placement=\"left\"> <i\n\t\t\t\t\t\t\t\tclass=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i> </a> </li>\n\t\t\t\t</ul>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->"

/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\r\n<header id=\"m_header\" class=\"m-grid__item    m-header\" m-minimize-offset=\"200\" m-minimize-mobile-offset=\"200\" appunwraptag=\"\">\r\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\r\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n\t\t\t<!-- BEGIN: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-light\">\r\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n\t\t\t\t\t\t<a routerLink=\"/main-dashboard\" class=\"m-brand__logo-wrapper\">\r\n\t\t\t\t\t\t\t<!-- <img alt=\"\" src=\"./assets/images/logo.svg\" width=\"120px\" /> -->\r\n\t\t\t\t\t\t\t<h3>Meet60</h3>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END -->\r\n\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END -->\r\n\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\r\n\t\t\t\t\t\t<!-- END -->\r\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- END: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\r\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\r\n\t\t\t\t\t<i class=\"la la-close\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<!-- END: Horizontal Menu -->\r\n\t\t\t\t<!-- BEGIN: Topbar -->\r\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\r\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\" id=\"m_quicksearch\" m-quicksearch-mode=\"dropdown\" m-dropdown-persistent=\"1\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-list-search__form\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\"> </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\" data-height=\"300\" data-mobile-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<!-- <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\r\n\t\t\t\t\t\t\t\tm-dropdown-toggle=\"click\" id=\"m_quicksearch\" m-quicksearch-mode=\"dropdown\"\r\n\t\t\t\t\t\t\t\tm-dropdown-persistent=\"1\"> <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\"> <span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"m-nav__link-icon\"><i class=\"flaticon-multimedia-3\"></i></span> </a>\r\n\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t<!-- <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\r\n\t\t\t\t\t\t\t\tm-dropdown-toggle=\"click\" id=\"m_quicksearch\" m-quicksearch-mode=\"dropdown\"\r\n\t\t\t\t\t\t\t\tm-dropdown-persistent=\"1\"> <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\"> <span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"m-nav__link-icon\"><i class=\"flaticon-alert-2\"></i></span> </a>\r\n\t\t\t\t\t\t\t</li> -->\r\n\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"imageUrl\" class=\"m--img-rounded m--marginless\" alt=\"\" /> </span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--hide\">Nick</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: #2d80c0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"imageUrl\" class=\"m--img-rounded m--marginless\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">{{userName}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">Section</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">My Profile</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"logout()\" class=\"btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\">Logout</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END: Topbar -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n<!-- END: Header -->"

/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_nav_header_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-nav/header-nav.service */ "./src/app/theme/layouts/header-nav/header-nav.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent(HeaderNavService, router, toastService, 
    // private _formBuilder: FormBuilder
    api) {
        this.HeaderNavService = HeaderNavService;
        this.router = router;
        this.toastService = toastService;
        this.api = api;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.userName = JSON.parse(localStorage.getItem('userName'));
    };
    HeaderNavComponent.prototype.logout = function () {
        this.HeaderNavService.logout().subscribe(function (response) {
        });
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
        localStorage.removeItem('userType');
        this.router.navigate(['/login']);
    };
    HeaderNavComponent.prototype.routeToProfile = function () {
        this.router.navigate(['/role']);
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_header_nav_header_nav_service__WEBPACK_IMPORTED_MODULE_2__["HeaderNavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.service.ts ***!
  \****************************************************************/
/*! exports provided: HeaderNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavService", function() { return HeaderNavService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderNavService = /** @class */ (function () {
    function HeaderNavService(http) {
        this.http = http;
    }
    HeaderNavService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')));
        return headers;
    };
    HeaderNavService.prototype.logout = function () {
        var adminId = JSON.parse(localStorage.getItem('adminId'));
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'logout/' + adminId, { headers: this.getHeaderWithToken() });
    };
    HeaderNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HeaderNavService);
    return HeaderNavService;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/theme/layouts/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/theme/layouts/layout/layout.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aside-nav/aside-nav.component */ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"],
            ],
            exports: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout/layout.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/layout/layout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \t\t\t \t\t <router-outlet></router-outlet> \t\t \t\t  "

/***/ }),

/***/ "./src/app/theme/layouts/layout/layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/layout/layout.component.ts ***!
  \**********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/theme/layouts/layout/layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/default.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/default.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.ts ***!
  \**********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/pages/default/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        "path": "",
        "component": _theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        "canActivate": [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        "children": [
            {
                "path": "product-management",
                "loadChildren": "./pages/default/product-management/product-management.module#ProductManagementModule"
            },
            {
                "path": "role-management",
                "loadChildren": "./pages/default/role-management/role-management.module#RoleManagementModule"
            },
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \t \t\t <app-header-nav></app-header-nav>  \t\t<!-- begin::Body --> \t\t <router-outlet></router-outlet> \t\t<!-- end:: Body -->  \t\t <app-footer></app-footer>  \t\t  "

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
        });
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.service.ts":
/*!****************************************!*\
  !*** ./src/app/theme/theme.service.ts ***!
  \****************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeService = /** @class */ (function () {
    function ThemeService(http) {
        this.http = http;
        this.profileData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.updatedProfileData = this.profileData.asObservable();
    }
    ThemeService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('token')));
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    /**for fetch profile details */
    ThemeService.prototype.getProfile = function () {
        var _this = this;
        var adminId = JSON.parse(localStorage.getItem('adminId'));
        this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_2__["URL"] + 'getProfile/' + adminId, { headers: this.getHeaderWithToken() }).subscribe(function (data) {
            _this.profileData.next(data);
        });
    };
    ThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Meet60\Meet60\angularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map