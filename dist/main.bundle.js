webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__ = __webpack_require__("./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_registration_approve_registration_component__ = __webpack_require__("./src/app/approve-registration/approve-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'registrationForm', component: __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__["a" /* RegistrationFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'approveRegistration', component: __WEBPACK_IMPORTED_MODULE_2__approve_registration_approve_registration_component__["a" /* ApproveRegistrationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = " /*to be done */\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This would embed the container class of bootstrap-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__ = __webpack_require__("./src/app/show-validation-error/show-validation-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gmaps_gmaps_component__ = __webpack_require__("./src/app/gmaps/gmaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_file_upload_service__ = __webpack_require__("./src/app/services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registration_form_registration_form_component__ = __webpack_require__("./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__approve_registration_approve_registration_component__ = __webpack_require__("./src/app/approve-registration/approve-registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__show_validation_error_show_validation_error_component__["a" /* ShowValidationErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__gmaps_gmaps_component__["a" /* GmapsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__approve_registration_approve_registration_component__["a" /* ApproveRegistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I' //credentials for Angular google maps
                }),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_managelandrecords_service__["a" /* ManageLandRecordsService */], __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_12__services_login_authentication_service__["a" /* LoginAuthenticationService */], __WEBPACK_IMPORTED_MODULE_14__services_file_upload_service__["a" /* FileUploadService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/approve-registration/approve-registration.component.css":
/***/ (function(module, exports) {

module.exports = "/* css */"

/***/ }),

/***/ "./src/app/approve-registration/approve-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\"  [ngStyle]=\"{'background-color':'#87b3d9','height':'40px'}\">\n  <h3 [ngStyle]=\"{'color':'#fff'}\">KAVERI- Approve registration Applications</h3>\n</div>\n<div align=\"right\"><app-logout></app-logout></div>\n <div *ngIf=\"template==='form1';then approveForm1 else approveForm2\" ></div>\n <ng-template #approveForm1>\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">Search Criteria</h1>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <div class=\"col-md-4\">\n        <label for=\"wardNo\" class=\"control-label required\">Ward #</label><span style=\"color: red;font-size: 20px;\">*</span>\n        <input type=\"text\" id=\"wardNo\" name=\"wardNo\"  [(ngModel)]=\"wardNo\"  />\n      </div>\n      <div class=\"col-md-4\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)= \"search()\">Search</button>\n      </div>\n    </div>\n    </div>  \n    </div>\n<!--Search results of the land records for approval -->\n<div *ngIf= \"fetchComplete\" >\n<table class=\"table table-striped table-hover\">\n  <thead>\n      <tr>\n          <th>Transaction ID</th>\n          <th>Property ID</th>\n          <th>Ward No</th>\n          <th>Area Code</th>\n          <th>Site No</th>\n          <th>Total Area</th>\n          <th>Approve</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let land of landRecords\">\n          <td><a (click) = \"viewData(land.txnID)\" style=\"cursor: pointer;\">{{land.txnID}}</a></td>\n          <td>{{land.pid}}</td>\n          <td>{{land.wardNo}}</td>\n          <td>{{land.areaCode}}</td>\n          <td>{{land.siteNo}}</td>\n          <td>{{land.geoData.totalArea}}</td>\n         <td><input type=\"checkbox\" name='approval'  [(ngModel)]='land.isKaveriApproved'  #approval=\"ngModel\" /></td>\n      </tr>\n  </tbody>\n</table> \n<div *ngIf='noSearchResults' style='color:red;' align='center'><strong>No matching results found !</strong></div>\n<div *ngIf='!noSearchResults' align='right'>\n<button type=\"submit\" class=\"btn btn-primary\" (click)= \"onSubmit()\">Approve</button>\n</div>\n</div>\n</ng-template>\n<ng-template #approveForm2>\n  <ng-container *ngIf=\"template==='form2';else applicationSuccess\">\n  <div class=\"applicationForm\">\n  <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\n    <fieldset disabled>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('pid')\">\n            <label for=\"pid\" class=\"control-label required\">PID</label>\n            <input type=\"text\" id=\"pid\" class=\"form-control\" formControlName=\"pid\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('pid')\" errorMsg=\"PID is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('wardNo')\">\n            <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Ward # is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('areaCode')\">\n            <label for=\"areaCode\" class=\"control-label required\">Area Code</label>\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Area code is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('siteNo')\">\n            <label for=\"siteNo\" class=\"control-label required\">Plot/Site #</label>\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Plot/Site # is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Geographic Data</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"geoData\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\n              <label for=\"latitude\" class=\"control-label required\">Latitude</label>\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Latitude is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\n              <label for=\"Longitude\" class=\"control-label required\">Longitude</label>\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Longitude is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\n              <label for=\"length\" class=\"control-label required\">Plot Length (ft.)</label>\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Plot length is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\n              <label for=\"width\" class=\"control-label required\">Plot Width (ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Plot width is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\">\n              <label for=\"width\" class=\"control-label\">Total Plot Area (sq. ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('geoData.address')\">\n              <label for=\"address\" class=\"control-label required\">Property Address</label>\n              <input type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Plot address is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"lat && long\">\n          <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Pre Mutation Sketch</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div>\n        <div class=\"col-md-4\" *ngIf=\"sketchURL!=null && sketchURL!=''\">\n        <a [href]='sketchURL' target = '_blank'>View Sketch</a>\n        </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Allottee Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"ownerDetails\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\n              <label for=\"ownerName\" class=\"control-label required\">Allottee Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\n              <label for=\"aadharNo\" class=\"control-label required\">Aadhar #</label>\n              <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\n             <div> <label class=\"control-label required\">Gender</label></div>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"M\" formControlName=\"gender\">Male\n              </label>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"F\" formControlName=\"gender\">Female\n              </label>\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n            </div>\n\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\n                  <label for=\"mobileNo\" class=\"control-label required\">Mobile</label>\n                  <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n                </div>\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\n                  <label for=\"emailID\" class=\"control-label required\">Email ID</label>\n                  <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\n                  <label for=\"ownerAddress\" class=\"control-label required\">Allottee Address</label>\n                  <input type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n\n            </div>\n          </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">New allotee Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"newOwnerDetails\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.ownerName')\">\n              <label for=\"newownerName\" class=\"control-label required\">Allottee Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"newownerName\" formControlName=\"ownerName\">\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.aadharNo')\">\n              <label for=\"newaadharNo\" class=\"control-label required\">Aadhar #</label>\n              <input type=\"text\" id=\"newaadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.gender')\">\n             <div> <label class=\"control-label required\">Gender</label></div>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"M\" formControlName=\"gender\">Male\n              </label>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"F\" formControlName=\"gender\">Female\n              </label>\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n            </div>\n\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.mobileNo')\">\n                  <label for=\"newmobileNo\" class=\"control-label required\">Mobile</label>\n                  <input type=\"text\" id=\"newmobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n                </div>\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.emailID')\">\n                  <label for=\"newemailID\" class=\"control-label required\">Email ID</label>\n                  <input type=\"text\" id=\"newemailID\" class=\"form-control\" formControlName=\"emailID\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('newOwnerDetails.address')\">\n                  <label for=\"newownerAddress\" class=\"control-label required\">Allottee Address</label>\n                  <input type=\"text\" id=\"newownerAddress\" class=\"form-control\" formControlName=\"address\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Sale Details</h1>\n      </div>\n      <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('saleRate')\">\n          <label for=\"saleRate\" class=\"control-label required\">Sale Rate</label>\n          <input type=\"text\" id=\"saleRate\" class=\"form-control\" formControlName=\"saleRate\" />\n          <app-show-validation-error [displayError]=\"isFieldValid('saleRate')\" errorMsg=\"Sale Rate is mandatory\"></app-show-validation-error>\n        </div>\n      </div>\n      </div>\n    </div>\n    </fieldset>                  \n    <div align=\"right\">\n      <button class=\"btn btn-danger\" (click) = \"back()\">Back</button>\n    </div>    \n  </form>\n</div>\n</ng-container>\n</ng-template>\n<!--Success message for the approval-->\n<ng-template #applicationSuccess >\n<div class=\"alert alert-success\"> <strong>Success!</strong>\nAll the below approved records have been committed to the HyperLedger. Their unique Transaction Ids are listed below :\n<ul *ngFor= \"let rec of approvedRecords\">\n  <li>{{rec.txnID}}</li>\n</ul>\n</div>\n  <div class=\"alert alert-info\">\n    Please click on <strong>OK</strong> to approve other applications !\n  </div>\n  <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">OK</button></div>\n</ng-template>"

/***/ }),

/***/ "./src/app/approve-registration/approve-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApproveRegistrationComponent = /** @class */ (function () {
    function ApproveRegistrationComponent(formBuilder, manageLandRecordsService) {
        this.formBuilder = formBuilder;
        this.manageLandRecordsService = manageLandRecordsService;
        this.template = "form1";
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__["a" /* LandRecord */]();
        this.fetchComplete = false;
        this.noSearchResults = false;
    }
    ApproveRegistrationComponent.prototype.ngOnInit = function () {
    };
    ApproveRegistrationComponent.prototype.search = function () {
        var _this = this;
        console.log("ward No :" + this.wardNo);
        this.manageLandRecordsService.getLandRecordsKaveriByWard(this.wardNo)
            .subscribe(function (response) {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response != null) {
                //  this.router.navigate(['/success', this.landRecord.pid]);
                _this.landRecords = response.landRecords.filter(function (kaveriRec) { return !kaveriRec.isKaveriApproved; });
                if (_this.landRecords != null && _this.landRecords.length > 0) {
                    _this.noSearchResults = false;
                }
                else {
                    _this.noSearchResults = true;
                }
                _this.fetchComplete = true;
            }
        });
    };
    ApproveRegistrationComponent.prototype.viewData = function (txnID) {
        this.template = "form2";
        this.loadForm(txnID);
    };
    ApproveRegistrationComponent.prototype.loadForm = function (txnID) {
        var _this = this;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            TimeStamp: [null],
            pid: [''],
            wardNo: [null],
            areaCode: [null],
            siteNo: [null],
            geoData: this.formBuilder.group({
                latitude: [null],
                longitude: [null],
                length: [null],
                width: [null],
                totalArea: '',
                address: [null]
            }),
            preMutationSketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null],
                gender: [null],
                aadharNo: [null],
                mobileNo: [null],
                emailID: [null],
                address: [null]
            }),
            newOwnerDetails: this.formBuilder.group({
                ownerName: [null],
                gender: [null],
                aadharNo: [null],
                mobileNo: [null],
                emailID: [null],
                address: [null]
            }),
            saleRate: [null]
        });
        console.log("Txn Id:" + txnID);
        this.manageLandRecordsService.getLandRecordsKaveriBytxnId(txnID)
            .subscribe(function (response) {
            console.log("res received getLandRecordbyTxnId service" + JSON.stringify(response));
            if (response != null && response.success) {
                _this.landRecord = response.landRecords[0];
                console.log("landRecord object received:" + JSON.stringify(_this.landRecord));
                if (_this.landRecord.sketchURL != null && _this.landRecord.sketchURL != "") {
                    _this.sketchURL = _this.landRecord.sketchURL;
                }
                console.log("sketch URL:" + _this.sketchURL);
                _this.layoutForm.patchValue(_this.landRecord);
                _this.setGeoCordinates();
            }
        });
    };
    ApproveRegistrationComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    ApproveRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("ApplicationData" + JSON.stringify(this.landRecords));
        this.approvedRecords = this.landRecords.filter(function (rec) { return rec.isKaveriApproved; });
        this.manageLandRecordsService.updateKaveriApprovedRecords(this.approvedRecords)
            .subscribe(function (response) {
            console.log("res received updateLandrecordKaveri service" + JSON.stringify(response));
            if (response != null && response.success) {
                //  this.router.navigate(['/success', this.landRecord.pid]);
                _this.template = "form3";
            }
        });
    };
    ApproveRegistrationComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
    };
    ApproveRegistrationComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ApproveRegistrationComponent.prototype.submitNew = function () {
        this.landRecords = [];
        this.template = "form1";
        this.wardNo = null;
        this.fetchComplete = false;
    };
    ApproveRegistrationComponent.prototype.back = function () {
        this.template = "form1";
    };
    ApproveRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-approve-registration',
            template: __webpack_require__("./src/app/approve-registration/approve-registration.component.html"),
            styles: [__webpack_require__("./src/app/approve-registration/approve-registration.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _b || Object])
    ], ApproveRegistrationComponent);
    return ApproveRegistrationComponent;
    var _a, _b;
}());

