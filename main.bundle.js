webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!-- <ng-progress></ng-progress> -->\n<div class=\"mainWrap\">\n\n\t<!-- HEADER -->\n\t<header class=\"mainHeader\">\n\t\t<nav class=\"mainNav\">\n\t\t\t<section class=\"container\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<ng-container>\n\t\t\t\t\t<li *ngFor=\"let m of menus\">\n\t\t\t\t\t\t<a [routerLink]=\"[m.href]\"><i class=\"fa\"></i>{{m.text}}</a>\n\t\t\t\t\t</li>\t\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t\t</section>\n\t\t</nav>\n\t</header>\n\n\t<!-- MAIN BODY -->\n\t<section class=\"mainBody\">\n\t\t<section class=\"container mainRight\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</section>\n\t</section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menus = [];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOAD_CFIG */
/* unused harmony export ROUTING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comps_home_home_component__ = __webpack_require__("../../../../../src/app/comps/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__comps_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/comps/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comps_log_log_component__ = __webpack_require__("../../../../../src/app/comps/log/log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_config_ctrl__ = __webpack_require__("../../../../../src/app/providers/config.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_excel_ctrl__ = __webpack_require__("../../../../../src/app/providers/excel.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_kpi_ctrl__ = __webpack_require__("../../../../../src/app/providers/kpi.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_toast_ctrl__ = __webpack_require__("../../../../../src/app/providers/toast.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_intercep_ctrl__ = __webpack_require__("../../../../../src/app/providers/intercep.ctrl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function LOAD_CFIG(cfig) {
    return function () { return cfig.load().catch(function (msg) { return console.error(msg); }); };
}
var ROUTING = [
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_13__comps_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__comps_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__comps_dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__comps_log_log_component__["a" /* LogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(ROUTING, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_11_ngx_toastr__["a" /* ToastrModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dialog__["a" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__providers_intercep_ctrl__["a" /* Interceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_16__providers_config_ctrl__["a" /* AppConfig */], useClass: __WEBPACK_IMPORTED_MODULE_16__providers_config_ctrl__["a" /* AppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* APP_INITIALIZER */], useFactory: LOAD_CFIG, deps: [__WEBPACK_IMPORTED_MODULE_16__providers_config_ctrl__["a" /* AppConfig */]], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_17__providers_excel_ctrl__["a" /* ExcelController */], useClass: __WEBPACK_IMPORTED_MODULE_17__providers_excel_ctrl__["a" /* ExcelController */] },
                { provide: __WEBPACK_IMPORTED_MODULE_18__providers_kpi_ctrl__["a" /* KPIController */], useClass: __WEBPACK_IMPORTED_MODULE_18__providers_kpi_ctrl__["a" /* KPIController */] },
                { provide: __WEBPACK_IMPORTED_MODULE_19__providers_toast_ctrl__["a" /* ToastController */], useClass: __WEBPACK_IMPORTED_MODULE_19__providers_toast_ctrl__["a" /* ToastController */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/comps/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#empty-success__text {\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n}\r\n\r\n#choose-file {\r\n    margin-top: 20px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n#choose-file-import {\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    text-align: left;\r\n    color: #777;\r\n    height: 50px;\r\n    background-color: #f9fafc;\r\n    border: dotted 1px #777;\r\n}\r\n\r\n.k-icon.k-i-loading {\r\n    font-size: 20px; \r\n    color: red;\r\n    position: absolute; \r\n    top: 20%; left: 50%; \r\n    -webkit-transform: translate(0%, 0%); \r\n            transform: translate(0%, 0%); \r\n}\r\n\r\n.k-dialog-close { display: none; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"width: 500px\"> \n\t<form [formGroup]=\"form\">\n\t<article class=\"body\">\n\t\t<div id=\"empty-success\"> \n\t\t\t<div>Chú ý: </div>\n\t\t\t<div id=\"empty-success__text\">- Hướng dẫn nhập liệu trong file mẫu.</div>\n\t\t\t<div id=\"empty-success__text\">- File mẫu là file excel xlsx hoặc xls.</div>\n\t\t\t<div id=\"empty-success__text\">- Tải file mẫu <a href=\"assets/kpi.xlsx\">tại đây</a> nếu chưa có.</div>\n\t\t</div>\n\t\t<div id=\"chose-file\">\n\t\t\t<div id=\"choose-file-import\">\n\t\t\t\t<label style=\"display: inline-block; color: red; cursor: pointer;\">\n\t\t\t\t\t<input type=\"file\" style=\"display:none;\" [accept]=\"acceptFile\" (change)=\"onChangeFile($event)\">\n\t\t\t\t\t<span class=\"fa fa-sign-in\" style=\"margin-right: 5px;\"></span>{{lblFile}}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"empty-success\" *ngIf=\"sheetNames.length > 0\">\n\t\t\t<div id=\"empty-success__text\" class=\"row\">\n\t\t\t\t<div class=\"col-6 k-form-field\">\n\t\t\t\t\t<span>Nhập tên sheet cần lấy </span>\n\t\t\t\t\t<span class=\"k-field-info k-required\">required</span>\n\t\t\t\t\t<kendo-combobox [data]=\"sheetNames\" formControlName=\"name\"></kendo-combobox>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3 k-form-field\">\n\t\t\t\t\t<span>Từ dòng:</span>\n\t\t\t\t\t<input type=\"number\" class=\"k-textbox\" formControlName=\"begin\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3 k-form-field\">\n\t\t\t\t\t<span>Đến dòng:</span>\n\t\t\t\t\t<input type=\"number\" class=\"k-textbox\" formControlName=\"end\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</article>\t \n\t<article class=\"modal-footer\">\n\t\t<button kendoButton class=\"pull-right\" (click)=\"onLoadExcel()\" [disabled]=\"isLoading || fileNotExist || form.invalid\">\n\t\t\t<span class=\"fa\" [ngClass]=\"isLoading ? 'fa-spinner fa-spin fa-fw' : 'fa-save'\"></span>Lấy dữ liệu\n\t\t</button>\n\t\t<button kendoButton class=\"k-button pull-right\" (click)=\"onClose()\" *ngIf=\"!isLoading\">\n\t\t\t<span class=\"fa fa-close\"></span>Thoát\n\t\t</button>\n\t</article>\n\t</form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/comps/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_excel_ctrl__ = __webpack_require__("../../../../../src/app/providers/excel.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogComponent = /** @class */ (function () {
    function DialogComponent(fb, ctrl) {
        this.fb = fb;
        this.ctrl = ctrl;
        this.load = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.acceptFile = "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        this.fileImport = undefined;
        this.wb = undefined;
        this.isLoading = false;
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['data', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            begin: [1],
            end: []
        });
    };
    Object.defineProperty(DialogComponent.prototype, "lblFile", {
        /**
         * Returns label file import
         * */
        get: function () {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.fileImport))
                return this.fileImport.name;
            else
                return "Chọn file dữ liệu excel xlsx hoặc xls.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "sheetNames", {
        /**
         * Returns sheet names
         * */
        get: function () {
            return this.wb ? this.wb.SheetNames : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "fileNotExist", {
        /**
         * Check file on select
         * */
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.fileImport);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Change select file
     * @param {EventChange} evt
     * */
    DialogComponent.prototype.onChangeFile = function (evt) {
        var _this = this;
        var target = evt.target;
        if (target.files.length > 0) {
            this.fileImport = target.files.item(0);
            this.isLoading = true;
            this.ctrl.loadFromFile(this.fileImport)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* tap */])(function () { return _this.isLoading = false; }))
                .subscribe(function (wb) { return _this.wb = wb; });
        }
    };
    /**
     * On Close #thoát
     * */
    DialogComponent.prototype.onClose = function () { this.close.emit(); };
    /**
     * On Stop #Dừng lại
     * */
    DialogComponent.prototype.onstop = function () {
        this.ctrl.reader.abort();
    };
    /**
     * Load excel data from file
     * */
    DialogComponent.prototype.onLoadExcel = function () {
        var _this = this;
        this.isLoading = true;
        var sheetName = this.form.value['name'];
        var begin = this.form.value['begin'];
        var end = this.form.value['end'];
        this.ctrl.getSheetByName(this.wb, sheetName, begin, end)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* tap */])(function () { return _this.isLoading = false; }))
            .subscribe(function (data) {
            _this.load.emit({
                file: _this.fileImport,
                dataUrl: _this.ctrl.dataUrl,
                excel: data
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "load", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "close", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't2t-select-excel',
            template: __webpack_require__("../../../../../src/app/comps/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comps/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_excel_ctrl__["a" /* ExcelController */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comps/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-first {margin-left: 0;}\r\n.k-form-field { width: 30%; }\r\n.k-form-field .e-mail { height: 34px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n\t<!-- tool -->\n\t<article class=\"headerContent\">\n\t\t<aside>\n\t\t\t<button class=\"kv2Btn btn-first\" (click)=\"onSelectFile()\" [disabled]=\"isSendKPI\">\n\t\t\t\t<span class=\"fa fa-sign-in\"></span>Chọn file\n\t\t\t</button>\n\t\t\t<button class=\"kv2Btn\" (click)=\"sendData()\" [disabled]=\"isSendKPI || data.length === 0\">\n\t\t\t\t<span class=\"fa\"[ngClass]=\"isSendKPI ? 'fa-spinner fa-spin fa-fw' : 'fa-send'\"></span>Gửi\n\t\t\t</button>\n\t\t\t<label class=\"k-form-field\">\n\t\t\t\t<input #email class=\"k-textbox e-mail\" placeholder=\"Nhập e-mail công ty.\" value=\"tuanitnq@gmail.com\"/>\n\t\t\t</label>\n\t\t</aside>\n\t</article>\n\n\t<!-- table -->\n\t<article class=\"fll w100\">\n\t\t<kendo-grid\n\t\t\t[data]=\"data\"\n\t\t\t[height]=\"400\"\n\t\t\t[resizable]=\"true\">\n\t\t\t\n\t\t\t<!-- column checkbox -->\n\t\t\t<kendo-grid-checkbox-column width=\"45\">\n\t\t\t\t<ng-template kendoGridHeaderTemplate>\n\t\t\t\t\t<input type=\"checkbox\" class=\"k-checkbox\" id=\"checkAll\" kendoGridSelectAllCheckbox>\n\t\t\t\t\t<label class=\"k-checkbox-label\" for=\"checkAll\"></label>\n\t\t\t\t</ng-template>\n\t\t\t</kendo-grid-checkbox-column>\n\t\t\t\n\t\t\t<!-- column Status => show if click \"Kiểm tra dữ liệu\" -->\n\t\t\t<kendo-grid-column \n\t\t\t\tfield=\"status\" \n\t\t\t\ttitle=\"Status\"\n\t\t\t\twidth=\"80\"></kendo-grid-column>\n\n\t\t\t<!-- -->\n\t\t\t<kendo-grid-column *ngFor=\"let c of columns\"\n\t\t\t\t[field]=\"c.field\"\n\t\t\t\t[title]=\"c.title\"\n\t\t\t\t[width]=\"c.field === 'index' ? 60: null\"></kendo-grid-column>\n\t\t\t</kendo-grid>\n\t</article>\n</section> \n\n<!-- SHOW DIALOG IMPORT FILE -->\n<kendo-dialog *ngIf=\"showSelectFile\" title=\"Nhập dữ liệu từ file excel\">\n\t<t2t-select-excel #selectFile\n\t\t(close)=\"onCloseDialog()\" \n\t\t(load)=\"loadFromExcel($event)\"></t2t-select-excel>\n</kendo-dialog>"

/***/ }),

/***/ "../../../../../src/app/comps/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_kpi_ctrl__ = __webpack_require__("../../../../../src/app/providers/kpi.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_ctrl__ = __webpack_require__("../../../../../src/app/providers/toast.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(toast, kpi) {
        this.toast = toast;
        this.kpi = kpi;
        this.columns = [];
        this.data = [];
        this.dataUrl = undefined;
        this.fileName = undefined;
        this.showSelectFile = false;
        this.isSendKPI = false;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    /**
     * On Close dialog select file
     * */
    HomeComponent.prototype.onCloseDialog = function () {
        this.showSelectFile = false;
    };
    /**
     * On select file import
     * */
    HomeComponent.prototype.onSelectFile = function () {
        this.showSelectFile = true;
    };
    /**
     * On Load data from file excel
     * */
    HomeComponent.prototype.loadFromExcel = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //this.selectFile.isLoading = true;
                        this.fileName = Date.now() + ".xlsx";
                        this.dataUrl = evt.dataUrl;
                        _a = this;
                        return [4 /*yield*/, evt.excel.header];
                    case 1:
                        _a.columns = _c.sent();
                        _b = this;
                        return [4 /*yield*/, evt.excel.data];
                    case 2:
                        _b.data = _c.sent();
                        //this.selectFile.isLoading = false;
                        this.toast.success("\u0110\u00E3 l\u1EA5y d\u1EEF li\u1EC7u t\u1EEB file excel.");
                        return [4 /*yield*/, this.onCloseDialog()];
                    case 3:
                        _c.sent();
                        console.log("Ten file ==> " + this.fileName);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send data to google sheet
     * */
    HomeComponent.prototype.sendData = function () {
        var _this = this;
        // check e-mail
        var email = this.emailRef.nativeElement.value;
        if (email.trim().length === 0) {
            this.toast.error("Bạn chưa nhập e-mail.");
            return;
        }
        // upload file import to google drive
        this.isSendKPI = true;
        this.kpi.createFile(email, this.dataUrl, this.fileName).subscribe(function (resp) {
            console.log("\u0110\u00E3 upload file xong => " + JSON.stringify(resp));
            _this.toast.success("\u0110\u00E3 chu\u1EA9n b\u1ECB xong.");
            // send all data to server
            var num = -1;
            var exec = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(2000).subscribe(function (index) { return __awaiter(_this, void 0, void 0, function () {
                var item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            num++;
                            if (this.data.length === num + 1) {
                                exec.unsubscribe();
                                this.isSendKPI = false;
                            }
                            item = this.data[num];
                            item['status'] = 'send';
                            return [4 /*yield*/, this.kpi.sendRow(email, item).subscribe(function (resp) { item['status'] = 'success'; console.log(resp); }, function (err) { item['status'] = 'error'; console.warn(err); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("email"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "emailRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("selectFile"),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "selectFile", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/comps/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comps/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_toast_ctrl__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_kpi_ctrl__["a" /* KPIController */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comps/log/log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/log/log.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  log works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/comps/log/log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogComponent = /** @class */ (function () {
    function LogComponent() {
    }
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log',
            template: __webpack_require__("../../../../../src/app/comps/log/log.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comps/log/log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/config.ctrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfig = /** @class */ (function () {
    function AppConfig(http) {
        this.http = http;
        this.SESSION_KEY = "APP_CONFIG";
    }
    AppConfig.prototype.load = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            url = url || "assets/app.config.json";
            _this.http.get(url).subscribe(function (data) { _this.set(data); resolve(data); }, function (msg) { return reject(msg); });
        });
    };
    /**
     * Set config
     * */
    AppConfig.prototype.set = function (cfig) {
        if (cfig != undefined) {
            cfig = Object.assign(this.get(), cfig);
            sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(cfig));
        }
    };
    /**
     * Returns config
     * @returns {IConfig}
     * */
    AppConfig.prototype.get = function () {
        var cfig = sessionStorage.getItem(this.SESSION_KEY);
        return JSON.parse(cfig || '{}');
    };
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "../../../../../src/app/providers/excel.ctrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExcelController = /** @class */ (function () {
    function ExcelController() {
        this.reader = undefined;
        this.dataUrl = undefined;
    }
    /**
     * Load data from file excel
     * @param {file} File
     * */
    ExcelController.prototype.loadFromFile = function (file) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (obs) {
            // check file is exit
            if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(file)) {
                obs.error("Bạn chưa nhập tập tin.");
            }
            _this.reader = new FileReader();
            _this.reader.readAsDataURL(file);
            _this.reader.onerror = function (e) { obs.error(e); };
            _this.reader.onload = function (e) {
                var status = _this.reader.readyState;
                if (status === 2) {
                    var data = _this.reader.result;
                    _this.dataUrl = data;
                    data = data.split(",")[1];
                    var wb = __WEBPACK_IMPORTED_MODULE_3_xlsx__["read"](data, { type: 'base64' });
                    obs.next(wb);
                    obs.complete();
                }
            };
        });
    };
    /**
     * Return json object
     * @param {string} name - The sheet name
     * @returns {header: object, data: object[]}
     * */
    ExcelController.prototype.getSheetByName = function (wb, name, begin, end) {
        var ws = wb.Sheets[name];
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(ws)) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw("Kh\u00F4ng c\u00F3 sheet \"" + name + "\".");
        }
        var data = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].sheet_to_json(ws);
        if (data.length <= 1) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw("Sheet \"" + name + "\" kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u.");
        }
        // convert row0 of data => field +  title
        var row0 = data.shift();
        var ids = Object.keys(row0).filter(function (key) { return key !== "__EMPTY"; });
        var header = ids.map(function (id, index) { return { field: id, title: row0[id] }; });
        // copy data from `begin` to `end`
        begin = begin ? begin - 1 : 0;
        end = end ? end - 1 : data.length - 1;
        data = data.slice(begin, end + 1);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ header: header, data: data, begin: begin + 1, end: end + 1 });
    };
    /**
     * Returns the sheet at `index`;
     * @param {excel.WorkBook} wb
     * @param {number} index - The zero based index of the reQuired sheet
     * @returns {excel.WorkSheet | null}
     * */
    ExcelController.prototype.getSheetByIndex = function (wb, index) {
        var names = wb ? wb.SheetNames : [];
        var name = names.length >= index + 1 ? names[index] : null;
        return name ? wb.Sheets[name] : null;
    };
    ExcelController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ExcelController);
    return ExcelController;
}());



