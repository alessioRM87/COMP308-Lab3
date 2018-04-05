import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CourseService } from '../services/course.service';
import { StudentsService } from '../services/students.service';

@Component({
    selector: 'studentDetails',
    templateUrl: 'app/studentDetails/studentDetails.template.html',
    styleUrls: ['app/studentDetails/studentDetails.template.css'],
})

export class StudentDetailsComponent {

    public student;
    public error;

    constructor( 
        private router: Router, 
        private studentsService: StudentsService) {

        this.student = studentsService.selectedStudent;

    }
}
