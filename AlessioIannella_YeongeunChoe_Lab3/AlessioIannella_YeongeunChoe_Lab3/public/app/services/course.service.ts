import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

    public selectedCourse;

    constructor(private http: HttpClient) { }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    getCourses(){

        return this.http.get('/api/courses');
    }

    getCourseInfo(courseID){

        return this.http.get('/api/courses/' + courseID)
        .map((course) => {
            console.log('Course Service get course info. Course: ', course);
            this.selectedCourse = course;
            return course;
        })
        .catch(this.handleError);
    }

    registerToCourse(registerRequest){
        let body = JSON.stringify(registerRequest);

        return this.http.post('/api/students/addCourse', body, httpOptions)
        .map((result) => {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
        .catch(this.handleError);
    }

    unregisterFromCourse(unregisterRequest){
        let body = JSON.stringify(unregisterRequest);

        return this.http.post('/api/students/dropCourse', body, httpOptions)
        .map((result) => {
            console.log('Course Service unregister from course. Result: ', result);
            return result;
        })
        .catch(this.handleError);
    }

    getStudentsFromCourse(courseID){
        return this.http.get('/api/students/course/' + courseID);
    }

    updateCourseByID(courseID, updateRequest){
        let body = JSON.stringify(updateRequest);

        return this.http.put('/api/courses/' + courseID, body, httpOptions)
        .map((result) => {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
        .catch(this.handleError);
    }

    deleteCourseByID(courseID){
        return this.http.delete('/api/courses/' + courseID, httpOptions);
    }

    createCourse(courseRequest){
        let body = JSON.stringify(courseRequest);

        return this.http.post('/api/courses', body, httpOptions)
        .map((result) => {
            console.log('Course Service register to course. Result: ', result);
            return result;
        })
        .catch(this.handleError);
    }

}
