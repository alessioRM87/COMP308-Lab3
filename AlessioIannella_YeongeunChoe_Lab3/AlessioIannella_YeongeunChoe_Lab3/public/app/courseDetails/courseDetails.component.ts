import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CourseService } from '../services/course.service';
import { StudentsService } from '../services/students.service';

@Component({
    selector: 'courseDetails',
    templateUrl: 'app/courseDetails/courseDetails.template.html',
    styleUrls: ['app/courseDetails/courseDetails.template.css'],
})

export class CourseDetailsComponent {

    public course;
    public students;
    public error;

    constructor( 
        private router: Router, 
        private courseService: CourseService,
        private studentsService: StudentsService) {

        this.course = courseService.selectedCourse;
        this.students = studentsService.registeredStudents;

    }

    updateCourse(courseID, courseCode, courseName, section, semester){
        console.log("UPDATE COURSE CLICKED: ", courseCode, courseName, section, semester);

        let updateRequest = {
            courseCode: courseCode,
            courseName: courseName,
            section: section,
            semester: semester
        };

        this.courseService.updateCourseByID(courseID, updateRequest).subscribe(
            (data) => {
                this.router.navigate(['home']);
            },
            (err) => {
                this.error = err.error.message;
            },
            () => {
                console.log('UPDATE COURSE COMPLETED');
            }
        );
    }

    deleteCourse(courseID){
        console.log("DELETE COURSE CLICKED: ", courseID);

        this.courseService.deleteCourseByID(courseID).subscribe(
            (data) => {
                console.log("COURSE DELETED SUCCESS");
                this.router.navigate(['home']);
            },
            (err) => {
                console.log("COURSE DELETED ERROR");
                this.error = err.error.message;
            },
            () => {
                console.log('DELETE COURSE COMPLETED');
            }
        );
    }
}
