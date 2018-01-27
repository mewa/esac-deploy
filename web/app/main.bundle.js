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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <a mat-button routerLink=\"/\" class=\"nav-link\">\n    <mat-icon>home</mat-icon>\n  </a>\n  <a mat-button routerLink=\"/converter\" class=\"nav-link\">Converter</a>\n</mat-toolbar> \n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__converter_converter_module__ = __webpack_require__("../../../../../src/app/converter/converter.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_7__converter_converter_module__["a" /* ConverterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/converter/converter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wizard\">\n  <mat-progress-bar mode=\"determinate\" [value]=\"progress\" class=\"wizard-progress\"></mat-progress-bar>\n  <div *ngIf=\"step === 0\" class=\"wizard-step\">\n    <button mat-raised-button (click)=\"chooseConverter(0)\" color=\"primary\">ESAC to MIDI</button>\n    <button mat-raised-button (click)=\"chooseConverter(1)\" color=\"primary\">MIDI to ESAC</button>\n  </div>\n  <div *ngIf=\"step === 1\" class=\"wizard-step\">\n    <div *ngIf=\"converterType === 0\">\n      <button mat-raised-button (click)=\"chooseSource(0)\" color=\"primary\">From file</button>\n      <button mat-raised-button (click)=\"chooseSource(1)\" color=\"primary\">Create new</button>\n    </div>\n    <div *ngIf=\"converterType === 1\">\n      <midi-convert-file (converted)=\"handleMidiToEsac($event)\"></midi-convert-file>\n    </div>\n  </div>\n  <div *ngIf=\"step === 2\" class=\"wizard-step\">\n    <div *ngIf=\"converterType === 0\">\n      <esac-convert-file *ngIf=\"sourceType === 0\" (converted)=\"handleEsacToMidiFile($event)\"></esac-convert-file>\n      <esac-convert-new *ngIf=\"sourceType === 1\" (converted)=\"handleEsacToMidiNew($event)\"></esac-convert-new>\n    </div>\n    <div *ngIf=\"converterType === 1\">\n      <midi-convert-result [esac]=\"result\"></midi-convert-result>\n    </div>\n  </div>\n  <div *ngIf=\"step === 3\" class=\"wizard-step\">\n    <div *ngIf=\"converterType === 0\">\n      <esac-convert-result [esac]=\"result\"></esac-convert-result>\n    </div>\n  </div>\n  <div class=\"wizard-navigation\">\n    <button mat-button (click)=\"prevStep()\" *ngIf=\"step > 0\">\n      <mat-icon>chevron_left</mat-icon>\n      <span>Previous</span>\n    </button>\n    <button mat-button color=\"accent\" (click)=\"convertAgain()\" *ngIf=\"isProgressCompleted()\">\n      <span>Convert again</span>\n      <mat-icon>swap_horiz</mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/converter/converter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wizard {\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center; }\n\n.wizard-progress {\n  margin-bottom: 10px; }\n\n.wizard-step {\n  padding: 10px 0 20px 0; }\n\n.wizard-navigation {\n  padding: 20px 0 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/converter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterComponent; });
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

var ConverterComponent = (function () {
    function ConverterComponent() {
        this.step = 0;
        this.lastStepESAC = 3;
        this.lastStepMIDI = 2;
        this.progress = 0;
    }
    ConverterComponent.prototype.ngOnInit = function () {
    };
    ConverterComponent.prototype.chooseConverter = function (converter) {
        this.converterType = converter;
        this.step++;
        this.updateProgress();
    };
    ConverterComponent.prototype.chooseSource = function (source) {
        this.sourceType = source;
        this.step++;
        this.updateProgress();
    };
    ConverterComponent.prototype.prevStep = function () {
        if (this.step > 0)
            this.step--;
        this.updateProgress();
    };
    ConverterComponent.prototype.updateProgress = function () {
        if (this.converterType === 0) {
            this.progress = this.step * 100 / this.lastStepESAC;
        }
        else {
            this.progress = this.step * 100 / this.lastStepMIDI;
        }
    };
    ConverterComponent.prototype.handleEsacToMidiFile = function (event) {
        this.step++;
        this.updateProgress();
        this.result = event;
    };
    ConverterComponent.prototype.handleEsacToMidiNew = function (event) {
        this.step++;
        this.updateProgress();
        this.result = event;
    };
    ConverterComponent.prototype.handleMidiToEsac = function (event) {
        this.step++;
        this.updateProgress();
        this.result = event;
    };
    ConverterComponent.prototype.convertAgain = function () {
        this.step = 0;
        this.converterType = null;
        this.sourceType = null;
        this.progress = 0;
        this.result = null;
    };
    ConverterComponent.prototype.isProgressCompleted = function () {
        return this.progress === 100;
    };
    ConverterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'converter',
            template: __webpack_require__("../../../../../src/app/converter/converter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/converter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConverterComponent);
    return ConverterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/converter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_converter_service__ = __webpack_require__("../../../../../src/app/converter/services/converter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__converter_component__ = __webpack_require__("../../../../../src/app/converter/converter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__esac_convert_file_esac_convert_file_component__ = __webpack_require__("../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__esac_convert_new_esac_convert_new_component__ = __webpack_require__("../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__esac_convert_result_esac_convert_result_component__ = __webpack_require__("../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__midi_convert_file_midi_convert_file_component__ = __webpack_require__("../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__midi_convert_result_midi_convert_result_component__ = __webpack_require__("../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'converter', component: __WEBPACK_IMPORTED_MODULE_8__converter_component__["a" /* ConverterComponent */] },
];
var ConverterModule = (function () {
    function ConverterModule() {
    }
    ConverterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__converter_component__["a" /* ConverterComponent */], __WEBPACK_IMPORTED_MODULE_9__esac_convert_file_esac_convert_file_component__["a" /* EsacConvertFileComponent */], __WEBPACK_IMPORTED_MODULE_10__esac_convert_new_esac_convert_new_component__["a" /* EsacConvertNewComponent */], __WEBPACK_IMPORTED_MODULE_11__esac_convert_result_esac_convert_result_component__["a" /* EsacConvertResultComponent */], __WEBPACK_IMPORTED_MODULE_12__midi_convert_file_midi_convert_file_component__["a" /* MidiConvertFileComponent */], __WEBPACK_IMPORTED_MODULE_13__midi_convert_result_midi_convert_result_component__["a" /* MidiConvertResultComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_converter_service__["a" /* ConverterService */]]
        })
    ], ConverterModule);
    return ConverterModule;
}());



