import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(loginRequest) {
        let body = JSON.stringify(loginRequest);

        var response = this.http.post('/api/auth/signin', body, httpOptions);

        console.log("Response: ", response);

        return response;
    }

    register(registerRequest) {
        let body = JSON.stringify(registerRequest);

        return this.http.post('/api/auth/signup', body, httpOptions);
    }

}