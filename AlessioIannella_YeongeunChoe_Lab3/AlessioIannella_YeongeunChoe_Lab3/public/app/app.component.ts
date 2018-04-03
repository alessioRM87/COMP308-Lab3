import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'lab3',
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.css'],
    providers: [AuthenticationService]
})

export class AppComponent {

    public studentNumber;
    public password;
    public loginError;


    constructor(private authenticationService: AuthenticationService) { }

    login(studentNumber, password) {
        var loginRequest = {
            username: studentNumber,
            passowrd: password
        };

        this.authenticationService.login(loginRequest).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log("LOGIN COMPLETED")
            }
        );
    }




}