import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.template.html',
    styleUrls: ['app/home/home.template.css'],
    providers: []
})

export class HomeComponent {

    constructor(private router: Router) { }

    
}
