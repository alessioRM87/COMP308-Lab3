System.register(["@angular/core", "@angular/router", "../authentication.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, LoginComponent;
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
            LoginComponent = /** @class */ (function () {
                function LoginComponent(authenticationService, router) {
                    this.authenticationService = authenticationService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    console.log('OnInit of LoginComponent. User is authenticated: ', this.authenticationService.isLoggedIn());
                    if (this.authenticationService.isLoggedIn()) {
                        this.router.navigate(['home']);
                    }
                };
                LoginComponent.prototype.login = function (studentNumber, password) {
                    var _this = this;
                    var loginRequest = {
                        username: studentNumber,
                        password: password
                    };
                    this.authenticationService.login(loginRequest).subscribe(function (data) {
                        _this.router.navigate(['home']);
                    }, function (err) {
                        console.log("THERE WAS AN ERROR!", err);
                        _this.loginError = err;
                    }, function () {
                        console.log("LOGIN COMPLETED");
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login/login.template.html',
                        styleUrls: ['app/login/login.template.css'],
                    }),
                    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map