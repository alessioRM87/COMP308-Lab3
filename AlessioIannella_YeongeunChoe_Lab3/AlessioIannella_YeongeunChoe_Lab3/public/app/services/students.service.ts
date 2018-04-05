import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentsService {

    public selectedStudent;

    constructor(private http: HttpClient) { }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    getStudents(){

        return this.http.get('/api/students');
    }

    getStudentInfo(studentID){
        return this.http.get('/api/students/' + studentID)
        .map((result) => {
            console.log('Course Service register to course. Result: ', result);
            this.selectedStudent = result;
            return result;
        })
        .catch(this.handleError);
    }

}