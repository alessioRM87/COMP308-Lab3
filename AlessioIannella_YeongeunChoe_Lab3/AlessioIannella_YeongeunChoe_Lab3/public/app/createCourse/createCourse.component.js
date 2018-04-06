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
var router_1 = require("@angular/router");
var authentication_service_1 = require("../services/authentication.service");
var course_service_1 = require("../services/course.service");
var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(router, authenticationService, courseService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.courseService = courseService;
    }
    CreateCourseComponent.prototype.clearErrors = function () {
        this.courseError = "";
    };
    CreateCourseComponent.prototype.createCourse = function (courseCode, courseName, section, semester) {
        var _this = this;
        this.clearErrors();
        var courseRequest = {
            courseCode: courseCode,
            courseName: courseName,
            section: section,
            semester: semester
        };
        this.courseService.createCourse(courseRequest).subscribe(function (data) {
            _this.router.navigate(['home']);
        }, function (err) {
            console.log("THERE WAS AN ERROR!", err);
            _this.courseError = err.error.message;
        }, function () {
            console.log("CREATE COURSE COMPLETED");
        });
    };
    CreateCourseComponent = __decorate([
        core_1.Component({
            selector: 'createCourse',
            templateUrl: 'app/createCourse/createCourse.template.html',
            styleUrls: ['app/createCourse/createCourse.template.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService,
            course_service_1.CourseService])
    ], CreateCourseComponent);
    return CreateCourseComponent;
}());
exports.CreateCourseComponent = CreateCourseComponent;
//# sourceMappingURL=createCourse.component.js.map