import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }

    getCourses(){

        return this.http.get('/api/courses');
    }

    registerToCourse(registerRequest){
        let body = JSON.stringify(registerRequest);

        return this.http.post('/api/students/addCourse', body, httpOptions)
        .map((result) => {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
        .catch((error) => {
            return Observable.throw(error.json().message || 'Server error');
        });
    }

}