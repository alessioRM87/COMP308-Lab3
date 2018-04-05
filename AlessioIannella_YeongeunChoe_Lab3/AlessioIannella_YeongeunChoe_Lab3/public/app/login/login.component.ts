import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
    selector: 'login',
    templateUrl: 'app/login/login.template.html',
    styleUrls: ['app/login/login.template.css'],
})

export class LoginComponent {

    public studentNumber;
    public password;
    public loginError;


    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        console.log('OnInit of LoginComponent. User is authenticated: ', this.authenticationService.isLoggedIn());

        if (this.authenticationService.isLoggedIn()){
            this.router.navigate(['home']);
        }
    } 

    login(studentNumber, password) {
        var loginRequest = {
            username: studentNumber,
            password: password
        };

        this.authenticationService.login(loginRequest).subscribe(
            data => {
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