/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"file-container\" *ngIf=\"!converting\">\n  <span class=\"file-button\">\n    <button mat-fab color=\"accent\" [disabled]=\"isFilesChosen()\">\n      <mat-icon>attach_file</mat-icon>\n      <input #file type=\"file\" class=\"file-input\" (change)=\"onChooseFiles()\">\n    </button>\n  </span>\n  <mat-chip-list *ngIf=\"isFilesChosen()\" class=\"file-list\">\n    <mat-chip *ngFor=\"let file of files; index as idx;\" (removed)=\"onDeleteFiles(idx)\">\n      <span>{{ file.name }}</span>\n      <mat-icon matChipRemove>cancel</mat-icon>\n    </mat-chip>\n  </mat-chip-list>\n  <div class=\"file-subcontainer\">\n    <button mat-fab color=\"primary\" (click)=\"onDeleteFiles()\" [disabled]=\"!isFilesChosen()\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-raised-button color=\"accent\" (click)=\"submit()\" [disabled]=\"!isFilesChosen()\">\n      <span>Convert</span>\n      <mat-icon>swap_horiz</mat-icon>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"converting\" class=\"new-spinner\">\n  <mat-spinner mode=\"indeterminate\" color=\"accent\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-container {\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .file-container > * {\n    margin: 10px; }\n  .file-container .file-button {\n    position: relative; }\n  .file-container .file-input {\n    cursor: pointer;\n    height: 100%;\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n    width: 56px; }\n  .file-container .file-list .mat-chip {\n    margin: 5px; }\n  .file-container .file-subcontainer > * {\n    margin: 0 10px; }\n\n.new-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacConvertFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__("../../../../../src/app/converter/services/converter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EsacConvertFileComponent = (function () {
    function EsacConvertFileComponent(converterService, messageDialogService) {
        this.converterService = converterService;
        this.messageDialogService = messageDialogService;
        this.files = [];
        this.converting = false;
        this.converted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    EsacConvertFileComponent.prototype.ngOnInit = function () {
    };
    EsacConvertFileComponent.prototype.onChooseFiles = function () {
        if (this.file) {
            for (var _i = 0, _a = this.file.nativeElement.files; _i < _a.length; _i++) {
                var file = _a[_i];
                this.files.push(file);
            }
        }
    };
    EsacConvertFileComponent.prototype.onDeleteFiles = function (index) {
        if (index)
            this.files.splice(index, 1);
        else
            this.files = [];
    };
    EsacConvertFileComponent.prototype.isFilesChosen = function () {
        return this.files.length ? true : false;
    };
    EsacConvertFileComponent.prototype.submit = function () {
        var _this = this;
        this.converting = true;
        var file = this.files[0];
        this.converterService.esacFileToEsacObject(file)
            .subscribe(function (data) {
            _this.converted.emit(data);
            _this.converting = false;
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Invalid file');
            _this.converting = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('file'),
        __metadata("design:type", Object)
    ], EsacConvertFileComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EsacConvertFileComponent.prototype, "converted", void 0);
    EsacConvertFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-convert-file',
            template: __webpack_require__("../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/esac-convert-file/esac-convert-file.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], EsacConvertFileComponent);
    return EsacConvertFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new-container\" *ngIf=\"!converting\">\n  <form [formGroup]=\"form\" novalidate class=\"new-form\">\n    <mat-form-field>\n      <input matInput formControlName=\"name\" placeholder=\"Catalog\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"title\" placeholder=\"CUT\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"region\" placeholder=\"REG\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"source\" placeholder=\"TRD\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"signature\" placeholder=\"SIG\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"key\" placeholder=\"KEY*\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput matTextareaAutosize formControlName=\"melody\" placeholder=\"MEL*\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput matTextareaAutosize formControlName=\"remarks\" placeholder=\"BEM\"></textarea>\n    </mat-form-field>\n  </form>\n\n  <button mat-raised-button color=\"accent\" (click)=\"submit()\" [disabled]=\"form.invalid\">\n    <span>Convert</span>\n    <mat-icon>swap_horiz</mat-icon>\n  </button>\n</div>\n<div *ngIf=\"converting\" class=\"new-spinner\">\n  <mat-spinner mode=\"indeterminate\" color=\"accent\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0; }\n\n.new-form {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .new-form * {\n    padding: 0 2px; }\n\n.new-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacConvertNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_converter_service__ = __webpack_require__("../../../../../src/app/converter/services/converter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__ = __webpack_require__("../../../../../src/app/shared/consts/regexp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsacConvertNewComponent = (function () {
    function EsacConvertNewComponent(converterService) {
        this.converterService = converterService;
        this.converting = false;
        this.converted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    EsacConvertNewComponent.prototype.ngOnInit = function () {
        this.form = this.newForm();
    };
    EsacConvertNewComponent.prototype.submit = function () {
        this.converted.emit(this.form.value);
    };
    EsacConvertNewComponent.prototype.newForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            source: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            region: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            signature: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ]),
            melody: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__["a" /* melody_regexp */])
            ]),
            remarks: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EsacConvertNewComponent.prototype, "converted", void 0);
    EsacConvertNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-convert-new',
            template: __webpack_require__("../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/esac-convert-new/esac-convert-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */]])
    ], EsacConvertNewComponent);
    return EsacConvertNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n    <mat-card class=\"card\">\n        <div class=\"card-speed\" *ngIf=\"isMidiPlaying()\">\n            <button mat-icon-button (click)=\"slowDownMidi()\">\n                <mat-icon>remove</mat-icon>\n            </button>\n            <mat-slider disabled [min]=\"speedData.midiSpeedMin\" [max]=\"speedData.midiSpeedMax\" [step]=\"speedData.midiSpeedStep\" [value]=\"speedData.midiSpeedValue\"></mat-slider>\n            <button mat-icon-button (click)=\"speedUpMidi()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <div class=\"card-buttons\">\n            <button mat-icon-button color=\"accent\" (click)=\"playMidi(esac)\" *ngIf=\"!isMidiPlaying()\">\n                <mat-icon>play_arrow</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" (click)=\"stopMidi()\" *ngIf=\"isMidiPlaying()\">\n                <mat-icon>stop</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" (click)=\"downloadMidi(esac)\">\n                <mat-icon>file_download</mat-icon>\n            </button>\n            <button mat-icon-button color=\"primary\" (click)=\"addEsac()\">\n                <mat-icon>add</mat-icon>\n            </button>\n        </div>\n        <mat-card-header>\n            <mat-card-title>{{ esac.name }}</mat-card-title>\n            <mat-card-subtitle>{{ esac.title }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <p *ngIf=\"esac.region\">\n                <span class=\"card-content--bold\">REG:</span>\n                <span>{{ esac.region }}</span>\n            </p>\n            <p *ngIf=\"esac.source\">\n                <span class=\"card-content--bold\">TRD:</span>\n                <span>{{ esac.source }}</span>\n            </p>\n            <p *ngIf=\"esac.signature\">\n                <span class=\"card-content--bold\">SIG:</span>\n                <span>{{ esac.signature }}</span>\n            </p>\n            <p *ngIf=\"esac.key\">\n                <span class=\"card-content--bold\">KEY:</span>\n                <span>{{ esac.key }}</span>\n            </p>\n            <p *ngIf=\"esac.melody\">\n                <span class=\"card-content--bold\">MEL:</span>\n                <span class=\"whitespace\">{{ esac.melody }}</span>\n            </p>\n            <p *ngIf=\"esac.remarks\">\n                <span class=\"card-content--bold\">BEM:</span>\n                <span>{{ esac.remarks }}</span>\n            </p>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.card {\n  min-width: 220px;\n  margin: 10px 10px;\n  text-align: initial; }\n\n.card-actions {\n  text-align: center; }\n  .card-actions * {\n    margin-bottom: 5px; }\n\n.card-buttons {\n  text-align: right; }\n\n.card-speed {\n  text-align: center; }\n\n.new-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.card-content--bold {\n  font-weight: bold; }\n\n.whitespace {\n  white-space: pre-wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacConvertResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EsacConvertResultComponent = (function () {
    function EsacConvertResultComponent(http, mainService, midiPlayerService, messageDialogService) {
        this.http = http;
        this.mainService = mainService;
        this.midiPlayerService = midiPlayerService;
        this.messageDialogService = messageDialogService;
        this.createNewEsacFromFromURL = '/api/esac';
        this.speedData = this.midiPlayerService.getSpeedData();
    }
    EsacConvertResultComponent.prototype.ngOnInit = function () {
        this.esac.isPlaying = false;
    };
    EsacConvertResultComponent.prototype.ngOnDestroy = function () {
        this.stopMidi();
    };
    EsacConvertResultComponent.prototype.playMidi = function (esac) {
        var _this = this;
        this.mainService.esacToMidi(esac)
            .subscribe(function (data) {
            _this.esac.isPlaying = true;
            _this.midiPlayerService.setMidiSong(data, _this.esac.id);
            _this.midiPlayerService.playMidi();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Invalid EsAC');
        });
    };
    EsacConvertResultComponent.prototype.stopMidi = function () {
        this.esac.isPlaying = false;
        this.midiPlayerService.stopMidi();
    };
    EsacConvertResultComponent.prototype.isMidiPlaying = function () {
        return this.checkEsacId() && this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
    };
    EsacConvertResultComponent.prototype.checkEsacId = function () {
        return this.esac.id === this.midiPlayerService.getEsacId();
    };
    EsacConvertResultComponent.prototype.downloadMidi = function (esac, index) {
        var _this = this;
        this.mainService.esacToMidiFile(esac)
            .subscribe(function (data) {
            var blob = new Blob([data], { type: 'audio/midi' });
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, esac.name + '_' + esac.title + '.mid');
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error downloading EsAC');
        });
    };
    EsacConvertResultComponent.prototype.addEsac = function () {
        var _this = this;
        return this.http.put(this.createNewEsacFromFromURL, this.esac)
            .subscribe(function (data) {
            _this.messageDialogService.displayMessageDialog('EsAC added successfully');
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error adding EsAC');
        });
    };
    EsacConvertResultComponent.prototype.slowDownMidi = function () {
        this.midiPlayerService.slowDownMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    EsacConvertResultComponent.prototype.speedUpMidi = function () {
        this.midiPlayerService.speedUpMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EsacConvertResultComponent.prototype, "esac", void 0);
    EsacConvertResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-convert-result',
            template: __webpack_require__("../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/esac-convert-result/esac-convert-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__main_services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__main_services_midi_player_service__["a" /* MidiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], EsacConvertResultComponent);
    return EsacConvertResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"file-container\" *ngIf=\"!converting\">\n  <span class=\"file-button\">\n    <button mat-fab color=\"accent\" [disabled]=\"isFilesChosen()\">\n      <mat-icon>attach_file</mat-icon>\n      <input #file type=\"file\" class=\"file-input\" (change)=\"onChooseFiles()\">\n    </button>\n  </span>\n  <mat-chip-list *ngIf=\"isFilesChosen()\" class=\"file-list\">\n    <mat-chip *ngFor=\"let file of files; index as idx;\" (removed)=\"onDeleteFiles(idx)\">\n      <span>{{ file.name }}</span>\n      <mat-icon matChipRemove>cancel</mat-icon>\n    </mat-chip>\n  </mat-chip-list>\n  <mat-form-field *ngIf=\"isFilesChosen()\">\n    <input matInput placeholder=\"KEY\" [(ngModel)]=\"key\">\n  </mat-form-field>\n  <div class=\"file-subcontainer\">\n    <button mat-raised-button color=\"accent\" (click)=\"submit()\" [disabled]=\"!isSubmittable()\">\n      <span>Convert</span>\n      <mat-icon>swap_horiz</mat-icon>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"converting\" class=\"new-spinner\">\n  <mat-spinner mode=\"indeterminate\" color=\"accent\"></mat-spinner>\n</div>"

/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-container {\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .file-container > * {\n    margin: 10px; }\n  .file-container .file-button {\n    position: relative; }\n  .file-container .file-input {\n    cursor: pointer;\n    height: 100%;\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n    width: 56px; }\n  .file-container .file-list .mat-chip {\n    margin: 5px; }\n  .file-container .file-subcontainer > * {\n    margin: 0 10px; }\n\n.new-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidiConvertFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__("../../../../../src/app/converter/services/converter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MidiConvertFileComponent = (function () {
    function MidiConvertFileComponent(converterService, messageDialogService) {
        this.converterService = converterService;
        this.messageDialogService = messageDialogService;
        this.files = [];
        this.key = '';
        this.converting = false;
        this.converted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MidiConvertFileComponent.prototype.ngOnInit = function () {
    };
    MidiConvertFileComponent.prototype.onChooseFiles = function () {
        if (this.file) {
            this.files.push(this.file.nativeElement.files[0]);
        }
    };
    MidiConvertFileComponent.prototype.onDeleteFiles = function (index) {
        if (index)
            this.files.splice(index, 1);
        else
            this.files = [];
    };
    MidiConvertFileComponent.prototype.isFilesChosen = function () {
        return this.files.length ? true : false;
    };
    MidiConvertFileComponent.prototype.isSubmittable = function () {
        return this.files.length && this.key.length ? true : false;
    };
    MidiConvertFileComponent.prototype.submit = function () {
        var _this = this;
        this.converting = true;
        var file = this.files[0];
        this.converterService.midiToEsac({ midi: file, key: this.key })
            .subscribe(function (data) {
            _this.converted.emit(data);
            _this.converting = false;
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Invalid file or key');
            _this.converting = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('file'),
        __metadata("design:type", Object)
    ], MidiConvertFileComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MidiConvertFileComponent.prototype, "converted", void 0);
    MidiConvertFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'midi-convert-file',
            template: __webpack_require__("../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/midi-convert-file/midi-convert-file.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], MidiConvertFileComponent);
    return MidiConvertFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isMidiPlaying()\">\n    <button mat-icon-button (click)=\"slowDownMidi()\">\n        <mat-icon>remove</mat-icon>\n    </button>\n    <mat-slider disabled [min]=\"speedData.midiSpeedMin\" [max]=\"speedData.midiSpeedMax\" [step]=\"speedData.midiSpeedStep\" [value]=\"speedData.midiSpeedValue\"></mat-slider>\n    <button mat-icon-button (click)=\"speedUpMidi()\">\n        <mat-icon>add</mat-icon>\n    </button>\n</div>\n<div>\n    <button mat-icon-button color=\"accent\" (click)=\"playMidi()\" *ngIf=\"!isMidiPlaying()\">\n        <mat-icon>play_arrow</mat-icon>\n    </button>\n    <button mat-icon-button color=\"accent\" (click)=\"stopMidi()\" *ngIf=\"isMidiPlaying()\">\n        <mat-icon>stop</mat-icon>\n    </button>\n    <button mat-icon-button color=\"accent\" (click)=\"downloadEsac()\">\n        <mat-icon>file_download</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" (click)=\"addEsac()\">\n        <mat-icon>add</mat-icon>\n    </button>\n</div>\n<div class=\"new-container\">\n    <form [formGroup]=\"form\" novalidate class=\"new-form\">\n        <mat-form-field>\n            <input matInput formControlName=\"name\" placeholder=\"Catalog\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput formControlName=\"title\" placeholder=\"CUT\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput formControlName=\"region\" placeholder=\"REG\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput formControlName=\"source\" placeholder=\"TRD\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput formControlName=\"signature\" placeholder=\"SIG\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput formControlName=\"key\" placeholder=\"KEY*\">\n        </mat-form-field>\n        <mat-form-field>\n            <textarea matInput matTextareaAutosize formControlName=\"melody\" placeholder=\"MEL*\"></textarea>\n        </mat-form-field>\n        <mat-form-field>\n            <textarea matInput matTextareaAutosize formControlName=\"remarks\" placeholder=\"BEM\"></textarea>\n        </mat-form-field>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0; }\n\n.new-form {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .new-form * {\n    padding: 0 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidiConvertResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_consts_regexp__ = __webpack_require__("../../../../../src/app/shared/consts/regexp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MidiConvertResultComponent = (function () {
    function MidiConvertResultComponent(http, mainService, midiPlayerService, messageDialogService) {
        this.http = http;
        this.mainService = mainService;
        this.midiPlayerService = midiPlayerService;
        this.messageDialogService = messageDialogService;
        this.speedData = this.midiPlayerService.getSpeedData();
        this.createNewEsacFromURL = '/api/esac';
    }
    MidiConvertResultComponent.prototype.ngOnInit = function () {
        this.form = this.fillForm();
    };
    MidiConvertResultComponent.prototype.ngOnDestroy = function () {
        this.stopMidi();
    };
    MidiConvertResultComponent.prototype.fillForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.name),
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.title),
            source: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.source),
            region: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.region),
            signature: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.signature),
            key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.key, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ]),
            melody: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.melody, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__shared_consts_regexp__["a" /* melody_regexp */])
            ]),
            remarks: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.esac.remarks)
        });
    };
    MidiConvertResultComponent.prototype.isMidiPlaying = function () {
        return this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
    };
    MidiConvertResultComponent.prototype.slowDownMidi = function () {
        this.midiPlayerService.slowDownMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    MidiConvertResultComponent.prototype.speedUpMidi = function () {
        this.midiPlayerService.speedUpMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    MidiConvertResultComponent.prototype.playMidi = function () {
        var _this = this;
        var esac = this.form.value;
        this.mainService.esacToMidi(esac)
            .subscribe(function (data) {
            _this.esac.isPlaying = true;
            _this.midiPlayerService.setMidiSong(data);
            _this.midiPlayerService.playMidi();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error playing MIDI');
        });
    };
    MidiConvertResultComponent.prototype.stopMidi = function () {
        this.esac.isPlaying = false;
        this.midiPlayerService.stopMidi();
    };
    MidiConvertResultComponent.prototype.downloadEsac = function () {
        var esac = this.form.value;
        var content = this.esacToString(esac);
        var blob = new Blob([content], { type: 'text/plain' });
        __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, esac.name + '_' + esac.title + '.txt');
    };
    MidiConvertResultComponent.prototype.addEsac = function () {
        var _this = this;
        return this.http.put(this.createNewEsacFromURL, this.form.value)
            .subscribe(function (data) {
            _this.messageDialogService.displayMessageDialog('EsAC added successfully');
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error adding EsAC');
        });
    };
    MidiConvertResultComponent.prototype.esacToString = function (esac) {
        var string = '';
        string += esac.name + '\n';
        string += 'CUT[' + esac.title + ']\n';
        string += 'REG[' + esac.region + ']\n';
        string += 'TRD[' + esac.source + ']\n';
        string += 'SIG[' + esac.signature + ']\n';
        string += 'KEY[' + esac.key + ']\n';
        string += 'MEL[' + esac.melody + ']\n';
        string += 'BEM[' + esac.remarks + ']\n';
        string += '\n';
        return string;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MidiConvertResultComponent.prototype, "esac", void 0);
    MidiConvertResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'midi-convert-result',
            template: __webpack_require__("../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/converter/midi-convert-result/midi-convert-result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__main_services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__main_services_midi_player_service__["a" /* MidiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], MidiConvertResultComponent);
    return MidiConvertResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/converter/services/converter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConverterService = (function () {
    function ConverterService(http) {
        this.http = http;
        this.urlEsacFile2EsacObject = '/api/esacjson';
        this.urlMidi2Esac = '/api/midi2esac';
    }
    ConverterService.prototype.esacFileToEsacObject = function (file) {
        var input = new FormData();
        input.append('file', file);
        return this.http.post(this.urlEsacFile2EsacObject, input);
    };
    ConverterService.prototype.midiToEsac = function (form) {
        var input = new FormData();
        input.append(form.midi.name, form.midi);
        var queryParam = '?key=' + form.key;
        return this.http.post(this.urlMidi2Esac + queryParam, input);
    };
    ConverterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConverterService);
    return ConverterService;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-close\">\n  <button mat-icon-button matDialogClose>\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"wizard\">\n    <mat-progress-bar mode=\"determinate\" [value]=\"progress\" class=\"wizard-progress\"></mat-progress-bar>\n    <div *ngIf=\"step === 0\" class=\"wizard-step\">\n      <button mat-raised-button (click)=\"chooseSource(0)\" color=\"primary\">From file</button>\n      <button mat-raised-button (click)=\"chooseSource(1)\" color=\"primary\">Create new</button>\n    </div>\n    <div *ngIf=\"step === 1\" class=\"wizard-step\">\n      <esac-add-file *ngIf=\"sourceType === 0\" (isSubmited)=\"receiveMessage($event)\"></esac-add-file>\n      <esac-add-new *ngIf=\"sourceType === 1\" (isSubmited)=\"receiveMessage($event)\"></esac-add-new>\n    </div>\n    <div *ngIf=\"step === 2\" class=\"wizard-step\">\n      <p class=\"message\">{{text}}</p>\n      <button mat-raised-button color=\"accent\" (click)=\"onNoClick()\">Close</button>\n    </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions *ngIf=\"step === 1\">\n  <button mat-button (click)=\"prevStep()\">\n    <mat-icon>chevron_left</mat-icon>\n    <span>Previous</span>\n  </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wizard {\n  text-align: center; }\n\n.wizard-progress {\n  margin-bottom: 10px; }\n\n.wizard-step {\n  padding: 10px 0 10px 0; }\n\n.dialog-close {\n  text-align: right; }\n\n.message {\n  font-family: Roboto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacAddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EsacAddDialogComponent = (function () {
    function EsacAddDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.step = 0;
        this.lastStep = 2;
        this.progress = 0;
    }
    EsacAddDialogComponent.prototype.ngOnInit = function () {
    };
    EsacAddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EsacAddDialogComponent.prototype.receiveMessage = function ($event) {
        this.step++;
        this.updateProgress();
        this.text = $event.text;
    };
    EsacAddDialogComponent.prototype.chooseSource = function (source) {
        this.sourceType = source;
        this.step++;
        this.updateProgress();
    };
    EsacAddDialogComponent.prototype.prevStep = function () {
        if (this.step > 0) {
            this.step--;
        }
        this.updateProgress();
    };
    EsacAddDialogComponent.prototype.updateProgress = function () {
        this.progress = this.step * 100 / this.lastStep;
    };
    EsacAddDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-add-dialog',
            template: __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], EsacAddDialogComponent);
    return EsacAddDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"file-container\">\n  <span class=\"file-button\">\n    <button mat-fab color=\"accent\" [disabled]=\"isFilesChosen()\">\n      <mat-icon>attach_file</mat-icon>\n      <input #file type=\"file\" class=\"file-input\" (change)=\"onChooseFiles()\">\n    </button>\n  </span>\n  <mat-chip-list *ngIf=\"isFilesChosen()\" class=\"file-list\">\n    <mat-chip *ngFor=\"let file of files; index as idx;\" (removed)=\"onDeleteFiles(idx)\">\n      <span>{{ file.name }}</span>\n      <mat-icon matChipRemove>cancel</mat-icon>\n    </mat-chip>\n  </mat-chip-list>\n  <div class=\"file-subcontainer\">\n    <button mat-fab color=\"primary\" (click)=\"onDeleteFiles()\" [disabled]=\"!isFilesChosen()\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-raised-button color=\"accent\" (click)=\"addEsacFile()\" [disabled]=\"!isFilesChosen()\">\n      <span>Convert</span>\n      <mat-icon>swap_horiz</mat-icon>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .file-container > * {\n    margin: 10px; }\n  .file-container .file-button {\n    position: relative; }\n  .file-container .file-input {\n    cursor: pointer;\n    height: 100%;\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n    width: 56px; }\n  .file-container .file-list .mat-chip {\n    margin: 5px; }\n  .file-container .file-subcontainer > * {\n    margin: 0 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacAddFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EsacAddFileComponent = (function () {
    function EsacAddFileComponent(http) {
        this.http = http;
        this.files = [];
        this.createNewEsacFromURL = '/api/esac?parse=file';
        this.isSubmited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    EsacAddFileComponent.prototype.ngOnInit = function () {
    };
    EsacAddFileComponent.prototype.onChooseFiles = function () {
        if (this.file) {
            for (var _i = 0, _a = this.file.nativeElement.files; _i < _a.length; _i++) {
                var file = _a[_i];
                this.files.push(file);
            }
        }
    };
    EsacAddFileComponent.prototype.onDeleteFiles = function (index) {
        if (index) {
            this.files.splice(index, 1);
        }
        else {
            this.files = [];
        }
    };
    EsacAddFileComponent.prototype.isFilesChosen = function () {
        return this.files.length ? true : false;
    };
    EsacAddFileComponent.prototype.addEsacFile = function () {
        var _this = this;
        var input = new FormData();
        input.append('file', this.files[0]);
        return this.http.put(this.createNewEsacFromURL, input)
            .subscribe(function (data) {
            _this.isSubmited.emit({ text: 'EsAC added successfully' });
        }, function (error) {
            _this.isSubmited.emit({ text: 'Invalid file' });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('file'),
        __metadata("design:type", Object)
    ], EsacAddFileComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EsacAddFileComponent.prototype, "isSubmited", void 0);
    EsacAddFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-add-file',
            template: __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EsacAddFileComponent);
    return EsacAddFileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new-container\">\n  <form [formGroup]=\"form\" novalidate class=\"new-form\">\n    <mat-form-field>\n      <input matInput formControlName=\"name\" placeholder=\"Catalog\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"title\" placeholder=\"CUT\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"region\" placeholder=\"REG\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"source\" placeholder=\"TRD\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"signature\" placeholder=\"SIG\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"key\" placeholder=\"KEY*\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput matTextareaAutosize formControlName=\"melody\" placeholder=\"MEL*\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput matTextareaAutosize formControlName=\"remarks\" placeholder=\"BEM\"></textarea>\n    </mat-form-field>\n  </form>\n\n  <button mat-raised-button color=\"accent\" (click)=\"addEsac()\" [disabled]=\"form.invalid\">\n    <span>Add</span>\n    <mat-icon>add</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0; }\n\n.new-form {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .new-form * {\n    padding: 0 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacAddNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__ = __webpack_require__("../../../../../src/app/shared/consts/regexp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsacAddNewComponent = (function () {
    function EsacAddNewComponent(http) {
        this.http = http;
        this.createNewEsacFromURL = '/api/esac';
        this.isSubmited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    EsacAddNewComponent.prototype.ngOnInit = function () {
        this.form = this.newForm();
    };
    EsacAddNewComponent.prototype.addEsac = function () {
        var _this = this;
        return this.http.put(this.createNewEsacFromURL, this.form.value).subscribe(function (data) {
            _this.isSubmited.emit({ text: 'EsAC added successfully' });
        }, function (error) {
            _this.isSubmited.emit({ text: 'Error adding EsAC' });
        });
    };
    EsacAddNewComponent.prototype.newForm = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            source: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            region: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            signature: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ]),
            melody: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__["a" /* melody_regexp */])
            ]),
            remarks: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EsacAddNewComponent.prototype, "isSubmited", void 0);
    EsacAddNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-add-new',
            template: __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EsacAddNewComponent);
    return EsacAddNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <mat-card-header>\n    <mat-card-title>{{ esac.name }}</mat-card-title>\n    <mat-card-subtitle>{{ esac.title }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions class=\"card-actions\">\n    <button mat-raised-button color=\"accent\" *ngIf=\"!isMidiPlaying()\" (click)=\"playMidi(esac)\">\n      <span>Play</span>\n      <mat-icon>play_arrow</mat-icon>\n    </button>\n    <button mat-raised-button color=\"accent\" *ngIf=\"isMidiPlaying()\" (click)=\"stopMidi()\">\n      <span>Stop</span>\n      <mat-icon>stop</mat-icon>\n    </button>\n    <button mat-raised-button color=\"accent\" (click)=\"downloadMidi(esac)\">\n      <span>Download</span>\n      <mat-icon>file_download</mat-icon>\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  min-width: 220px;\n  margin: 10px 10px; }\n\n.card-actions {\n  text-align: center; }\n  .card-actions * {\n    margin-bottom: 5px; }\n\n.new-spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EsacCardComponent = (function () {
    function EsacCardComponent(mainService, midiPlayerService, messageDialogService) {
        this.mainService = mainService;
        this.midiPlayerService = midiPlayerService;
        this.messageDialogService = messageDialogService;
    }
    EsacCardComponent.prototype.ngOnInit = function () {
        this.esac.isPlaying = false;
    };
    EsacCardComponent.prototype.playMidi = function (esac) {
        var _this = this;
        this.mainService.esacToMidi(esac)
            .subscribe(function (data) {
            _this.esac.isPlaying = true;
            _this.midiPlayerService.setMidiSong(data, _this.esac.id);
            _this.midiPlayerService.playMidi();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Invalid EsAC');
        });
    };
    EsacCardComponent.prototype.stopMidi = function () {
        this.esac.isPlaying = false;
        this.midiPlayerService.stopMidi();
    };
    EsacCardComponent.prototype.isMidiPlaying = function () {
        return this.checkEsacId() && this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
    };
    EsacCardComponent.prototype.checkEsacId = function () {
        return this.esac.id === this.midiPlayerService.getEsacId();
    };
    EsacCardComponent.prototype.downloadMidi = function (esac) {
        var _this = this;
        this.mainService.esacToMidiFile(esac)
            .subscribe(function (data) {
            var blob = new Blob([data], { type: 'audio/midi' });
            __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](blob, esac.name + '_' + esac.title + '.mid');
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error downloading EsAC');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EsacCardComponent.prototype, "esac", void 0);
    EsacCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-card',
            template: __webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_3__services_midi_player_service__["a" /* MidiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], EsacCardComponent);
    return EsacCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-close\">\n  <button (click)=\"closeDialog()\" mat-icon-button matDialogClose>\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <button mat-raised-button color=\"accent\" (click)=\"downloadAllMidi()\">\n      <span>Download All</span>\n      <mat-icon>file_download</mat-icon>\n  </button>\n  <div class=\"card-container\">\n    <div *ngFor=\"let esac of esacs; index as idx;\">\n      <esac-card [esac]=\"esac\"></esac-card>\n    </div>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-close {\n  text-align: right; }\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacConvertDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EsacConvertDialogComponent = (function () {
    function EsacConvertDialogComponent(dialogRef, data, mainService, midiPlayerService, messageDialogService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.mainService = mainService;
        this.midiPlayerService = midiPlayerService;
        this.messageDialogService = messageDialogService;
    }
    EsacConvertDialogComponent.prototype.ngOnInit = function () {
        this.setInfoData();
    };
    EsacConvertDialogComponent.prototype.setInfoData = function () {
        this.esacs = this.data;
    };
    EsacConvertDialogComponent.prototype.closeDialog = function () {
        this.midiPlayerService.stopMidi();
    };
    EsacConvertDialogComponent.prototype.downloadAllMidi = function () {
        var _this = this;
        this.mainService.multipleEsacToMidiFile(this.esacs)
            .subscribe(function (data) {
            data.forEach(function (midi, index) {
                var blob = new Blob([midi], { type: 'audio/midi' });
                var esac = _this.esacs[index];
                __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, esac.name + '_' + esac.title + '.mid');
            });
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error downloading EsACs');
        });
    };
    EsacConvertDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-convert-dialog',
            template: __webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__services_midi_player_service__["a" /* MidiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], EsacConvertDialogComponent);
    return EsacConvertDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p>Are you sure you want to delete this ESAC?</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" (click)=\"confirm(true)\">Yes</button>\n  <button mat-raised-button color=\"accent\" (click)=\"confirm(false)\">No</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n  margin: 20px 0; }\n\n.mat-dialog-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacDeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EsacDeleteDialogComponent = (function () {
    function EsacDeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.confirmation = false;
    }
    EsacDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    EsacDeleteDialogComponent.prototype.confirm = function (decision) {
        this.dialogRef.close(decision);
    };
    EsacDeleteDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-delete-dialog',
            template: __webpack_require__("../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], EsacDeleteDialogComponent);
    return EsacDeleteDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-close\">\n  <button mat-icon-button matDialogClose>\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"new-container\">\n    <form [formGroup]=\"form\" novalidate class=\"new-form\">\n      <mat-form-field>\n        <input matInput formControlName=\"name\" placeholder=\"Catalog\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"title\" placeholder=\"CUT\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"region\" placeholder=\"REG\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"source\" placeholder=\"TRD\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"signature\" placeholder=\"SIG\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"key\" placeholder=\"KEY*\">\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput matTextareaAutosize formControlName=\"melody\" placeholder=\"MEL*\"></textarea>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput matTextareaAutosize formControlName=\"remarks\" placeholder=\"BEM\"></textarea>\n      </mat-form-field>\n    </form>\n\n    <button mat-raised-button color=\"accent\" (click)=\"editEsac()\" [disabled]=\"form.invalid\">\n      <span>Edit</span>\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 0; }\n\n.new-form {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .new-form * {\n    padding: 0 2px; }\n\n.dialog-close {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacEditDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__ = __webpack_require__("../../../../../src/app/shared/consts/regexp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EsacEditDialogComponent = (function () {
    function EsacEditDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EsacEditDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fillForm();
    };
    EsacEditDialogComponent.prototype.editEsac = function () {
        this.dialogRef.close(this.form.value);
    };
    EsacEditDialogComponent.prototype.fillForm = function () {
        var esac = this.data;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.name),
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.title),
            source: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.source),
            region: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.region),
            signature: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.signature),
            key: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.key, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
            ]),
            melody: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.melody, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_consts_regexp__["a" /* melody_regexp */])
            ]),
            remarks: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](esac.remarks)
        });
    };
    EsacEditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'esac-edit-dialog',
            template: __webpack_require__("../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], EsacEditDialogComponent);
    return EsacEditDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main-card/main-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n    <div class=\"card-speed\" *ngIf=\"isMidiPlaying()\">\n        <button mat-icon-button (click)=\"slowDownMidi()\">\n            <mat-icon>remove</mat-icon>\n        </button>\n        <mat-slider disabled [min]=\"speedData.midiSpeedMin\" [max]=\"speedData.midiSpeedMax\" [step]=\"speedData.midiSpeedStep\" [value]=\"speedData.midiSpeedValue\"></mat-slider>\n        <button mat-icon-button (click)=\"speedUpMidi()\">\n            <mat-icon>add</mat-icon>\n        </button>\n    </div>\n    <div class=\"card-buttons\" *ngIf=\"isExpanded\">\n        <button mat-icon-button (click)=\"downloadEsac()\" color=\"accent\">\n            <mat-icon>file_download</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"!isMidiPlaying()\" (click)=\"playMidi()\" color=\"accent\">\n            <mat-icon>play_arrow</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"isMidiPlaying()\" (click)=\"stopMidi()\" color=\"accent\">\n            <mat-icon>stop</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"convertEsac()\" color=\"accent\">\n            <mat-icon>swap_horiz</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"editEsac()\">\n            <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"deleteEsac(esac.id)\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n    <mat-card-header>\n        <mat-card-title>{{ esac.name }}</mat-card-title>\n        <mat-card-subtitle>{{ esac.title }}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <p *ngIf=\"esac.region.length && isExpanded\">\n            <span class=\"card-content--bold\">REG:</span>\n            <span>{{ esac.region }}</span>\n        </p>\n        <p *ngIf=\"esac.source.length && isExpanded\">\n            <span class=\"card-content--bold\">TRD:</span>\n            <span>{{ esac.source }}</span>\n        </p>\n        <p *ngIf=\"esac.signature.length && isExpanded\">\n            <span class=\"card-content--bold\">SIG:</span>\n            <span>{{ esac.signature }}</span>\n        </p>\n        <p *ngIf=\"esac.key.length\">\n            <span class=\"card-content--bold\">KEY:</span>\n            <span>{{ esac.key }}</span>\n        </p>\n        <p *ngIf=\"esac.melody.length\">\n            <span class=\"card-content--bold\">MEL:</span>\n            <span class=\"whitespace\">{{ esac.melody }}</span>\n        </p>\n        <p *ngIf=\"esac.remarks.length && isExpanded\">\n            <span class=\"card-content--bold\">BEM:</span>\n            <span>{{ esac.remarks }}</span>\n        </p>\n    </mat-card-content>\n    <mat-card-footer>\n        <div class=\"card-footer\">\n            <button mat-button (click)=\"toggleCard()\" *ngIf=\"!isExpanded\" class=\"card-footer-button\">\n                <mat-icon>expand_more</mat-icon>\n            </button>\n            <button mat-button (click)=\"toggleCard()\" *ngIf=\"isExpanded\" class=\"card-footer-button\">\n                <mat-icon>expand_less</mat-icon>\n            </button>\n        </div>\n    </mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/main/main-card/main-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  width: 320px;\n  max-width: 350px;\n  margin: 10px 5px;\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.card-buttons {\n  text-align: right; }\n\n.card-speed {\n  text-align: center; }\n\n.card-content--bold {\n  font-weight: bold; }\n\n.whitespace {\n  white-space: pre-wrap; }\n\n.card-footer-button {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main-card/main-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_esac_service__ = __webpack_require__("../../../../../src/app/main/services/esac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__one_esac_convert_dialog_one_esac_convert_dialog_component__ = __webpack_require__("../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__esac_edit_dialog_esac_edit_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__esac_delete_dialog_esac_delete_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainCardComponent = (function () {
    function MainCardComponent(mainService, dialog, esacService, midiPlayerService, messageDialogService) {
        this.mainService = mainService;
        this.dialog = dialog;
        this.esacService = esacService;
        this.midiPlayerService = midiPlayerService;
        this.messageDialogService = messageDialogService;
        this.updated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.speedData = this.midiPlayerService.getSpeedData();
    }
    MainCardComponent.prototype.ngOnInit = function () {
    };
    MainCardComponent.prototype.ngOnDestroy = function () {
        this.stopMidi();
    };
    MainCardComponent.prototype.convertEsac = function (index) {
        var esac = this.esac;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__one_esac_convert_dialog_one_esac_convert_dialog_component__["a" /* OneEsacConvertDialogComponent */], {
            autoFocus: false,
            minWidth: 300,
            disableClose: true,
            data: esac
        });
    };
    MainCardComponent.prototype.playMidi = function () {
        var _this = this;
        this.mainService.esacToMidi(this.esac)
            .subscribe(function (data) {
            _this.speedData = _this.midiPlayerService.getSpeedData();
            _this.esac.isPlaying = true;
            _this.midiPlayerService.setMidiSong(data, _this.esac.id);
            _this.midiPlayerService.playMidi();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Invalid EsAC');
        });
    };
    MainCardComponent.prototype.stopMidi = function () {
        this.esac.isPlaying = false;
        this.midiPlayerService.stopMidi();
    };
    MainCardComponent.prototype.isMidiPlaying = function () {
        return this.checkEsacId() && this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
    };
    MainCardComponent.prototype.checkEsacId = function () {
        return this.esac.id === this.midiPlayerService.getEsacId();
    };
    MainCardComponent.prototype.slowDownMidi = function () {
        this.midiPlayerService.slowDownMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    MainCardComponent.prototype.speedUpMidi = function () {
        this.midiPlayerService.speedUpMidi();
        this.speedData = this.midiPlayerService.getSpeedData();
    };
    MainCardComponent.prototype.editEsac = function () {
        var _this = this;
        var esac = this.esac;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__esac_edit_dialog_esac_edit_dialog_component__["a" /* EsacEditDialogComponent */], {
            autoFocus: false,
            minWidth: 300,
            disableClose: true,
            data: esac
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.mainService.updateEsac(esac.id, result)
                    .subscribe(function (data) {
                    _this.esac = result;
                    _this.messageDialogService.displayMessageDialog('EsAC edited successfully');
                    _this.updated.emit();
                }, function (error) {
                    _this.messageDialogService.displayMessageDialog('Error editing EsAC');
                });
            }
        });
    };
    MainCardComponent.prototype.deleteEsac = function (esacId) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__esac_delete_dialog_esac_delete_dialog_component__["a" /* EsacDeleteDialogComponent */], {
            autoFocus: false,
            minWidth: 300,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.mainService.deleteEsac(esacId)
                    .subscribe(function () {
                    _this.esacService.deleteEsac(esacId);
                    _this.messageDialogService.displayMessageDialog('EsAC deleted successfully');
                }, function (error) {
                    _this.messageDialogService.displayMessageDialog('Error deleting EsAC');
                });
            }
        });
    };
    MainCardComponent.prototype.downloadEsac = function () {
        var esac = this.esac;
        var content = this.esacToString(esac);
        var blob = new Blob([content], { type: 'text/plain' });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, esac.name + '_' + esac.title + '.txt');
    };
    MainCardComponent.prototype.esacToString = function (esac) {
        var string = '';
        string += esac.name + '\n';
        string += 'CUT[' + esac.title + ']\n';
        string += 'REG[' + esac.region + ']\n';
        string += 'TRD[' + esac.source + ']\n';
        string += 'SIG[' + esac.signature + ']\n';
        string += 'KEY[' + esac.key + ']\n';
        string += 'MEL[' + esac.melody + ']\n';
        string += 'BEM[' + esac.remarks + ']\n';
        string += '\n';
        return string;
    };
    MainCardComponent.prototype.toggleCard = function () {
        this.isExpanded = !this.isExpanded;
        if (!this.isExpanded && this.esac.isPlaying) {
            this.stopMidi();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MainCardComponent.prototype, "esac", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainCardComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], MainCardComponent.prototype, "updated", void 0);
    MainCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-card',
            template: __webpack_require__("../../../../../src/app/main/main-card/main-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main-card/main-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_esac_service__["a" /* EsacService */],
            __WEBPACK_IMPORTED_MODULE_5__services_midi_player_service__["a" /* MidiPlayerService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], MainCardComponent);
    return MainCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-container\">\n  <div class=\"top-container--left\">\n    <div>\n      <mat-form-field class=\"search-type\">\n        <mat-select placeholder=\"Type\" [(value)]=\"searchField\">\n          <mat-option *ngFor=\"let searchField of searchFields\" [value]=\"searchField.field\">\n            {{ searchField.placeholder }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"search-term\">\n        <input matInput placeholder=\"Search term\" [(ngModel)]=\"searchTerm\">\n      </mat-form-field>\n      <button mat-mini-fab (click)=\"search()\" [disabled]=\"isSearchIncomplete()\" color=\"accent\" class=\"search-button\">\n        <mat-icon>search</mat-icon>\n      </button>\n    </div>\n    <mat-chip-list *ngIf=\"searchTerms\" class=\"search-list\">\n      <mat-chip *ngFor=\"let searchTerm of searchTerms; index as idx;\">\n        <span>{{ searchTerm.field }}: {{ searchTerm.term }}</span>\n        <mat-icon matChipRemove (click)=\"removeSearch(idx)\">cancel</mat-icon>\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n  <div class=\"top-container--right\" *ngIf=\"isAnyEsac()\">\n    <button mat-icon-button (click)=\"downloadEsac()\" class=\"top-item\">\n      <mat-icon>file_download</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"convertEsac(-1)\" class=\"top-item\">\n      <mat-icon>swap_horiz</mat-icon>\n    </button>\n    <div class=\"top-menu--large top-item\">\n      <button mat-button (click)=\"expandAll()\">Expand all</button>\n      <button mat-button (click)=\"closeAll()\">Collapse all</button>\n    </div>\n    <div class=\"top-menu--small top-item\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu [overlapTrigger]=\"false\">\n        <button mat-menu-item (click)=\"expandAll()\">Expand all</button>\n        <button mat-menu-item (click)=\"closeAll()\">Collapse all</button>\n      </mat-menu>\n    </div>\n  </div>\n</div>\n<div class=\"card-container\">\n  <div *ngFor=\"let esac of esacs; index as idx;\">\n    <main-card [esac]=\"esac\" [isExpanded]=esacsExpanded[idx] (updated)=\"handleEsacUpdate()\"></main-card>\n  </div>\n</div>\n\n<button mat-fab color=\"accent\" class=\"button-add\" (click)=\"addEsac()\">\n  <mat-icon>add</mat-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-container {\n  margin: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  @media screen and (min-width: 721px) {\n    .top-container .top-item {\n      margin-left: 5px; } }\n  .top-container .top-container--left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .top-container .top-container--left .search-list .mat-chip {\n      margin: 2px; }\n  .top-container .top-container--right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n@media screen and (max-width: 720px) {\n  .top-menu--large {\n    display: none; } }\n\n@media screen and (min-width: 721px) {\n  .top-menu--small {\n    display: none; } }\n\n.search-type {\n  width: 90px; }\n\n.search-term {\n  width: 150px;\n  margin-left: 2px; }\n\n.search-button {\n  margin-left: 2px; }\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.button-add {\n  position: fixed;\n  right: 20px;\n  bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_esac_service__ = __webpack_require__("../../../../../src/app/main/services/esac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__esac_add_dialog_esac_add_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__esac_convert_dialog_esac_convert_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = (function () {
    function MainComponent(mainService, dialog, esacService, messageDialogService) {
        this.mainService = mainService;
        this.dialog = dialog;
        this.esacService = esacService;
        this.messageDialogService = messageDialogService;
        this.esacs = null;
        this.esacsExpanded = [];
        this.searchTerm = '';
        this.searchTerms = [];
        this.searchFields = [
            { "field": "name", "placeholder": "Name" },
            { "field": "title", "placeholder": "CUT" },
            { "field": "region", "placeholder": "REG" },
            { "field": "source", "placeholder": "TRD" },
            { "field": "signature", "placeholder": "SIG" },
            { "field": "key", "placeholder": "KEY" },
            { "field": "melody", "placeholder": "MEL" },
            { "field": "melody_raw", "placeholder": "Raw melody" },
            { "field": "melody_rhythm", "placeholder": "Rhythm" },
            { "field": "remarks", "placeholder": "BEM" }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getEsacs();
    };
    MainComponent.prototype.getEsacs = function () {
        var _this = this;
        this.mainService.getEsacs()
            .subscribe(function (data) {
            _this.esacService.setEsacs(data);
            _this.esacs = _this.esacService.getEsacs();
            _this.fillEsacsExpanded(_this.esacs.length);
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error fetching EsACs');
        });
    };
    MainComponent.prototype.isAnyEsac = function () {
        return !this.esacs || this.esacs.length === 0 ? false : true;
    };
    MainComponent.prototype.search = function () {
        var _this = this;
        if (!this.isSearchIncomplete()) {
            this.searchTerms.push({ field: this.searchField, term: this.searchTerm });
        }
        this.mainService.searchEsacs(this.searchTerms)
            .subscribe(function (data) {
            _this.esacService.setEsacs(data);
            _this.esacs = _this.esacService.getEsacs();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error searching EsACs');
        });
        this.resetSearch();
    };
    MainComponent.prototype.removeSearch = function (index) {
        var _this = this;
        this.searchTerms.splice(index, 1);
        this.mainService.searchEsacs(this.searchTerms)
            .subscribe(function (data) {
            _this.esacService.setEsacs(data);
            _this.esacs = _this.esacService.getEsacs();
        }, function (error) {
            _this.messageDialogService.displayMessageDialog('Error searching EsACs');
        });
    };
    MainComponent.prototype.resetSearch = function () {
        this.searchTerm = '';
        this.searchField = undefined;
    };
    MainComponent.prototype.isSearchIncomplete = function () {
        return this.searchField === undefined || this.searchTerm === '';
    };
    MainComponent.prototype.fillEsacsExpanded = function (length) {
        for (var i = 0; i < length; i++) {
            this.esacsExpanded.push(false);
        }
    };
    MainComponent.prototype.toggleCard = function (index) {
        this.esacsExpanded[index] = !this.esacsExpanded[index];
    };
    MainComponent.prototype.expandAll = function () {
        this.esacsExpanded.fill(true);
    };
    MainComponent.prototype.closeAll = function () {
        this.esacsExpanded.fill(false);
    };
    MainComponent.prototype.addEsac = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__esac_add_dialog_esac_add_dialog_component__["a" /* EsacAddDialogComponent */], {
            autoFocus: false,
            minWidth: 300,
            width: '80%',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.search();
        });
    };
    MainComponent.prototype.handleEsacUpdate = function () {
        this.search();
    };
    MainComponent.prototype.convertEsac = function (index) {
        var esacs = this.esacService.getEsacs();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__esac_convert_dialog_esac_convert_dialog_component__["a" /* EsacConvertDialogComponent */], {
            autoFocus: false,
            minWidth: 300,
            disableClose: true,
            data: esacs
        });
    };
    MainComponent.prototype.downloadEsac = function () {
        var esacs = this.esacService.getEsacs();
        var content = this.esacsToString(esacs);
        var blob = new Blob([content], { type: 'text/plain' });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, 'esacs.txt');
    };
    MainComponent.prototype.esacsToString = function (esacs) {
        var string = '';
        for (var _i = 0, esacs_1 = esacs; _i < esacs_1.length; _i++) {
            var esac = esacs_1[_i];
            string += esac.name + '\n';
            string += 'CUT[' + esac.title + ']\n';
            string += 'REG[' + esac.region + ']\n';
            string += 'TRD[' + esac.source + ']\n';
            string += 'SIG[' + esac.signature + ']\n';
            string += 'KEY[' + esac.key + ']\n';
            string += 'MEL[' + esac.melody + ']\n';
            string += 'BEM[' + esac.remarks + ']\n';
            string += '\n';
        }
        return string;
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_esac_service__["a" /* EsacService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_esac_service__ = __webpack_require__("../../../../../src/app/main/services/esac.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__esac_add_dialog_esac_add_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__esac_convert_dialog_esac_convert_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-convert-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__esac_add_dialog_esac_add_new_esac_add_new_component__ = __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-new/esac-add-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__esac_add_dialog_esac_add_file_esac_add_file_component__ = __webpack_require__("../../../../../src/app/main/esac-add-dialog/esac-add-file/esac-add-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__esac_edit_dialog_esac_edit_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-edit-dialog/esac-edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__esac_delete_dialog_esac_delete_dialog_component__ = __webpack_require__("../../../../../src/app/main/esac-delete-dialog/esac-delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__esac_convert_dialog_esac_card_esac_card_component__ = __webpack_require__("../../../../../src/app/main/esac-convert-dialog/esac-card/esac-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_card_main_card_component__ = __webpack_require__("../../../../../src/app/main/main-card/main-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__one_esac_convert_dialog_one_esac_convert_dialog_component__ = __webpack_require__("../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__main_component__["a" /* MainComponent */] },
];
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__esac_add_dialog_esac_add_dialog_component__["a" /* EsacAddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__esac_convert_dialog_esac_convert_dialog_component__["a" /* EsacConvertDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__esac_add_dialog_esac_add_new_esac_add_new_component__["a" /* EsacAddNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__esac_add_dialog_esac_add_file_esac_add_file_component__["a" /* EsacAddFileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__esac_edit_dialog_esac_edit_dialog_component__["a" /* EsacEditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__esac_delete_dialog_esac_delete_dialog_component__["a" /* EsacDeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__esac_convert_dialog_esac_card_esac_card_component__["a" /* EsacCardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_card_main_card_component__["a" /* MainCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__one_esac_convert_dialog_one_esac_convert_dialog_component__["a" /* OneEsacConvertDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__esac_add_dialog_esac_add_dialog_component__["a" /* EsacAddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__esac_convert_dialog_esac_convert_dialog_component__["a" /* EsacConvertDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__esac_edit_dialog_esac_edit_dialog_component__["a" /* EsacEditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__esac_delete_dialog_esac_delete_dialog_component__["a" /* EsacDeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__one_esac_convert_dialog_one_esac_convert_dialog_component__["a" /* OneEsacConvertDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */],
                __WEBPACK_IMPORTED_MODULE_8__services_midi_player_service__["a" /* MidiPlayerService */],
                __WEBPACK_IMPORTED_MODULE_9__services_esac_service__["a" /* EsacService */]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-close\">\n  <button (click)=\"closeDialog()\" mat-icon-button matDialogClose>\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"card-container\">\n      <esac-card [esac]=\"esac\"></esac-card>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-close {\n  text-align: right; }\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneEsacConvertDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../src/app/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_midi_player_service__ = __webpack_require__("../../../../../src/app/main/services/midi-player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var OneEsacConvertDialogComponent = (function () {
    function OneEsacConvertDialogComponent(dialogRef, data, mainService, midiPlayerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.mainService = mainService;
        this.midiPlayerService = midiPlayerService;
    }
    OneEsacConvertDialogComponent.prototype.ngOnInit = function () {
        this.esac = this.data;
    };
    OneEsacConvertDialogComponent.prototype.closeDialog = function () {
        this.midiPlayerService.stopMidi();
    };
    OneEsacConvertDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'one-esac-convert-dialog',
            template: __webpack_require__("../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/one-esac-convert-dialog/one-esac-convert-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_3__services_midi_player_service__["a" /* MidiPlayerService */]])
    ], OneEsacConvertDialogComponent);
    return OneEsacConvertDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/services/esac.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsacService; });
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

