System.register(["@angular/core", "@angular/router", "../authentication.service", "../curse.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, curse_service_1, HomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (curse_service_1_1) {
                curse_service_1 = curse_service_1_1;
            }
        ],
        execute: function () {
            HomeComponent = /** @class */ (function () {
                function HomeComponent(router, authenticationService, courseService) {
                    var _this = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.courseService = courseService;
                    console.log('Constructor of Home. User from authenticationService: ', authenticationService.user);
                    this.user = authenticationService.user;
                    courseService.getCourses().subscribe(function (data) {
                        console.log('Home Constructor. Courses from course service: ', data);
                        _this.courses = data;
                    }, function (error) {
                        console.log('Home Constructor. Courses from course service error: ', error);
                    }, function () {
                        console.log('GET COURSES COMPLETED');
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
                        _this.courseError = error;
                    }, function () {
                        console.log("ADD COURSE COMPLETED");
                    });
                };
                HomeComponent.prototype.dropCourse = function (courseID) {
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.template.html',
                        styleUrls: ['app/home/home.template.css'],
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        authentication_service_1.AuthenticationService,
                        curse_service_1.CourseService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    };
});
//# sourceMappingURL=home.component.js.map