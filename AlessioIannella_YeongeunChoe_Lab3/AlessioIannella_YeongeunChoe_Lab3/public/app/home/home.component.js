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
var students_service_1 = require("../services/students.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authenticationService, courseService, studentsService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.courseService = courseService;
        this.studentsService = studentsService;
        console.log('Constructor of Home. User from authenticationService: ', authenticationService.user);
        this.user = authenticationService.user;
        courseService.getCourses().subscribe(function (data) {
            console.log('Home Constructor. Courses from course service: ', data);
            _this.courses = data;
        }, function (error) {
            console.log('Home Constructor. Courses from course service error: ', error);
            _this.courseError = error;
        }, function () {
            console.log('GET COURSES COMPLETED');
        });
        studentsService.getStudents().subscribe(function (data) {
            console.log('Home Constructor. Students from students service: ', data);
            _this.students = data;
        }, function (error) {
            console.log('Home Constructor. Students from students service error: ', error);
            _this.studentsError = error;
        }, function () {
            console.log('GET STUDENTS COMPLETED');
        });
    }
    HomeComponent.prototype.viewDetails = function (courseID) {
        console.log("VIEW DETAILS CLICKED FOR COURSE WITH ID: ", courseID);
    };
    HomeComponent.prototype.addCourse = function (courseID) {
        var _this = this;
        var registerRequest = {
            courseID: courseID,
            studentID: this.user._id
        };
        this.courseService.registerToCourse(registerRequest).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            _this.courseError = error.error.message;
        }, function () {
            console.log("ADD COURSE COMPLETED");
        });
    };
    HomeComponent.prototype.dropCourse = function (courseID) {
        var _this = this;
        var unregisterRequest = {
            courseID: courseID,
            studentID: this.user._id
        };
        this.courseService.unregisterFromCourse(unregisterRequest).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            _this.courseError = error.error.message;
        }, function () {
            console.log("DROP COURSE COMPLETED");
        });
    };
    HomeComponent.prototype.viewStudentInfo = function (studentID) {
        var _this = this;
        console.log("VIEW STUDENT INFO CLICKED FOR STUDENT WITH ID: ", studentID);
        this.studentsService.getStudentInfo(studentID).subscribe(function (data) {
            _this.router.navigate(['studentDetails']);
        }, function (err) {
            _this.studentsError = err.error.message;
        }, function () {
            console.log("GET STUDENT INFO COMPLETED");
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home/home.template.html',
            styleUrls: ['app/home/home.template.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService,
            course_service_1.CourseService,
            students_service_1.StudentsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map