var EsacService = (function () {
    function EsacService() {
    }
    EsacService.prototype.setEsacs = function (esacsArray) {
        this.esacs = esacsArray;
    };
    EsacService.prototype.getEsacs = function () {
        return this.esacs;
    };
    EsacService.prototype.deleteEsac = function (id) {
        var toDelete = this.esacs.find(function (x) { return x.id === id; });
        var index = this.esacs.indexOf(toDelete);
        this.esacs.splice(index, 1);
    };
    EsacService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EsacService);
    return EsacService;
}());



/***/ }),

/***/ "../../../../../src/app/main/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.urlGetEsacs = '/api/esac/list';
        this.urlEsac2Midi = '/api/esac2midi';
        this.urlSearchEsacs = '/api/esac/search';
        this.urlEsac2MidiFile = '/api/esac2midi?format=file';
        this.esacEndpoint = '/api/esac';
    }
    MainService.prototype.getEsacs = function () {
        return this.http.get(this.urlGetEsacs);
    };
    MainService.prototype.esacToMidi = function (esac) {
        return this.http.post(this.urlEsac2Midi, esac);
    };
    MainService.prototype.esacToMidiFile = function (esac) {
        return this.http.post(this.urlEsac2MidiFile, esac, { responseType: 'arraybuffer' });
    };
    MainService.prototype.multipleEsacToMidiFile = function (esacs) {
        var httpCalls = [];
        for (var _i = 0, esacs_1 = esacs; _i < esacs_1.length; _i++) {
            var esac = esacs_1[_i];
            httpCalls.push(this.http.post(this.urlEsac2MidiFile, esac, { responseType: 'arraybuffer' }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])(httpCalls);
    };
    MainService.prototype.searchEsacs = function (terms) {
        return this.http.post(this.urlSearchEsacs, terms);
    };
    MainService.prototype.deleteEsac = function (id) {
        return this.http.delete(this.esacEndpoint + '/' + id);
    };
    MainService.prototype.updateEsac = function (id, result) {
        return this.http.patch(this.esacEndpoint + '/' + id, JSON.stringify(result));
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/main/services/midi-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidiPlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MidiPlayerService = (function () {
    function MidiPlayerService(messageDialogService) {
        var _this = this;
        this.messageDialogService = messageDialogService;
        this.player = MIDI.Player;
        this.midiSong = {};
        this.isPlaying = false;
        this.midiSpeedValue = 1;
        this.midiSpeedMax = 0.5;
        this.midiSpeedMin = 1.5;
        this.midiSpeedStep = 0.1;
        this.isMidiLoaded = false;
        MIDI.loadPlugin({
            soundfontUrl: '../../../assets/soundfont/',
            onsuccess: function () {
                _this.isMidiLoaded = true;
            }
        });
    }
    MidiPlayerService.prototype.setMidiSong = function (midiFile, midiId) {
        this.midiSong = midiFile;
        this.currentEsacId = midiId;
    };
    MidiPlayerService.prototype.getMidiSong = function () {
        return this.midiSong;
    };
    MidiPlayerService.prototype.getEsacId = function () {
        return this.currentEsacId;
    };
    MidiPlayerService.prototype.isMidiPlaying = function () {
        return this.isPlaying;
    };
    MidiPlayerService.prototype.playMidi = function () {
        var _this = this;
        if (this.isMidiPlaying) {
            this.stopMidi();
        }
        if (this.isMidiLoaded) {
            var midi = this.getMidiSong();
            this.player.loadFile(midi.midi64, this.player.start);
            this.isPlaying = true;
            this.player.removeListener();
            this.player.addListener(function (currentSong) {
                if (currentSong.now === currentSong.end) {
                    _this.resetMidiSettings();
                }
            });
        }
        else {
            this.messageDialogService.displayMessageDialog('Playing MIDI unsupported');
        }
    };
    MidiPlayerService.prototype.resetMidiSettings = function () {
        this.isPlaying = false;
        this.midiSpeedValue = 1;
        this.player.timeWarp = 1;
    };
    MidiPlayerService.prototype.stopMidi = function () {
        this.player.stop();
        this.isPlaying = false;
    };
    MidiPlayerService.prototype.speedUpMidi = function () {
        if (this.midiSpeedValue > this.midiSpeedMax) {
            this.stopMidi();
            this.player.timeWarp -= 0.1;
            this.midiSpeedValue -= 0.1;
            this.playMidi();
        }
    };
    MidiPlayerService.prototype.slowDownMidi = function () {
        if (this.midiSpeedValue < this.midiSpeedMin) {
            this.stopMidi();
            this.player.timeWarp += 0.1;
            this.midiSpeedValue += 0.1;
            this.playMidi();
        }
    };
    MidiPlayerService.prototype.getSpeedData = function () {
        return {
            midiSpeedValue: this.midiSpeedValue,
            midiSpeedMax: this.midiSpeedMax,
            midiSpeedMin: this.midiSpeedMin,
            midiSpeedStep: this.midiSpeedStep,
        };
    };
    MidiPlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_message_dialog_service__["a" /* MessageDialogService */]])
    ], MidiPlayerService);
    return MidiPlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/consts/regexp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return melody_regexp; });
