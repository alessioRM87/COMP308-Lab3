System.register(["@angular/core", "./authentication.service"], function (exports_1, context_1) {
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
    var core_1, authentication_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                AppComponent.prototype.login = function (studentNumber, password) {
                    var loginRequest = {
                        username: studentNumber,
                        passowrd: password
                    };
                    this.authenticationService.login(loginRequest).subscribe(function (data) {
                        console.log(data);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        console.log("LOGIN COMPLETED");
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'first-angular-application',
                        // template: '<h1>I am an application component!</h1>',
                        // templateUrl: '/app/app.template.html'
                        //
                        //templateUrl: '/app/about.template.html'
                        //interpolation binding
                        //template: '<h1>{{title}}</h1>'
                        //property binding
                        //template: '<button [disabled]="isButtonDisabled">My Button</button > ',
                        //event binding
                        //template: '<button (click)="showMessage()">Show Message</button>'
                        //two-way binding
                        //template: '<h1>Hello {{name}}</h1><br><input [(ngModel)] = "name" >'
                        //
                        //two-way binding using the template
                        templateUrl: '/app/app.template.html',
                        styleUrls: ['./app.template.css'],
                        providers: [authentication_service_1.AuthenticationService]
                        // using a component as directive
                        //template: '<sample-component></sample-component>'
                        //using a service
                        //template: '<h1>{{ title }}</h1>',
                        //providers: [ExampleService]
                    }),
                    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map