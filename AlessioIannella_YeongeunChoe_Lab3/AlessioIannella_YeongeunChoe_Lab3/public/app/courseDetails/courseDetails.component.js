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
var course_service_1 = require("../services/course.service");
var students_service_1 = require("../services/students.service");
var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(router, courseService, studentsService) {
        this.router = router;
        this.courseService = courseService;
        this.studentsService = studentsService;
        this.course = courseService.selectedCourse;
        this.students = studentsService.registeredStudents;
    }
    CourseDetailsComponent.prototype.updateCourse = function (courseID, courseCode, courseName, section, semester) {
        var _this = this;
        console.log("UPDATE COURSE CLICKED: ", courseCode, courseName, section, semester);
        var updateRequest = {
            courseCode: courseCode,
            courseName: courseName,
            section: section,
            semester: semester
        };
        this.courseService.updateCourseByID(courseID, updateRequest).subscribe(function (data) {
            _this.router.navigate(['home']);
        }, function (err) {
            _this.error = err.error.message;
        }, function () {
            console.log('UPDATE COURSE COMPLETED');
        });
    };
    CourseDetailsComponent.prototype.deleteCourse = function (courseID) {
        var _this = this;
        console.log("DELETE COURSE CLICKED: ", courseID);
        this.courseService.deleteCourseByID(courseID).subscribe(function (data) {
            console.log("COURSE DELETED SUCCESS");
            _this.router.navigate(['home']);
        }, function (err) {
            console.log("COURSE DELETED ERROR");
            _this.error = err.error.message;
        }, function () {
            console.log('DELETE COURSE COMPLETED');
        });
    };
    CourseDetailsComponent = __decorate([
        core_1.Component({
            selector: 'courseDetails',
            templateUrl: 'app/courseDetails/courseDetails.template.html',
            styleUrls: ['app/courseDetails/courseDetails.template.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            course_service_1.CourseService,
            students_service_1.StudentsService])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());
exports.CourseDetailsComponent = CourseDetailsComponent;
//# sourceMappingURL=courseDetails.component.js.map