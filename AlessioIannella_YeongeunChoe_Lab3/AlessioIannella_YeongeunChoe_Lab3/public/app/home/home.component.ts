import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CourseService } from '../services/course.service';
import { StudentsService } from '../services/students.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.template.html',
    styleUrls: ['app/home/home.template.css'],
})

export class HomeComponent {

    public user;
    public courses;
    public students;
    public courseError;
    public studentsError;

    constructor( 
        private router: Router, 
        private authenticationService: AuthenticationService,
        private courseService: CourseService,
        private studentsService: StudentsService) {

        console.log('Constructor of Home. User from authenticationService: ', authenticationService.user);
        this.user = authenticationService.user;
        courseService.getCourses().subscribe(
            (data) => {
                console.log('Home Constructor. Courses from course service: ', data);
                this.courses = data;
            },
            (error) => {
                console.log('Home Constructor. Courses from course service error: ', error);
                this.courseError = error;

            },
            () => {
                console.log('GET COURSES COMPLETED');
            }
        );
        studentsService.getStudents().subscribe(
            (data) => {
                console.log('Home Constructor. Students from students service: ', data);
                this.students = data;
            },
            (error) => {
                console.log('Home Constructor. Students from students service error: ', error);
                this.studentsError = error;

            },
            () => {
                console.log('GET STUDENTS COMPLETED');
            }
        );
    }

    clearErrors(){
        this.courseError = "";
        this.studentsError = "";
    }

    viewDetails(courseID){

        this.clearErrors();

        console.log("VIEW DETAILS CLICKED FOR COURSE WITH ID: ", courseID);
        this.courseService.getCourseInfo(courseID).subscribe(
            (course) => {
                this.studentsService.getStudentsInCourse(courseID).subscribe(
                    (students) => {
                        this.router.navigate(['courseDetails']);
                    },
                    (err) => {
                        this.courseError = err.error.message;
                    },
                    () => {
                        console.log("GET COURSE INFO COMPLETED");
                    }
                );
            },
            (err) => {
                this.courseError = err.error.message;
            },
            () => {
                console.log("GET COURSE INFO COMPLETED");
            }
        );
    }

    addCourse(courseID){

        this.clearErrors();

        let registerRequest = {
            courseID: courseID,
            studentID: this.user._id
        };

        this.courseService.registerToCourse(registerRequest).subscribe(
            (data) => {
                this.user = data;
            },
            (error) => {
                this.courseError = error.error.message;
            },
            () => {
                console.log("ADD COURSE COMPLETED");
            }
        );
    }

    dropCourse(courseID){

        this.clearErrors();

        let unregisterRequest = {
            courseID: courseID,
            studentID: this.user._id
        };

        this.courseService.unregisterFromCourse(unregisterRequest).subscribe(
            (data) => {
                this.user = data;
            },
            (error) => {
                this.courseError = error.error.message;
            },
            () => {
                console.log("DROP COURSE COMPLETED");
            }
        );
    }

    viewStudentInfo(studentID){

        this.clearErrors();

        console.log("VIEW STUDENT INFO CLICKED FOR STUDENT WITH ID: ", studentID);
        this.studentsService.getStudentInfo(studentID).subscribe(
            (data) => {
                this.router.navigate(['studentDetails']);
            },
            (err) => {
                this.studentsError = err.error.message;
            },
            () => {
                console.log("GET STUDENT INFO COMPLETED");
            }
        );

    }

    onClick() {
        console.log("GO TO CREATE COURSE PAGE");
        this.router.navigate(['createCourse']);
    }
    
}
