import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(LoginRoutes),
    ],
    declarations: [
        LoginComponent,
    ]
})
export class LoginModule { }
