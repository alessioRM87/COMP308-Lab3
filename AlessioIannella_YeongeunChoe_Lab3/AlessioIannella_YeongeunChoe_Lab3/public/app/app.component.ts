import { Component } from '@angular/core';
import { SampleComponent } from './sample/sample.component';


import { AuthenticationService } from './authentication.service';


@Component({
    selector: 'first-angular-application',
   // template: '<h1>I am an application component!</h1>',
   // templateUrl: '/app/app.template.html'

    //
    //templateUrl: '/app/about.template.html'
    

    //interpolation binding
    //template: '<h1>{{title}}</h1>'

    //property binding
    //template: '<button [disabled]="isButtonDisabled">My Button</button > ',
    
    //event binding
    //template: '<button (click)="showMessage()">Show Message</button>'

    //two-way binding
    //template: '<h1>Hello {{name}}</h1><br><input [(ngModel)] = "name" >'
    //
    //two-way binding using the template
    templateUrl: '/app/app.template.html',
    styleUrls: ['./app.template.css'],
    providers: [AuthenticationService]

    // using a component as directive
    //template: '<sample-component></sample-component>'

    //using a service
    //template: '<h1>{{ title }}</h1>',
    //providers: [ExampleService]
    
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
