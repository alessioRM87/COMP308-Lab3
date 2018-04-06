"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); //required for ngModel to work in HTML
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var courseDetails_component_1 = require("./courseDetails.component");
var courseDetails_routes_1 = require("./courseDetails.routes");
var CourseDetailsModule = /** @class */ (function () {
    function CourseDetailsModule() {
    }
    CourseDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forChild(courseDetails_routes_1.CourseDetailsRoutes),
            ],
            declarations: [
                courseDetails_component_1.CourseDetailsComponent
            ]
        })
    ], CourseDetailsModule);
    return CourseDetailsModule;
}());
exports.CourseDetailsModule = CourseDetailsModule;
//# sourceMappingURL=courseDetails.module.js.map