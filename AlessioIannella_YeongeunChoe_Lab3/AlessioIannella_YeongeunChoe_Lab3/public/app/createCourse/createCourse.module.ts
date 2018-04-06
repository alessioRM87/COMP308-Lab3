import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateCourseRoutes } from './createCourse.routes';
import { CreateCourseComponent } from './createCourse.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(CreateCourseRoutes),
    ],
    declarations: [
        CreateCourseComponent,
    ]
})
export class CreareCourseModule { }