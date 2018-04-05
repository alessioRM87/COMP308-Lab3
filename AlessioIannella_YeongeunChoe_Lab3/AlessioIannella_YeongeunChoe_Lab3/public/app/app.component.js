System.register(["@angular/core", "@angular/router", "./authentication.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, AppComponent;
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
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(authenticationService, router) {
                    this.authenticationService = authenticationService;
                    this.router = router;
                }
                AppComponent.prototype.login = function (studentNumber, password) {
                    var _this = this;
                    var loginRequest = {
                        username: studentNumber,
                        passowrd: password
                    };
                    this.authenticationService.login(loginRequest).subscribe(function (data) {
                        console.log(data);
                        _this.router.navigate(['home']);
                    }, function (err) {
                        console.log("THERE WAS AN ERROR!", err);
                        _this.loginError = err;
                    }, function () {
                        console.log("LOGIN COMPLETED");
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'first-angular-application',
                        templateUrl: '/app/app.template.html',
                        styleUrls: ['./app.template.css'],
                        providers: [authentication_service_1.AuthenticationService]
                    }),
                    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map