//# sourceMappingURL=approve-registration.component.js.map

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.css":
/***/ (function(module, exports) {

module.exports = "\nagm-map {\n  height: 200px;\n}\n"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map \n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"16\"\n  [disableDefaultUI]=\"true\"\n  [zoomControl]=\"true\">\n\n  <agm-marker \n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [label]=\"\"\n      [markerDraggable]=\"false\">\n  </agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
    }
    GmapsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], GmapsComponent.prototype, "lng", void 0);
    GmapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gmaps',
            template: __webpack_require__("./src/app/gmaps/gmaps.component.html"),
            styles: [__webpack_require__("./src/app/gmaps/gmaps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GmapsComponent);
    return GmapsComponent;
}());

//# sourceMappingURL=gmaps.component.js.map

/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginAuthService, router) {
        this.loginAuthService = loginAuthService;
        this.router = router;
    }
    //implement canActivate Interface to check if user is already logged in
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('State Url:' + url);
        if (this.loginAuthService.isUserLoggedIn()) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login.alert{\n  color:red;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"site-content aligner\">\n  <div class=\"aligner-item\">\n    <div class=\"container\">\n      <div class=\"box center-block offset-bottom-large\">\n        <h1 class=\"h4 page-header text-center offset-bottom\">Sign In</h1>\n      </div>\n    <div class=\"col-md-4 col-md-offset-4\">\n    <form #userlogin = \"ngForm\" (ngSubmit) = \"onSubmit(userlogin)\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': userlogin.submitted && !username.valid }\">\n        <label class=\"control-label required\" for=\"username\">Username</label>\n        <input type = \"text\" class=\"form-control\" name = \"username\" placeholder=\"Enter username\" [(ngModel)]=\"login.username\" #username=\"ngModel\" required>\n        <div class=\"login alert\" *ngIf=\"userlogin.submitted && !username.valid\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': userlogin.submitted && !password.valid }\">\n        <label class=\"control-label required\" for=\"password\">Password</label>\n        <input type = \"password\" class=\"form-control\" name = \"password\" placeholder=\"Enter password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required>\n        <div class=\"login alert\"  *ngIf=\"userlogin.submitted && !password.valid\">Password is required</div>\n      </div>\n      <div class=\"form-group\" align='center'>\n          <button [disabled]=\"loading\" class=\"btn btn-primary btn-raised btn-block\">Sign In</button>\n      </div>\n      <div *ngIf=\"authMessage && authMessage!=''\" class=\"alert alert-danger\" >{{authMessage}}</div>\n    </form>\n  </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginAuthService, router, route) {
        this.loginAuthService = loginAuthService;
        this.router = router;
        this.route = route;
        this.login = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (userlogin) {
        var _this = this;
        if (userlogin.valid) {
            this.loading = true; // validation in progress
            console.log("Form values :" + JSON.stringify(this.login));
            var user = { "userId": this.login.username, "password": this.login.password };
            //check for user authentication
            this.loginAuthService.isUserAuthenticated(user)
                .subscribe(function (authenticated) {
                _this.loading = false;
                console.log("res received authentication service :" + authenticated);
                if (authenticated) {
                    _this.authMessage = null;
                    //if auth success route according to the role
                    console.log("logged in role :" + _this.loginAuthService.getLoggedInRole());
                    if (_this.loginAuthService.getLoggedInRole() == "Mojani_Surveyor") {
                        console.log("inside mojani survey");
                        _this.router.navigateByUrl('/layoutApplication');
                    }
                    else if (_this.loginAuthService.getLoggedInRole() == "Mojani_Approver") {
                        console.log("Inside mojani approver");
                        _this.router.navigateByUrl('/approveSurveys');
                    }
                    else if (_this.loginAuthService.getLoggedInRole() == "Kaveri_Registrar") {
                        console.log("Inside Registration form");
                        _this.router.navigateByUrl('/registrationForm');
                    }
                    else if (_this.loginAuthService.getLoggedInRole() == "Kaveri_Approver") {
                        console.log("Inside Registration approver form");
                        _this.router.navigateByUrl('/approveRegistration');
                    }
                }
                else {
                    _this.authMessage = _this.loginAuthService.getAuthMessage();
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = "/*CSS to go here */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<a href='#' (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__ = __webpack_require__("./src/app/services/login-authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        this.authService.logoutUser();
        this.router.navigateByUrl('/Login');
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_authentication_service__["a" /* LoginAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "./src/app/models/LandRecord.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandRecord; });
/* unused harmony export GeoData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Owner; });
var LandRecord = /** @class */ (function () {
    function LandRecord() {
    }
    return LandRecord;
}());

var GeoData = /** @class */ (function () {
    function GeoData() {
    }
    return GeoData;
}());

var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
}());

//# sourceMappingURL=LandRecord.js.map

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div  align=\"center\" [ngStyle]=\"{'background-color':'#87b3d9','height':'40px'}\">\n  <h3 [ngStyle]=\"{'color':'#fff'}\">KAVERI- Registration Application</h3>\n</div>\n<div align=\"right\"><app-logout></app-logout></div>\n<div *ngIf =\"template==='form1';then registrationForm1 else registrationForm2\"></div>\n<ng-template #registrationForm1>\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">Search Criteria</h1>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <div class=\"col-md-3\">\n        <label for=\"pid\" class=\"control-label required\">PID</label><span style=\"color: red;font-size: 20px;\">*</span>\n        <input type=\"text\" id=\"pid\" name=\"pid\"  [(ngModel)]=\"pid\"  />\n      </div>\n      <div class=\"col-md-3\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)= \"search()\">Search</button>\n      </div>\n    </div>\n  </div>  \n</div>\n<!--Search results of the land records for Registration -->\n<div *ngIf= \"fetchComplete\" > \n   <form class=\"form-horizontal\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Survey Land Allotee Details</h1>\n      </div>\n      <div class=\"panel-body\"> \n          <div class=\"form-group\" *ngIf=\"!noSearchResultsSurvey\">\n          <div class=\"col-md-4\">\n            <label for=\"ownerName\" class=\"control-label\">Allottee Name</label>\n            <input type=\"text\" id=\"ownerName\" class=\"form-control\" name=\"ownerName\" [ngModel]=\"landRecordsMojani.ownerDetails.ownerName\" readonly>\n          </div>\n          <div class=\"col-md-4\">\n            <label for=\"aadharNo\" class=\"control-label\">Aadhar #</label>\n            <input type=\"text\" id=\"aadharNo\" class=\"form-control\" name=\"aadharNo\" [ngModel]=\"landRecordsMojani.ownerDetails.aadharNo\" readonly/>\n          </div>\n          <div class=\"col-md-4\">\n          <div> <label class=\"control-label\">Gender</label></div>\n            <label class=\"md-check radio-inline\">\n              <input type=\"radio\" value=\"M\" name=\"gender\" [ngModel]=\"landRecordsMojani.ownerDetails.gender\" disabled>Male\n            </label>\n            <label class=\"md-check radio-inline\">\n              <input type=\"radio\" value=\"F\" name=\"gender\" [ngModel]=\"landRecordsMojani.ownerDetails.gender\" disabled>Female\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!noSearchResultsSurvey\">\n          <div class=\"col-md-4\">\n            <label for=\"mobileNo\" class=\"control-label\">Mobile</label>\n            <input type=\"text\" id=\"mobileNo\" class=\"form-control\" name=\"mobileNo\" [ngModel]=\"landRecordsMojani.ownerDetails.mobileNo\" readonly/>\n          </div>\n          <div class=\"col-md-4\">\n            <label for=\"emailID\" class=\"control-label\">Email ID</label>\n            <input type=\"text\" id=\"emailID\" class=\"form-control\" name=\"emailID\" [ngModel]=\"landRecordsMojani.ownerDetails.emailID\" readonly />\n          </div>\n          <div class=\"col-md-4\">\n              <label for=\"mojaniApproved\" class=\"control-label\">Is Mojani Approved</label>\n              <input type=\"checkbox\" id=\"mojaniApproved\" name=\"mojaniApproved\" [ngModel]=\"landRecordsMojani.isMojaniApproved\" disabled />\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!noSearchResultsSurvey\">\n          <div class=\"col-md-12\">\n            <div><label for=\"ownerAddress\" class=\"control-label\">Allottee Address</label></div>\n            <input type=\"text\" id=\"ownerAddress\" class=\"form-control\" name=\"address\" [ngModel]=\"landRecordsMojani.ownerDetails.address\" readonly/>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf='noSearchResultsSurvey'>\n           <div class=\"col-md-12\">\n            <p style='color:red;' align='center'><strong>No matching results found !</strong></p>\n           </div>\n        </div>\n      </div>\n    </div>\n  </form> \n  <div  align=\"center\">\n    <h4><u><b>Transaction History</b></u></h4>\n  </div>\n  <table class=\"table table-striped table-hover\">\n  <thead>\n      <tr>\n          <th>Transaction ID </th>\n          <th>From Owner Name</th>\n          <th>From Owner Aadhaar No</th>\n          <th>From Owner Mobile No</th>\n          <th>To Owner Name</th>\n          <th>To Owner Aadhaar No</th>\n          <th>To Owner Mobile No</th>   \n          <th>Is Kaveri Approved</th>       \n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let land of landRecords\">\n          <td>{{land.txnID}}</td>\n          <td>{{land.ownerDetails.ownerName}}</td>\n          <td>{{land.ownerDetails.aadharNo}}</td>\n          <td>{{land.ownerDetails.mobileNo}}</td>\n          <td>{{land.newOwnerDetails.ownerName}}</td>\n          <td>{{land.newOwnerDetails.aadharNo}}</td>\n          <td>{{land.newOwnerDetails.mobileNo}}</td>  \n          <td><input type=\"checkbox\" name='kaveriApproval' [ngModel]='land.isKaveriApproved' disabled/></td>       \n      </tr>\n  </tbody>\n </table> \n <div *ngIf='noSearchResults' style='color:red;' align='center'><strong>No matching results found !</strong></div>\n <div align=\"right\">\n    <button class=\"btn btn-primary\" (click)= \"loadRegistrationForm()\" [disabled]=\"!transferEnabled\">Transfer Ownership</button>\n </div>\n</div>\n</ng-template> \n\n<!-- Tranfer ownership editable form -->\n<ng-template #registrationForm2>\n  <ng-container *ngIf=\"template==='form2';else applicationSuccess\">\n  <div class=\"applicationForm\">\n  <form class=\"form-horizontal\" [formGroup]=\"layoutForm\" (ngSubmit)=\"onSubmit()\">\n    <fieldset disabled>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('pid')\">\n            <label for=\"pid\" class=\"control-label required\">PID</label>\n            <input type=\"text\" id=\"pid\" class=\"form-control\" formControlName=\"pid\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('pid')\" errorMsg=\"PID is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('wardNo')\">\n            <label for=\"wardNo\" class=\"control-label required\">Ward #</label>\n            <input type=\"text\" id=\"wardNo\" class=\"form-control\" formControlName=\"wardNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('wardNo')\" errorMsg=\"Ward # is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('areaCode')\">\n            <label for=\"areaCode\" class=\"control-label required\">Area Code</label>\n            <input type=\"text\" id=\"areaCode\" class=\"form-control\" formControlName=\"areaCode\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('areaCode')\" errorMsg=\"Area code is mandatory\"></app-show-validation-error>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('siteNo')\">\n            <label for=\"siteNo\" class=\"control-label required\">Plot/Site #</label>\n            <input type=\"text\" id=\"siteNo\" class=\"form-control\" formControlName=\"siteNo\" />\n            <app-show-validation-error [displayError]=\"isFieldValid('siteNo')\" errorMsg=\"Plot/Site # is mandatory\"></app-show-validation-error>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Geographic Data</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"geoData\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.latitude')\">\n              <label for=\"latitude\" class=\"control-label required\">Latitude</label>\n              <input type=\"text\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.latitude')\" errorMsg=\"Latitude is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.longitude')\">\n              <label for=\"Longitude\" class=\"control-label required\">Longitude</label>\n              <input type=\"text\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\" (change)=\"setGeoCordinates()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.longitude')\" errorMsg=\"Longitude is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.length')\">\n              <label for=\"length\" class=\"control-label required\">Plot Length (ft.)</label>\n              <input type=\"text\" id=\"length\" class=\"form-control\" formControlName=\"length\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.length')\" errorMsg=\"Plot length is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('geoData.width')\">\n              <label for=\"width\" class=\"control-label required\">Plot Width (ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"width\" (change) = \"calculateTotalArea()\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.width')\" errorMsg=\"Plot width is mandatory\"></app-show-validation-error>\n            </div>\n            <div class=\"col-md-4\">\n              <label for=\"width\" class=\"control-label\">Total Plot Area (sq. ft.)</label>\n              <input type=\"text\" id=\"width\" class=\"form-control\" formControlName=\"totalArea\" readonly />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('geoData.address')\">\n              <label for=\"address\" class=\"control-label required\">Property Address</label>\n              <input type=\"text\" id=\"address\" class=\"form-control\" formControlName=\"address\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('geoData.address')\" errorMsg=\"Plot address is mandatory\"></app-show-validation-error>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"lat && long\">\n          <app-gmaps [lat]=\"lat\"  [lng]=\"long\"></app-gmaps>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Pre Mutation Sketch</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div>\n        <div class=\"col-md-4\" *ngIf=\"sketchURL!=null && sketchURL!=''\">\n        <a [href]='sketchURL' target = '_blank'>View Sketch</a>\n        </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Land Allottee Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"ownerDetails\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.ownerName')\">\n              <label for=\"ownerName\" class=\"control-label required\">Allottee Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"ownerName\" formControlName=\"ownerName\">\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.aadharNo')\">\n              <label for=\"aadharNo\" class=\"control-label required\">Aadhar #</label>\n              <input type=\"text\" id=\"aadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.gender')\">\n             <div> <label class=\"control-label required\">Gender</label></div>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"M\" formControlName=\"gender\">Male\n              </label>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"F\" formControlName=\"gender\">Female\n              </label>\n              <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n            </div>\n\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.mobileNo')\">\n                  <label for=\"mobileNo\" class=\"control-label required\">Mobile</label>\n                  <input type=\"text\" id=\"mobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n                </div>\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('ownerDetails.emailID')\">\n                  <label for=\"emailID\" class=\"control-label required\">Email ID</label>\n                  <input type=\"text\" id=\"emailID\" class=\"form-control\" formControlName=\"emailID\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('ownerDetails.address')\">\n                  <label for=\"ownerAddress\" class=\"control-label required\">Allottee Address</label>\n                  <input type=\"text\" id=\"ownerAddress\" class=\"form-control\" formControlName=\"address\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('ownerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n\n            </div>\n          </div>\n    </div>\n    </fieldset>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">New allotee Details</h1>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"newOwnerDetails\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.ownerName')\">\n              <label for=\"newownerName\" class=\"control-label required\">Allottee Name</label><span style=\"color: red;font-size: 20px;\">*</span>\n              <input type=\"text\" class=\"form-control\" id=\"newownerName\" formControlName=\"ownerName\">\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.ownerName')\" errorMsg=\"Property allotee Name is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.aadharNo')\">\n              <label for=\"newaadharNo\" class=\"control-label required\">Aadhar #</label><span style=\"color: red;font-size: 20px;\">*</span>\n              <input type=\"text\" id=\"newaadharNo\" class=\"form-control\" formControlName=\"aadharNo\" />\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.aadharNo')\" errorMsg=\"Aadhar # is mandatory\"></app-show-validation-error>\n            </div>\n\n            <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.gender')\">\n             <div> <label class=\"control-label required\">Gender</label><span style=\"color: red;font-size: 20px;\">*</span></div>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"M\" formControlName=\"gender\">Male\n              </label>\n              <label class=\"md-check radio-inline\">\n                <input type=\"radio\" value=\"F\" formControlName=\"gender\">Female\n              </label>\n              <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.gender')\" errorMsg=\"Gender is mandatory\"></app-show-validation-error>\n            </div>\n\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.mobileNo')\">\n                  <label for=\"newmobileNo\" class=\"control-label required\">Mobile</label><span style=\"color: red;font-size: 20px;\">*</span>\n                  <input type=\"text\" id=\"newmobileNo\" class=\"form-control\" formControlName=\"mobileNo\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.mobileNo')\" errorMsg=\"Mobile number is mandatory\"></app-show-validation-error>\n                </div>\n                <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('newOwnerDetails.emailID')\">\n                  <label for=\"newemailID\" class=\"control-label required\">Email ID</label><span style=\"color: red;font-size: 20px;\">*</span>\n                  <input type=\"text\" id=\"newemailID\" class=\"form-control\" formControlName=\"emailID\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.emailID')\" errorMsg=\"Email ID is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-md-12\" [ngClass]=\"displayFieldCss('newOwnerDetails.address')\">\n                  <label for=\"newownerAddress\" class=\"control-label required\">Allottee Address</label><span style=\"color: red;font-size: 20px;\">*</span>\n                  <input type=\"text\" id=\"newownerAddress\" class=\"form-control\" formControlName=\"address\" />\n                  <app-show-validation-error [displayError]=\"isFieldValid('newOwnerDetails.address')\" errorMsg=\"Allotee address is mandatory\"></app-show-validation-error>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1 class=\"panel-title\">Sale Details</h1>\n      </div>\n      <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <div class=\"col-md-4\" [ngClass]=\"displayFieldCss('saleRate')\">\n          <label for=\"saleRate\" class=\"control-label required\">Sale Rate</label><span style=\"color: red;font-size: 20px;\">*</span>\n          <input type=\"text\" id=\"saleRate\" class=\"form-control\" formControlName=\"saleRate\" />\n          <app-show-validation-error [displayError]=\"isFieldValid('saleRate')\" errorMsg=\"Sale Rate is mandatory\"></app-show-validation-error>\n        </div>\n      </div>\n      </div>\n    </div>\n\n    <div align=\"right\">\n      <button class=\"btn btn-danger\" (click) = \"back()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </form>\n</div>\n</ng-container>\n</ng-template>\n<ng-template #applicationSuccess>\n  <div class=\"alert alert-success\"> <strong>Success!</strong>Registration application has been submitted successfully ! The transaction ID for this record is <strong>{{landRecord.txnID}}</strong></div>\n  <div class=\"alert alert-info\">\n    Please click on <strong>Submit New</strong> to submit another registration application !\n  </div>\n  <div align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitNew()\">Submit New</button></div>\n</ng-template>"

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__ = __webpack_require__("./src/app/models/LandRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managelandrecords_service__ = __webpack_require__("./src/app/services/managelandrecords.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(formBuilder, manageLandRecordsService, router, route) {
        this.formBuilder = formBuilder;
        this.manageLandRecordsService = manageLandRecordsService;
        this.router = router;
        this.route = route;
        this.fetchComplete = false;
        this.template = "form1";
        this.noSearchResults = false;
        this.noSearchResultsSurvey = false;
        this.landRecord = new __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__["a" /* LandRecord */](); //initialize land record object
        this.landRecordsMojani = new __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__["a" /* LandRecord */]();
        this.transferEnabled = false;
        this.formData = new FormData();
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.search = function () {
        var _this = this;
        console.log("PID :" + this.pid);
        this.manageLandRecordsService.getLandRecordsMojaniByPid(this.pid)
            .subscribe(function (response) {
            console.log("res received from mojanibypid" + JSON.stringify(response));
            if (response != null) {
                _this.landRecordsMojani = response.landRecords;
                if (_this.landRecordsMojani != null) {
                    _this.noSearchResultsSurvey = false;
                    if (_this.landRecordsMojani.isMojaniApproved == true)
                        _this.transferEnabled = true;
                    else
                        _this.transferEnabled = false;
                }
                else {
                    _this.noSearchResultsSurvey = true;
                    _this.transferEnabled = false;
                }
                console.log("search result survey" + _this.noSearchResultsSurvey);
            }
        });
        this.manageLandRecordsService.getLandRecordsKaveriByPid(this.pid)
            .subscribe(function (response) {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response != null) {
                _this.landRecords = response.landRecords;
                if (_this.landRecords != null && _this.landRecords.length > 0) {
                    _this.noSearchResults = false;
                    if (_this.landRecords[0].isKaveriApproved == true)
                        _this.transferEnabled = true;
                    else
                        _this.transferEnabled = false;
                }
                else {
                    _this.noSearchResults = true;
                }
                _this.fetchComplete = true;
            }
        });
    };
    RegistrationFormComponent.prototype.loadRegistrationForm = function () {
        this.template = "form2";
        this.loadForm();
    };
    RegistrationFormComponent.prototype.loadForm = function () {
        var _this = this;
        this.lat = null;
        this.long = null;
        this.layoutForm = this.formBuilder.group({
            TimeStamp: [null],
            pid: [''],
            wardNo: [null],
            areaCode: [null],
            siteNo: [null],
            geoData: this.formBuilder.group({
                latitude: [null],
                longitude: [null],
                length: [null],
                width: [null],
                totalArea: '',
                address: [null]
            }),
            preMutationSketch: [null],
            ownerDetails: this.formBuilder.group({
                ownerName: [null],
                gender: [null],
                aadharNo: [null],
                mobileNo: [null],
                emailID: [null],
                address: [null]
            }),
            newOwnerDetails: this.formBuilder.group({
                ownerName: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z\\s]*')]],
                gender: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                aadharNo: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{12}')]],
                mobileNo: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{10}')]],
                emailID: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
                address: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            }),
            saleRate: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        if (this.noSearchResults == false) {
            this.manageLandRecordsService.getLandRecordsKaveriByPid(this.pid)
                .subscribe(function (response) {
                console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
                if (response != null && response.success) {
                    _this.landRecord = response.landRecords[response.landRecords.length - 1];
                    _this.landRecord.ownerDetails = _this.landRecord.newOwnerDetails;
                    _this.landRecord.newOwnerDetails = new __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__["b" /* Owner */]();
                    console.log("landRecord object received:" + JSON.stringify(_this.landRecord));
                    if (response.landRecords[0].sketchURL != null && response.landRecords[0].sketchURL != "") {
                        _this.sketchURL = response.landRecords[0].sketchURL;
                    }
                    _this.layoutForm.patchValue(_this.landRecord);
                    _this.setGeoCordinates();
                }
            });
        }
        else if (this.noSearchResultsSurvey == false) {
            this.manageLandRecordsService.getLandRecordsMojaniByPid(this.pid)
                .subscribe(function (response) {
                console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
                if (response != null && response.success) {
                    _this.landRecord = response.landRecords;
                    _this.landRecord.newOwnerDetails = _this.landRecord.ownerDetails;
                    _this.landRecord.ownerDetails = new __WEBPACK_IMPORTED_MODULE_1__models_LandRecord__["b" /* Owner */]();
                    _this.landRecord.ownerDetails.aadharNo = 0;
                    _this.landRecord.ownerDetails.address = "NA";
                    _this.landRecord.ownerDetails.emailID = "NA";
                    _this.landRecord.ownerDetails.mobileNo = 0;
                    _this.landRecord.ownerDetails.ownerName = "Land Authority";
                    console.log("landRecord object received:" + _this.landRecord);
                    if (response.sketchURL != null && response.sketchURL != "") {
                        _this.sketchURL = response.sketchURL;
                    }
                    _this.layoutForm.patchValue(_this.landRecord);
                    _this.setGeoCordinates();
                }
            });
        }
    };
    RegistrationFormComponent.prototype.setGeoCordinates = function () {
        this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
        this.long = parseFloat(this.layoutForm.get('geoData.longitude').value);
    };
    RegistrationFormComponent.prototype.IDGenerator = function () {
        var length = 8;
        var timestamp = +new Date;
        var _getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var id = "";
        var ts = timestamp.toString();
        var parts = ts.split("").reverse();
        for (var i = 0; i < length; ++i) {
            var index = _getRandomInt(0, parts.length - 1);
            id += parts[index];
        }
        return id;
    };
    RegistrationFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.layoutForm.valid) {
            console.log('form valid success');
            //sync the form model with the data model
            this.landRecord = this.layoutForm.value;
            this.landRecord.TimeStamp = new Date().getTime();
            this.landRecord.txnID = "TXN" + this.IDGenerator();
            this.landRecord.isKaveriApproved = false;
            this.landRecord.sketchURL = this.sketchURL;
            console.log("pid generated: " + this.landRecord.pid);
            console.log("txn id: " + this.landRecord.txnID);
            console.log("landrecord: " + JSON.stringify(this.landRecord));
            this.manageLandRecordsService.addLandRecordKaveri(this.landRecord)
                .subscribe(function (response) {
                console.log("res received addLandRecord service" + JSON.stringify(response));
                if (response != null && response.success) {
                    _this.template = "form3";
                }
            });
        }
        else {
            this.validateAllFormFields(this.layoutForm);
        }
    };
    RegistrationFormComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RegistrationFormComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    RegistrationFormComponent.prototype.isFieldValid = function (field) {
        return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
    };
    RegistrationFormComponent.prototype.submitNew = function () {
        this.fetchComplete = false;
        this.template = "form1";
        this.pid = null;
        this.transferEnabled = false;
    };
    RegistrationFormComponent.prototype.back = function () {
        this.template = "form1";
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-registration-form',
            template: __webpack_require__("./src/app/registration-form/registration-form.component.html"),
            styles: [__webpack_require__("./src/app/registration-form/registration-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_managelandrecords_service__["a" /* ManageLandRecordsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_managelandrecords_service__["a" /* ManageLandRecordsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ "./src/app/services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadService = /** @class */ (function () {
    function FileUploadService(http) {
        this.http = http;
    }
    FileUploadService.prototype.uploadFiles = function (formData) {
        console.log("Inside File upload service");
        return this.http.post('/uploads/fileUpload', formData)
            .map(function (files) { return files.json(); });
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], FileUploadService);
    return FileUploadService;
    var _a;
}());

//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "./src/app/services/login-authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginAuthenticationService = /** @class */ (function () {
    function LoginAuthenticationService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    // API: POST /UserAuthentication
    LoginAuthenticationService.prototype.isUserAuthenticated = function (userInfo) {
        var _this = this;
        console.log("Inside isUserAuthenticated function in authentication service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login/api/authentication', JSON.stringify(userInfo), { headers: headers })
            .map(function (res) {
            var jsonRes = res.json();
            if (jsonRes.authSuccess) {
                _this.isLoggedIn = true;
                _this.loggedInRole = jsonRes.role;
                _this.authMessage = jsonRes.message;
                return true;
            }
            else {
                _this.isLoggedIn = false;
                _this.authMessage = jsonRes.message;
                return false;
            }
        });
    };
    LoginAuthenticationService.prototype.isUserLoggedIn = function () {
        return this.isLoggedIn;
    };
    LoginAuthenticationService.prototype.logoutUser = function () {
        this.isLoggedIn = false;
    };
    LoginAuthenticationService.prototype.getLoggedInRole = function () {
        return this.loggedInRole;
    };
    LoginAuthenticationService.prototype.getAuthMessage = function () {
        return this.authMessage;
    };
    LoginAuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], LoginAuthenticationService);
    return LoginAuthenticationService;
    var _a;
}());

//# sourceMappingURL=login-authentication.service.js.map

/***/ }),

