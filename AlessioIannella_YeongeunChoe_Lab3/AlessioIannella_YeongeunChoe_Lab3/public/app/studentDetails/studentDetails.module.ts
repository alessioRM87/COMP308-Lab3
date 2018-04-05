import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //required for ngModel to work in HTML
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { StudentDetailsComponent } from './studentDetails.component';
import { StudentDetailsRoutes } from './studentDetails.routes';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        RouterModule.forChild(StudentDetailsRoutes),
    ],
    declarations: [
        StudentDetailsComponent 
    ]
})
export class StudentDetailsModule { }