var melody_regexp = '[0-7_\.b#\\-\+0^\ ()]*(\ \/\/)$';


/***/ }),

/***/ "../../../../../src/app/shared/message-dialog/message-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content class=\"dialog-message\">\n  <p>{{ message }}</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button (click)=\"close()\" color=\"accent\" class=\"dialog-button\">Ok</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/message-dialog/message-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-message {\n  text-align: center; }\n\n.dialog-button {\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/message-dialog/message-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MessageDialogComponent = (function () {
    function MessageDialogComponent(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    MessageDialogComponent.prototype.ngOnInit = function () {
    };
    MessageDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    MessageDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message-dialog',
            template: __webpack_require__("../../../../../src/app/shared/message-dialog/message-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/message-dialog/message-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], MessageDialogComponent);
    return MessageDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/message-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_dialog_message_dialog_component__ = __webpack_require__("../../../../../src/app/shared/message-dialog/message-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageDialogService = (function () {
    function MessageDialogService(dialog) {
        this.dialog = dialog;
    }
    MessageDialogService.prototype.displayMessageDialog = function (message) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__message_dialog_message_dialog_component__["a" /* MessageDialogComponent */], {
            autoFocus: true,
            minWidth: 300,
            disableClose: true,
            data: message
        });
    };
    MessageDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], MessageDialogService);
    return MessageDialogService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_dialog_service__ = __webpack_require__("../../../../../src/app/shared/services/message-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_dialog_message_dialog_component__ = __webpack_require__("../../../../../src/app/shared/message-dialog/message-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__message_dialog_message_dialog_component__["a" /* MessageDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__message_dialog_message_dialog_component__["a" /* MessageDialogComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__message_dialog_message_dialog_component__["a" /* MessageDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_message_dialog_service__["a" /* MessageDialogService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map