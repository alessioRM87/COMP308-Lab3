import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'createCourse',
    templateUrl: 'app/createCourse/createCourse.template.html',
    // styleUrls: ['app/createCourse/createCourse.template.css'],
})

export class CreateCourseComponent {

    public courseCode;
    public courseName;
    public section;
    public semester;
    public courseError;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private courseService: CourseService) { }


    createCourse(courseCode, courseName, section, semester) {
        var courseRequest = {
            courseCode: courseCode,
            courseName: courseName,
            section: section,
            semester: semester
        };

        this.courseService.createCourse(courseRequest).subscribe(
            data => {
                this.router.navigate(['home']);
            },
            err => {
                console.log("THERE WAS AN ERROR!", err);
                this.courseError = err.error.message;
            },
            () => {
                console.log("CREATE COURSE COMPLETED")
            }
        );

    }


}
