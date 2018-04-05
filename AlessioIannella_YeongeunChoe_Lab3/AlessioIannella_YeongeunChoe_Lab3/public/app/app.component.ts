import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';


@Component({
    selector: 'first-angular-application',
    templateUrl: '/app/app.template.html',
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
                console.log("THERE WAS AN ERROR!", err);
            },
            () => {
                console.log("LOGIN COMPLETED")
            }
        );

    }

    
}
