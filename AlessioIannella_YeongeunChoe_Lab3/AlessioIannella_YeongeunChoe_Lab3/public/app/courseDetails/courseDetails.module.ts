import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //required for ngModel to work in HTML
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { CourseDetailsComponent } from './courseDetails.component';
import { CourseDetailsRoutes } from './courseDetails.routes';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        RouterModule.forChild(CourseDetailsRoutes),
    ],
    declarations: [
        CourseDetailsComponent 
    ]
})
export class CourseDetailsModule { }
