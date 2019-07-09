(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote></app-quote>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-detail/quote-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-detail/quote-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{quote.description}}</p>\n<button class=\"btn btn-outline-danger\" (click)= 'goalDelete(true)'>Delete</button>\n<p>This quote was published  {{quote.completeDate|dateCount}}days ago</p>\n<app-vote></app-vote>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-form/quote-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2 class=\"text-center\">Create Your Quote:</h2>\n    <hr>\n    <form (ngSubmit)='submitQuote()' #quoteForm='ngForm'>\n        <div class=\"form-group\">\n  \n            <label for=\"name\">Author</label>\n            <input type=\"text\" required class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.name\" name=\"name\" #name='ngModel' required>\n                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                   <p>Your name is required</p>\n                  </div>\n        </div>\n        <div class=\"form-group\">\n  \n            <label for=\"description\">Enter your Quote</label>\n            <textarea class=\"form-control\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.description\" name=\"description\" #description=\"ngModel\" required></textarea>\n            <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-danger\">\n                        <p>Quote is required</p>\n                      </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"complete\">Published Date</label>\n            <input type='date' id=\"complete\"  [(ngModel)]=\"newQuote.completeDate\" name=\"completeDate\" #completeDate=\"ngModel\" required>\n            <div [hidden]=\"completeDate.valid || completeDate.pristine\" class=\"alert alert-danger\">\n             <p>Date is required</p>\n           </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-success\">Add Quote</button>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote/quote.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"top\" style=\"text-align:center\">\n      <h1>\"Quotella</h1>\n      <hr>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h4>Posted Quotes</h4>\n        <ul>\n          <div *ngFor='let quote of quotes;let i = index'>\n               <li>{{quote.name}} </li>\n              <button (click)='toggleDetails(i)' class=\"btn btn-outline-primary\">View Quote</button>\n         <app-quote-detail *ngIf='quote.showDescription' [quote]='quote' (isComplete) = 'deleteGoal($event,i)'></app-quote-detail>\n         </div>\n        </ul>\n      </div>\n      <div class=\"col-md-5\">\n        <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n      </div>\n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vote/vote.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vote/vote.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <button class=\"up btn btn-outline-success\" (click)=\"thumbUp()\">{{tup}} <img src=\"data:image/png;base64,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\" alt=\"\" width=\"30px\" height=\"25px\"></button>\n    <button  class=\"down btn btn-outline-danger\"(click)=\"thumbDown()\">{{tdown}} <img src=\"data:image/jpeg;base64,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\" alt=\"\" width=\"30px\"height=\"25px\"></button>\n  </p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-detail/quote-detail.component */ "./src/app/quote-detail/quote-detail.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailComponent"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteFormComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_8__["QuoteComponent"],
                _vote_vote_component__WEBPACK_IMPORTED_MODULE_9__["VoteComponent"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_10__["DateCountPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds
        var secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
        var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
        var dateCounter = dateDifferenceSeconds / secondsInDay;
        if (dateCounter > 1) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/quote-detail/quote-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbC9xdW90ZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/quote-detail/quote-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.ts ***!
  \********************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuoteDetailComponent = /** @class */ (function () {
    function QuoteDetailComponent() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteDetailComponent.prototype.goalDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], QuoteDetailComponent.prototype, "quote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], QuoteDetailComponent.prototype, "isComplete", void 0);
    QuoteDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-detail',
            template: __webpack_require__(/*! raw-loader!./quote-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-detail/quote-detail.component.html"),
            styles: [__webpack_require__(/*! ./quote-detail.component.css */ "./src/app/quote-detail/quote-detail.component.css")]
        })
    ], QuoteDetailComponent);
    return QuoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        })
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, name, description, completeDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completeDate = completeDate;
        this.showDescription = false;
    }
    Quote.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Date }
    ]; };
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n    background-color:black;\n  }\n  .one{\n    border-radius: 50%;\n  }\n  ul{\n    list-style-type: none;\n  }\n  .row{\n    color: aliceblue;\n    background-image: url('https://images.pexels.com/photos/269810/pexels-photo-269810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');\n    margin: 2px;\n    width:100%;\n    background-position-y: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQiwrSEFBK0g7SUFDL0gsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICB9XG4gIC5vbmV7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIHVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAucm93e1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNjk4MTAvcGV4ZWxzLXBob3RvLTI2OTgxMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDAnKTtcbiAgICBtYXJnaW46IDJweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'NF', 'Happiness is just a moment, joy is something you actually carry around with you...', new Date(2019, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'NF', 'Happiness is just a moment, joy is something you actually carry around with you...', new Date(2019, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'NF', 'Happiness is just a moment, joy is something you actually carry around with you...', new Date(2019, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'NF', 'Happiness is just a moment, joy is something you actually carry around with you...', new Date(2019, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'NF', 'Happiness is just a moment, joy is something you actually carry around with you...', new Date(2019, 3, 14)),
        ];
    }
    QuoteComponent.prototype.toggleDetails = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.deleteGoal = function (isComplete, index) {
        if (isComplete) {
            var toDelete = confirm("Are you sure you want to delete " + this.quotes[index].name + "?");
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        })
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/vote/vote.component.css":
/*!*****************************************!*\
  !*** ./src/app/vote/vote.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".up{\n    width: 150px;\n    border-radius: 25px;\n    background-color: yellow;\n  }\n  .down{\n      width: 150px;\n      border-radius: 25px;\n      background-color: yellow;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjtFQUNBO01BQ0ksWUFBWTtNQUNaLG1CQUFtQjtNQUNuQix3QkFBd0I7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC92b3RlL3ZvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLmRvd257XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VoteComponent = /** @class */ (function () {
    function VoteComponent() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tup = 0;
        this.tdown = 0;
    }
    VoteComponent.prototype.thumbUp = function () {
        this.tup = this.tup + 1;
    };
    VoteComponent.prototype.thumbDown = function () {
        this.tdown = this.tdown + 1;
    };
    VoteComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], VoteComponent.prototype, "isComplete", void 0);
    VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__(/*! raw-loader!./vote.component.html */ "./node_modules/raw-loader/index.js!./src/app/vote/vote.component.html"),
            styles: [__webpack_require__(/*! ./vote.component.css */ "./src/app/vote/vote.component.css")]
        })
    ], VoteComponent);
    return VoteComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Aki/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map