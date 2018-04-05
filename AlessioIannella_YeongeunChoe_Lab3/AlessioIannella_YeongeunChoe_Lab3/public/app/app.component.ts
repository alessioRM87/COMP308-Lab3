import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component({
    selector: 'first-angular-application',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
    constructor(
        private authenticationService: AuthenticationService,
        private courseService: CourseService, 
        private router: Router) { }
}
