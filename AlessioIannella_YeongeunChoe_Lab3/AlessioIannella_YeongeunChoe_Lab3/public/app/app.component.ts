import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'first-angular-application',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
    constructor(private _authenticationService: AuthenticationService, private router: Router) { }
}
