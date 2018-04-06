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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    isLoggedIn(){
        return (!!this.user);
    }

    login(loginRequest) {

        console.log("LOGIN request: ", loginRequest);

        let body = JSON.stringify(loginRequest);

        return this.http.post('/api/auth/signin', body, httpOptions)
        .map((result) => {
            console.log('Authentication Service login. Result: ', result);
            this.user = result;
            return result;
        })
        .catch(this.handleError);
    }

    register(registerRequest) {
        let body = JSON.stringify(registerRequest);

        return this.http.post('/api/auth/signup', body, httpOptions)
        .map((result) => {
            console.log('Authentication Service register. Result: ', result);
            this.user = result;
            return result;
        })
        .catch(this.handleError);;
    }

    logout(){
        this.user = null;
    }

}