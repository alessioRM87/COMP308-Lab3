"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("./services/authentication.service");
var course_service_1 = require("./services/course.service");
var router_1 = require("@angular/router");
var students_service_1 = require("./services/students.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, courseService, studentsService, router) {
        this.authenticationService = authenticationService;
        this.courseService = courseService;
        this.studentsService = studentsService;
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'first-angular-application',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            course_service_1.CourseService,
            students_service_1.StudentsService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map