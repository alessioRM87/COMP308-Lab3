import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'first-angular-application',
    templateUrl: 'home.template.html',
    styleUrls: ['home.template.css'],
    providers: []
})

export class HomeComponent {

    constructor(private router: Router) { }

    
}