/***/ "./src/app/services/managelandrecords.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLandRecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLandRecordsService = /** @class */ (function () {
    function ManageLandRecordsService(http) {
        this.http = http;
    }
    // API: GET /landRecords Mojani/:pId
    ManageLandRecordsService.prototype.getLandRecordsMojaniByPid = function (pId) {
        console.log("Inside getLandRecordsMojaniByPid method in manageLandRecord service");
        return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByPid/' + pId)
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords Kaveri/:pId
    ManageLandRecordsService.prototype.getLandRecordsKaveriByPid = function (pId) {
        console.log("Inside getLandRecordsKaveriByPid method in manageLandRecord service");
        return this.http.get('/manageKaveriRecords/api/getLandRecordsKaveriByPid/' + pId)
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords/:Ward
    ManageLandRecordsService.prototype.getLandRecordsKaveriByWard = function (wardNo) {
        console.log("Inside getLandRecordsKaveriBywardno method in manageLandRecord service");
        return this.http.get('/manageKaveriRecords/api/getLandRecordsKaveriByWard/' + wardNo)
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecords/landRecord
    ManageLandRecordsService.prototype.addLandRecordKaveri = function (landRecord) {
        console.log("Inside addLandRecordKaveri method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageKaveriRecords/api/addLandRecordKaveri', JSON.stringify(landRecord), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // API: POST /landRecords/landRecord[]
    ManageLandRecordsService.prototype.updateKaveriApprovedRecords = function (landRecords) {
        console.log("Inside updateMojaniApprovedRecords method in manageLandRecord service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/manageKaveriRecords/api/updateKaveriApprovedRecords', JSON.stringify(landRecords), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // API: GET /landRecords Kaveri/:pId
    ManageLandRecordsService.prototype.getLandRecordsKaveriBytxnId = function (txnID) {
        console.log("Inside getLandRecordsKaveriBytxnId method in manageLandRecord service");
        return this.http.get('/manageKaveriRecords/api/getLandRecordsKaveriBytxnId/' + txnID)
            .map(function (res) { return res.json(); });
    };
    ManageLandRecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ManageLandRecordsService);
    return ManageLandRecordsService;
    var _a;
}());

//# sourceMappingURL=managelandrecords.service.js.map

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.css":
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n\n.fix-error-icon {\n  top: 27px;\n}\n\n.required:after {\n  content: \" *\";\n}\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{ errorMsg }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/show-validation-error/show-validation-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowValidationErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowValidationErrorComponent = /** @class */ (function () {
    function ShowValidationErrorComponent() {
    }
    ShowValidationErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ShowValidationErrorComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ShowValidationErrorComponent.prototype, "displayError", void 0);
    ShowValidationErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-show-validation-error',
            template: __webpack_require__("./src/app/show-validation-error/show-validation-error.component.html"),
            styles: [__webpack_require__("./src/app/show-validation-error/show-validation-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowValidationErrorComponent);
    return ShowValidationErrorComponent;
}());

//# sourceMappingURL=show-validation-error.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map