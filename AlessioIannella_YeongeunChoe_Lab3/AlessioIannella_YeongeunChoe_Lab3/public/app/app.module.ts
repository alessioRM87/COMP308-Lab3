import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //required for ngModel to work in HTML
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';

import { RouterModule }   from '@angular/router';
import { AppRoutes }       from './app.routes';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
    ],
    //declare all components here
    declarations: [
        AppComponent 
    ],
    providers: [AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
