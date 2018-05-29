webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <!-- <h1> Hi {{title}}</h1> -->\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_appointment_appointment_component__ = __webpack_require__("../../../../../src/app/components/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_appointment_details_appointment_details_component__ = __webpack_require__("../../../../../src/app/components/appointment-details/appointment-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_appointment_appointment_component__["a" /* AppointmentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_appointment_details_appointment_details_component__["a" /* AppointmentDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_11__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_12__services_appointment_service__["a" /* AppointmentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_appointment_appointment_component__ = __webpack_require__("../../../../../src/app/components/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_appointment_details_appointment_details_component__ = __webpack_require__("../../../../../src/app/components/appointment-details/appointment-details.component.ts");






var AppRoutes = [
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_0__components_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: 'appointments',
        component: __WEBPACK_IMPORTED_MODULE_4__components_appointment_appointment_component__["a" /* AppointmentComponent */]
    },
    {
        path: 'appointments/:appt_id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_appointment_details_appointment_details_component__["a" /* AppointmentDetailsComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/class/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var Appointment = (function () {
    function Appointment() {
    }
    return Appointment;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ "../../../../../src/app/components/appointment-details/appointment-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/appointment-details/appointment-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.isLoggedIn\" class='container pad-zero'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-xs-12 mt48' >\n        <h3> You are not logged in!</h3>\n        <p> Please <a routerLink='/login'> click here to Login </a> in order to continue.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf='show_error' class='col-md-12'>\n  <div class='col-md-4 offset-md-4 pad-zero'>\n    <div class='alert alert-danger alert-dismissble' role='alert'>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n        <strong>Warning!</strong> {{err_text}}\n    </div>\n  </div>\n</div>\n\n<div *ngIf='show_alert' class='col-md-12'>\n  <div class='col-md-4 offset-4 pad-zero'>\n    <div class='alert alert-success alert-dismissble' role='alert'>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n        <strong>Success!</strong> Your appointment has been edited.\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf='authService.isLoggedIn'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-md-6 pad-zero'>\n\n        <div class='col-md-12 pad-zero'>\n          <h1> {{ appointment.title }} </h1>\n          <h3 class='mt24'> {{ authService.getLoggedUserFullName() }} & {{ appointment.with_person}}</h3>\n          <p class='mt24'> Must be there on: <strong>{{ appointment.appointment_date.substring(0, 10) }} </strong></p>\n          <p> Important: <strong> {{ appointment.notes}} </strong></p>\n        </div>\n        <div class='col-md-12 mt48 pad-zero'>\n          <button class='btn btn-warning btn-large' (click)='toggleEditForm()'>Edit Appointment</button>\n          <button class='btn btn-danger btn-large' (click)=\"toggleDelete()\"> Delete </button>\n        </div>\n      </div>\n      <div class='col-md-4 pad-zero'>\n        <div *ngIf='show_editForm'>\n          <form #editApptForm=\"ngForm\" (ngSubmit)=\"editAppt(editApptForm.value)\">\n            <div class='form-group'>\n              <label>Title</label>\n              <input type='text' class='form-control' name='appt_title' [(ngModel)]=\"appointment.title\" required placeholder='Lunch Meeting at Plaza Hotel'/>\n            </div>\n            <div class='form-group'>\n              <label>With</label>\n              <input type='text' class='form-control' name='appt_with_person' [(ngModel)]=\"appointment.with_person\" required placeholder = \"Henry John\" />\n            </div>\n            <div class='form-group'>\n              <label>Date</label>\n              <input type='date' class='form-control' name='appt_date' [(ngModel)]=\"appointment.appointment_date\" required />\n            </div>\n            <div class='form-group'>\n              <label>Notes</label>\n              <input type='text' class='form-control' name='appt_notes' [(ngModel)]=\"appointment.notes\" required placeholder = \"Bring the papers he asked to see\" />\n            </div>\n            <button type='submit' class='btn btn-success'> Edit</button>\n            <button class='btn btn-default' (click)='toggleEditForm()'>Cancel</button>\n          </form>\n        </div>\n\n        <div class='mt80' *ngIf=\"show_delete\">\n          <h5 class='mt24'> Remove appointment? </h5>\n          <h5 class='mt24'>\n            {{appointment.title}} with {{ appointment.with_person}} on <br />{{ appointment.appointment_date.substring(0, 10)}}\n          </h5>\n          <div class='mt64'>\n            <button class='btn btn-success btn-large' (click)=\"deleteAppt()\"> Yes, Remove This</button>\n            <button class='btn btn-default btn-large' (click)=\"toggleDelete()\"> Cancel</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/appointment-details/appointment-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentDetailsComponent = (function () {
    function AppointmentDetailsComponent(appointmentService, authService, activatedRoute, router) {
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appt_id = this.activatedRoute.snapshot.paramMap.get('appt_id');
        this.user_id = this.authService.getLoggedUserID();
        this.show_editForm = false;
        this.show_alert = false;
        this.show_error = false;
        this.show_delete = false;
        this.err_text = "";
    }
    AppointmentDetailsComponent.prototype.resetShowError = function () {
        this.show_error = false;
        this.show_alert = false;
    };
    AppointmentDetailsComponent.prototype.toggleEditForm = function () {
        this.show_delete = false;
        this.show_editForm = !this.show_editForm;
        this.getAppointment();
    };
    AppointmentDetailsComponent.prototype.toggleDelete = function () {
        this.show_editForm = false;
        this.show_delete = !this.show_delete;
    };
    AppointmentDetailsComponent.prototype.editAppt = function (editForm) {
        var _this = this;
        if (!editForm.appt_title || !editForm.appt_with_person || !editForm.appt_date || !editForm.appt_notes) {
            this.show_error = true;
            this.err_text = "Please fill all values";
            this.getAppointment();
            return;
        }
        this.appointmentService.editApptByIdOfLoggedUser(this.user_id, this.appt_id, this.appointment)
            .then(function (data) {
            _this.appointment = data;
            _this.show_editForm = false;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AppointmentDetailsComponent.prototype.getAppointment = function () {
        var _this = this;
        this.appointmentService.getApptByIdOfLoggedUser(this.user_id, this.appt_id)
            .then(function (data) {
            _this.appointment = data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AppointmentDetailsComponent.prototype.deleteAppt = function () {
        var _this = this;
        this.appointmentService.deleteAppByIdofLoggedUser(this.user_id, this.appt_id)
            .then(function () {
            _this.router.navigate(['/appointments']);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AppointmentDetailsComponent.prototype.ngOnInit = function () {
        this.getAppointment();
    };
    return AppointmentDetailsComponent;
}());
AppointmentDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appointment-details',
        template: __webpack_require__("../../../../../src/app/components/appointment-details/appointment-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/appointment-details/appointment-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppointmentDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=appointment-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.isLoggedIn\" class='container pad-zero'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-xs-12 mt48'>\n        <h3> You are not logged in!</h3>\n        <p> Please <a routerLink='/login'> click here to Login </a> in order to continue.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf='authService.isLoggedIn'>\n  <div class='mt24'*ngIf='show_error' class='col-md-12'>\n    <div class='col-md-4 offset-md-4 pad-zero'>\n      <div class='alert alert-danger alert-dismissble' role='alert'>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n          <strong>Warning!</strong> {{err_text}}\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf='show_alert' class='col-md-12'>\n    <div class='col-md-4 offset-md-4 pad-zero'>\n      <div class='alert alert-success alert-dismissble' role='alert'>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n          <strong>Success!</strong> Your appointment has been created.\n      </div>\n    </div>\n  </div>\n\n  <div class='container pad-zero'>\n    <div class='jumbotron'>\n      <div class='row'>\n        <div class='col-sm-4 ' *ngIf='!show_form'>\n          <h3 class='mb24'> My Appointments</h3>\n          <button class='btn btn-large btn-success' (click)='toggleShowForm()'> Add Appointment</button>\n        </div>\n        <div class='col-sm-4 ' *ngIf='show_form'>\n          <h3 class='mb24'> Create Appointment</h3>\n          <form #createApptForm=\"ngForm\" (ngSubmit)=\"createAppointment(createApptForm.value); createApptForm.reset()\">\n            <div class='form-group'>\n              <label>Title</label>\n              <input type='text' class='form-control' name='appt_title' ngModel required placeholder='Lunch Meeting at Plaza Hotel'/>\n            </div>\n            <div class='form-group'>\n              <label>With</label>\n              <input type='text' class='form-control' name='appt_with_person' ngModel required placeholder = \"Henry John\" />\n            </div>\n            <div class='form-group'>\n              <label>Date</label>\n              <input type='date' class='form-control' name='appt_date' ngModel required />\n            </div>\n            <div class='form-group'>\n              <label>Notes</label>\n              <input type='text' class='form-control' name='appt_notes' ngModel required placeholder = \"Bring the papers he asked to see\" />\n            </div>\n            <button type='submit' class='btn btn-success'> Submit</button>\n            <button class='btn btn-default' (click)='toggleShowForm()'>Cancel</button>\n          </form>\n        </div>\n\n        <div class='col-sm-6 offset-sm-1 mt24'>\n          <div *ngFor=\"let appt of appointments\" class=\"col-xs-12 col-sm-12\">\n            <h3> <a href=\"appointments/{{ appt._id}}\"> {{appt.title}} </a> </h3>\n            <p> Appt On: <strong>{{ appt.appointment_date.substring(0, 10)}}</strong> with <strong>{{ appt.with_person}}</strong></p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_appointment__ = __webpack_require__("../../../../../src/app/class/appointment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentComponent = (function () {
    function AppointmentComponent(appointmentService, authService) {
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.show_alert = false;
        this.show_error = false;
        this.err_text = "";
        this.show_form = false;
    }
    AppointmentComponent.prototype.resetShowError = function () {
        this.show_error = false;
        this.show_alert = false;
    };
    AppointmentComponent.prototype.toggleShowForm = function () {
        this.show_form = !this.show_form;
    };
    AppointmentComponent.prototype.createAppointment = function (theForm) {
        var _this = this;
        if (!theForm.appt_title || !theForm.appt_with_person || !theForm.appt_date || !theForm.appt_notes) {
            this.show_error = true;
            this.err_text = "Please fill all values";
            return;
        }
        var appointment = new __WEBPACK_IMPORTED_MODULE_3__class_appointment__["a" /* Appointment */]();
        appointment.title = theForm.appt_title;
        appointment.with_person = theForm.appt_with_person;
        appointment.appointment_date = theForm.appt_date;
        appointment.notes = theForm.appt_notes;
        appointment.user_id = this.authService.getLoggedUserID();
        this.appointmentService.createAppointment(appointment)
            .then(function (appt) {
            _this.show_alert = true;
            _this.appointments.push(appt);
            _this.show_form = false;
        })
            .catch(function (err) {
            console.log("APPT COMP ", err);
        });
    };
    AppointmentComponent.prototype.getUserAppointments = function () {
        var _this = this;
        var user_id = this.authService.getLoggedUserID();
        this.appointmentService.getAppointmentsOfLoggedUser(user_id)
            .then(function (data) {
            _this.appointments = data;
            // console.log("APP COMP ", data);
        })
            .catch(function (err) { return console.log(err); });
    };
    AppointmentComponent.prototype.ngOnInit = function () {
        // this.appointmentService.test()
        // .then( (app) => {
        //   console.log(app)
        // })
        // .catch(err => console.log(err));
        this.getUserAppointments();
    };
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appointment',
        template: __webpack_require__("../../../../../src/app/components/appointment/appointment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/appointment/appointment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _b || Object])
], AppointmentComponent);

var _a, _b;
//# sourceMappingURL=appointment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container pad-zero'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-md-6'>\n        <h3> Appointments Manager App</h3>\n        <p class='mt48'> App made with MEAN Stack</p>\n        <p> Featuring Rest API, CRUD, JWT, </p>\n        <p> Backend Express Rest API Server hosted at Heroku</p>\n        <p> Non-Rel DB Hosted at MLAB</p>\n        <p> Frontend ngSPA served at Firebase</p>\n        <p class='mt48'> Created By: <span class='home_span_me'> <strong>BurningRaven06</strong></span></p>\n      </div>\n      <div class='col-md-3 offset-2'>\n        <div class='mt48'>\n          <img src='assets/images/clipboard.png' title='MEAN App'/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.isLoggedIn\">\n  <div *ngIf='show_error' class='col-md-12'>\n    <div class='col-md-4 offset-md-4 pad-zero'>\n      <div class='alert alert-danger alert-dismissble' role='alert'>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n          <strong>Warning!</strong> {{err_text}}\n      </div>\n    </div>\n  </div>\n\n  <div class='container pad-zero'>\n    <div class='jumbotron'>\n      <div class='row'>\n        <div class='col-xs-12 col-sm-4 offset-4 mt48 '>\n          <h3 class='text-center mb24'> Login</h3>\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n            <div class='form-group'>\n              <label>Email</label>\n              <input type='email' class='form-control' name='user_email' ngModel required placeholder='name@example.com'/>\n            </div>\n            <div class='form-group'>\n              <label>Password</label>\n              <input type='password' class='form-control' name='user_password' ngModel required placeholder = \"******\" />\n            </div>\n            <button type='submit' class='btn btn-success btn-large btn-block'> Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class='container pad-zero'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-xs-12 mt48' *ngIf=\"authService.isLoggedIn\">\n        <h3> You are already logged in as {{ authService.getLoggedUserEmail()}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.show_error = false;
        this.err_text = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.resetShowError = function () {
        this.show_error = false;
    };
    LoginComponent.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    LoginComponent.prototype.loginUser = function (form) {
        var _this = this;
        if (!form.user_email || !form.user_password) {
            this.show_error = true;
            this.err_text = "Please fill all values";
            return;
        }
        if (!this.validateEmail(form.user_email)) {
            this.show_error = true;
            this.err_text = "Please use valid Email";
            return;
        }
        var user = {
            email: form.user_email,
            password: form.user_password,
        };
        this.authService.authenticateUser(user)
            .then(function () {
            if (_this.authService.isLoggedIn) {
                _this.router.navigate(['/appointments']);
            }
            ;
        })
            .catch(function (err) {
            _this.show_error = true;
            _this.err_text = "Invalid Credentials";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">ApptManager</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"/login\">Sign In</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Sign Up</a>\n      </li>\n      <li class='nav-item' *ngIf=\"authService.isLoggedIn\">\n        <a class='nav-link' routerLink='/appointments'>Appointments</a>\n      </li>\n      <li class='nav-item' *ngIf=\"authService.isLoggedIn\">\n        <a class='nav-link' routerLink='/logout'>Sign Out</a>\n      </li>\n    </ul>\n    <span class=\"navbar-text\"  *ngIf=\"authService.isLoggedIn\">\n      {{ authService.getLoggedUserFullName() }}\n    </span>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.isLoggedIn\">\n  <div *ngIf='show_alert' class='col-md-12'>\n    <div class='col-md-4 offset-md-4 pad-zero'>\n      <div class='alert alert-success alert-dismissble' role='alert'>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <strong>Success!</strong> Your account has been created.\n          <p> Click <a routerLink='/login'>here</a> to login with your account. </p>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf='show_error' class='col-md-12'>\n    <div class='col-md-4 offset-md-4 pad-zero'>\n      <div class='alert alert-danger alert-dismissble' role='alert'>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"resetShowError()\"><span aria-hidden=\"true\">&times;</span></button>\n          <strong>Warning!</strong> {{err_text}}\n      </div>\n    </div>\n  </div>\n\n  <div class='container pad-zero'>\n    <div class='jumbotron'>\n      <div class='row'>\n        <div class='col-xs-12 col-sm-5 '>\n          <h3 class='mb24'> Signup</h3>\n          <form #signupForm=\"ngForm\" (ngSubmit)=\"signupUser(signupForm.value)\">\n            <div class='form-group'>\n              <label>Name</label>\n              <input type='text' class='form-control' name='user_fullname' ngModel required placeholder='Toufiq AppTestUser' />\n            </div>\n            <div class='form-group'>\n              <label>Email</label>\n              <input type='email' class='form-control' name='user_email' ngModel required placeholder='name@example.com'/>\n            </div>\n            <div class='form-group'>\n              <label>Password</label>\n              <input type='password' class='form-control' name='user_password' ngModel required placeholder = \"******\" />\n            </div>\n            <div class='form-group'>\n              <label>Confirm</label>\n              <input type='password' class='form-control' name='user_password_confirm' ngModel required placeholder = \"******\" />\n            </div>\n            <button type='submit' class='btn btn-success'> Submit</button>\n          </form>\n        </div>\n        <div class='col-xs-12 col-sm-4 offset-2 mt80 '>\n          <img src='assets/images/account.png' />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class='container pad-zero'>\n  <div class='jumbotron'>\n    <div class='row'>\n      <div class='col-xs-12 mt48' *ngIf=\"authService.isLoggedIn\">\n        <h3> You are already logged in as {{ authService.getLoggedUserEmail()}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(signupService, authService) {
        this.signupService = signupService;
        this.authService = authService;
        this.show_alert = false;
        this.show_error = false;
        this.err_text = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.resetShowError = function () {
        this.show_error = false;
        this.show_alert = false;
    };
    SignupComponent.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    SignupComponent.prototype.validatePassMatch = function (pass1, pass2) {
        return (pass1 === pass2);
    };
    SignupComponent.prototype.signupUser = function (form) {
        var _this = this;
        if (!form.user_email || !form.user_password || !form.user_fullname || !form.user_password_confirm) {
            this.show_error = true;
            this.err_text = "Please fill all values";
            return;
        }
        if (!this.validateEmail(form.user_email)) {
            this.show_error = true;
            this.err_text = "Please use valid Email";
            return;
        }
        if (!this.validatePassMatch(form.user_password, form.user_password_confirm)) {
            this.show_error = true;
            this.err_text = "Passwords don't Match!";
            return;
        }
        var newUser = {
            email: form.user_email,
            password: form.user_password,
            fullname: form.user_fullname,
        };
        this.signupService.createUser(newUser).then(function (data) {
            if (data.user_created) {
                _this.show_alert = true;
                _this.show_error = false;
            }
            else {
                _this.err_text = newUser.email + " has been taken";
                _this.show_error = true;
            }
        }).catch(function (err) { return console.log("This is here ", err); });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_signup_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_signup_service__["a" /* SignupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': "BEARER " + localStorage.getItem('token') });
    }
    AppointmentService.prototype.catchError = function (error) {
        console.error('Error: ', error);
        // return Promise.reject(error.message);
        return error;
    };
    // test(): Promise<any> {
    //   let endpoint = `${environment.BASEAPIURL}/appointments/test`;
    //   return this.http
    //   .get(endpoint, {headers: this.headerOptions})
    //   .toPromise()
    //   .then(res => res.json())
    //   .catch(this.catchError);
    //
    // }
    AppointmentService.prototype.createAppointment = function (appt) {
        // let endpoint = 'https://meanjwtrstcrd.herokuapp.com/api/appointments/create';
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/appointments/create";
        return this.http
            .post(endpoint, JSON.stringify(appt), { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json().appointment; })
            .catch(this.catchError);
    };
    AppointmentService.prototype.getAppointmentsOfLoggedUser = function (user_id) {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/appointments/" + user_id + "/all";
        // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/all`;
        return this.http
            .get(endpoint, { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json().appointments; })
            .catch(this.catchError);
    };
    AppointmentService.prototype.getApptByIdOfLoggedUser = function (user_id, appt_id) {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/appointments/" + user_id + "/" + appt_id;
        // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;
        return this.http
            .get(endpoint, { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json().appointment; })
            .catch(this.catchError);
    };
    AppointmentService.prototype.editApptByIdOfLoggedUser = function (user_id, appt_id, appt) {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/appointments/" + user_id + "/" + appt_id;
        // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;
        return this.http
            .put(endpoint, JSON.stringify(appt), { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json().appointment; })
            .catch(this.catchError);
    };
    AppointmentService.prototype.deleteAppByIdofLoggedUser = function (user_id, appt_id) {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/appointments/" + user_id + "/" + appt_id;
        // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;
        return this.http
            .delete(endpoint, { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppointmentService);

var _a;
//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticateService = (function () {
    function AuthenticateService(http) {
        this.http = http;
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AuthenticateService.prototype.catchError = function (error) {
        console.error('Error: ', error);
        return Promise.reject(error.message);
        // return error;
    };
    AuthenticateService.prototype.setSession = function (authResult) {
        var expiresAt = __WEBPACK_IMPORTED_MODULE_4_moment__().add(authResult.expiresIn, 'second');
        localStorage.setItem('token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    };
    AuthenticateService.prototype.setUserInfo = function (token) {
        localStorage.setItem('user_fullname', token.name);
        localStorage.setItem('user_email', token.email);
        localStorage.setItem('user_id', token.user_id);
    };
    AuthenticateService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("user_fullname");
        localStorage.removeItem("user_email");
    };
    Object.defineProperty(AuthenticateService.prototype, "isLoggedIn", {
        get: function () {
            return !!localStorage.getItem("token");
        },
        enumerable: true,
        configurable: true
    });
    AuthenticateService.prototype.getLoggedUserID = function () {
        return localStorage.getItem('user_id');
    };
    AuthenticateService.prototype.getLoggedUserFullName = function () {
        return localStorage.getItem('user_fullname');
    };
    AuthenticateService.prototype.getLoggedUserEmail = function () {
        return localStorage.getItem('user_email');
    };
    AuthenticateService.prototype.decodeToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthenticateService.prototype.authenticateUser = function (user) {
        var _this = this;
        // let endpoint = `${environment.BASEAPIURL}/users/authenticate`;
        var endpoint = 'https://meanjwtrstcrd.herokuapp.com/api/users/authenticate';
        return this.http
            .post(endpoint, JSON.stringify(user), { headers: this.headerOptions })
            .toPromise()
            .then(function (res) {
            var decodedToken = _this.decodeToken(res.json().token);
            _this.setUserInfo(decodedToken);
            _this.setSession(res.json());
        })
            .catch(this.catchError);
    };
    return AuthenticateService;
}());
AuthenticateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticateService);

var _a;
//# sourceMappingURL=authenticate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = (function () {
    function SignupService(http) {
        this.http = http;
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SignupService.prototype.catchError = function (error) {
        console.error('Error: ', error);
        // return Promise.reject(error.message);
        return error;
    };
    SignupService.prototype.createUser = function (user) {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEAPIURL + "/users/signup";
        // let endpoint = 'https://meanjwtrstcrd.herokuapp.com/api/users/signup';
        return this.http
            .post(endpoint, JSON.stringify(user), { headers: this.headerOptions })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    return SignupService;
}());
SignupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SignupService);

var _a;
//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEAPIURL: 'https://meanjwtrstcrd.herokuapp.com/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map