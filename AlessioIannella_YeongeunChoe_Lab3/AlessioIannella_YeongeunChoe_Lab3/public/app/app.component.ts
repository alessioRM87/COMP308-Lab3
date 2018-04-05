import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CourseService } from './services/course.service';
import { Router } from '@angular/router';
import { StudentsService } from './services/students.service';

@Component({
    selector: 'first-angular-application',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
    constructor(
        private authenticationService: AuthenticationService,
        private courseService: CourseService,
        private studentsService: StudentsService, 
        private router: Router) { }
}