/***/ }),

/***/ "../../../../../src/app/providers/intercep.ctrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Interceptor = /** @class */ (function () {
    function Interceptor() {
    }
    Interceptor.prototype.intercept = function (req, next) {
        //console.log(req);
        req.headers.set('Content-Type', 'application/json');
        return next.handle(req);
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "../../../../../src/app/providers/kpi.ctrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KPIController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_ctrl__ = __webpack_require__("../../../../../src/app/providers/config.ctrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KPIController = /** @class */ (function () {
    function KPIController(cfig) {
        this.cfig = cfig;
    }
    KPIController.prototype.send = function (method, data) {
        var body = JSON.stringify(data.body || {});
        var params = Object.assign({}, data.params, { action: data.action });
        var url = this.cfig.get().server_api;
        return this.cfig.http.request(method, url, { params: params, body: body }).switchMap(function (resp) {
            if (resp['status'] === 'error')
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(resp);
            else
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(resp['result']);
        });
    };
    KPIController.prototype.createFile = function (email, dataUrl, fileName) {
        var data = dataUrl.replace(/^.*,/, '');
        var contentType = dataUrl.match(/^.*(?=;)/)[0];
        return this.send("POST", {
            action: "createFile",
            params: { email: email },
            body: { data: data, mimeType: contentType, fileName: fileName }
        });
    };
    KPIController.prototype.sendRow = function (email, data) {
        return this.send("POST", {
            action: "appendRow",
            params: { email: email },
            body: { item: data }
        });
    };
    KPIController.prototype.getFiles = function (email) {
        return this.send("GET", {
            action: "getAllFile",
            params: { email: email }
        });
    };
    KPIController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_ctrl__["a" /* AppConfig */]])
    ], KPIController);
    return KPIController;
}());



/***/ }),

/***/ "../../../../../src/app/providers/toast.ctrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastController = /** @class */ (function () {
    function ToastController(toastr) {
        this.toastr = toastr;
    }
    ToastController.prototype.loading = function (msg) {
        return this.toastr.warning(msg, "", {
            tapToDismiss: false,
            timeOut: 0,
            extendedTimeOut: 0,
            closeButton: false
        });
    };
    ToastController.prototype.success = function (msg) {
        return this.toastr.success(msg, "", {
            timeOut: 2000,
            extendedTimeOut: 2000,
            closeButton: true
        });
    };
    ToastController.prototype.error = function (msg) {
        return this.toastr.error(msg, "", {
            timeOut: 4000,
            extendedTimeOut: 2000,
            closeButton: true
        });
    };
    ToastController.prototype.info = function (msg) {
        return this.toastr.info(msg, "", {
            timeOut: 2000,
            extendedTimeOut: 2000,
            closeButton: true
        });
    };
    ToastController.prototype.clear = function () {
        this.toastr.clear();
    };
    ToastController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], ToastController);
    return ToastController;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map