import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CreareCourseModule } from './createCourse/createCourse.module';
import { StudentDetailsModule } from './studentDetails/studentDetails.module';
import { CourseDetailsModule } from './courseDetails/courseDetails.module';
import { AuthenticationService } from './services/authentication.service';
import { CourseService } from './services/course.service';
import { StudentsService } from './services/students.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
        LoginModule,
        CreareCourseModule,
        StudentDetailsModule,
        CourseDetailsModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService,
        CourseService,
        StudentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

