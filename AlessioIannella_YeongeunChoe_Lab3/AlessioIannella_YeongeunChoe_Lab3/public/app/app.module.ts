import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AuthenticationService } from './authentication.service';
import { CourseService } from './course.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
        LoginModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService,
        CourseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

