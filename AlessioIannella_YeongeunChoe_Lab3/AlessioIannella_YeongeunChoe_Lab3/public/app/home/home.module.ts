import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //required for ngModel to work in HTML
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { AuthenticationService } from '../authentication.service';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        RouterModule.forChild(HomeRoutes),
    ],
    declarations: [
        HomeComponent 
    ]
})
export class HomeModule { }
