import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

    public user = window['user'];

    constructor(private http: HttpClient) { }

    isLoggedIn(){
        return (!!this.user);
    }

    login(loginRequest) {
        let body = JSON.stringify(loginRequest);

        return this.http.post('/api/auth/signin', body, httpOptions)
        .map((result) => {
            console.log('Authentication Service login. Result: ', result);
            this.user = result;
            console.log('Saved user in authentication service: ', this.user);
            return result;
        })
        .catch((error) => {
            return Observable.throw(error.json().message || 'Server error');
        });
    }

    register(registerRequest) {
        let body = JSON.stringify(registerRequest);

        return this.http.post('/api/auth/signup', body, httpOptions);
    }

    logout(){
        this.user = null;
    }

}