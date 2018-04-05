System.register(["rxjs/Rx", "@angular/core", "@angular/common/http", "rxjs/Observable"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, Observable_1, httpOptions, CourseService;
    return {
        setters: [
            function (_1) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            httpOptions = {
                headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
            };
            CourseService = /** @class */ (function () {
                function CourseService(http) {
                    this.http = http;
                }
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
                        .catch(function (error) {
                        return Observable_1.Observable.throw(error.json().message || 'Server error');
                    });
                };
                CourseService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.HttpClient])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    };
});
//# sourceMappingURL=curse.service.js.map