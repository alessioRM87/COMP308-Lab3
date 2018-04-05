import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CourseService } from '../curse.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.template.html',
    styleUrls: ['app/home/home.template.css'],
})

export class HomeComponent {

    public user;
    public courses;
    public courseError;

    constructor( 
        private router: Router, 
        private authenticationService: AuthenticationService,
        private courseService: CourseService) {

        console.log('Constructor of Home. User from authenticationService: ', authenticationService.user);
        this.user = authenticationService.user;
        courseService.getCourses().subscribe(
            (data) => {
                console.log('Home Constructor. Courses from course service: ', data);
                this.courses = data;
            },
            (error) => {
                console.log('Home Constructor. Courses from course service error: ', error);

            },
            () => {
                console.log('GET COURSES COMPLETED');
            }
        );
    }

    viewDetails(courseID){
        console.log("VIEW DETAILS CLICKED FOR COURSE WITH ID: ", courseID);
    }

    addCourse(courseID){

        let registerRequest = {
            courseID: courseID,
            studentID: this.user._id
        };

        this.courseService.registerToCourse(registerRequest).subscribe(
            (data) => {
                this.user = data;
            },
            (error) => {
                this.courseError = error;
            },
            () => {
                console.log("ADD COURSE COMPLETED");
            }
        );
    }

    dropCourse(courseID){

    }

    
}
