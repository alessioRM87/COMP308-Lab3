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
require("rxjs/Rx");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
    }
    CourseService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || 'Server error');
    };
    CourseService.prototype.getCourses = function () {
        return this.http.get('/api/courses');
    };
    CourseService.prototype.registerToCourse = function (registerRequest) {
        var body = JSON.stringify(registerRequest);
        return this.http.post('/api/students/addCourse', body, httpOptions)
            .map(function (result) {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
            .catch(this.handleError);
    };
    CourseService.prototype.unregisterFromCourse = function (unregisterRequest) {
        var body = JSON.stringify(unregisterRequest);
        return this.http.post('/api/students/dropCourse', body, httpOptions)
            .map(function (result) {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
            .catch(this.handleError);
    };
    CourseService.prototype.getStudentsFromCourse = function (courseID) {
        return this.http.get('/api/students/course/' + courseID);
    };
    CourseService.prototype.updateCourse = function (courseID, updateRequest) {
        var body = JSON.stringify(updateRequest);
        return this.http.put('/api/courses/' + courseID, body, httpOptions)
            .map(function (result) {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
            .catch(this.handleError);
    };
    CourseService.prototype.deleteCourse = function (courseID) {
        return this.http.delete('/api/courses/' + courseID);
    };
    CourseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map