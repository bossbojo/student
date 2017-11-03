import { Component,DoCheck } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
    pathname: string;
    isAuthenticated: boolean;
    constructor() {
    }

    onGetComponent() {
    }
    ngDoCheck(){
    }

}

