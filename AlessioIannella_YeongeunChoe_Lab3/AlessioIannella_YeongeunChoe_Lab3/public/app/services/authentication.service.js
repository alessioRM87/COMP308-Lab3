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
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.user = window['user'];
    }
    AuthenticationService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || 'Server error');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.login = function (loginRequest) {
        var _this = this;
        console.log("LOGIN request: ", loginRequest);
        var body = JSON.stringify(loginRequest);
        return this.http.post('/api/auth/signin', body, httpOptions)
            .map(function (result) {
            console.log('Authentication Service login. Result: ', result);
            _this.user = result;
            return result;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.register = function (registerRequest) {
        var _this = this;
        var body = JSON.stringify(registerRequest);
        return this.http.post('/api/auth/signup', body, httpOptions)
            .map(function (result) {
            console.log('Authentication Service register. Result: ', result);
            _this.user = result;
            return result;
        })
            .catch(this.handleError);
        ;
    };
    AuthenticationService.prototype.logout = function () {
        this.user = null;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map