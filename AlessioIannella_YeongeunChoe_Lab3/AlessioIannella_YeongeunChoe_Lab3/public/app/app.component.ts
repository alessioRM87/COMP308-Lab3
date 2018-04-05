import { Component } from '@angular/core';
import { Router } from '@angular/router';
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


    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    login(studentNumber, password) {
        var loginRequest = {
            username: studentNumber,
            passowrd: password
        };

        this.authenticationService.login(loginRequest).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['home']);
            },
            err => {
                console.log("THERE WAS AN ERROR!", err);
                this.loginError = err;
            },
            () => {
                console.log("LOGIN COMPLETED")
            }
        );

    }

    
}
