"use strict";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

const initialScreen = "SCREEN1";

@Component({
    selector: "main-app",
    template: `<router-outlet></router-outlet>`,
    })
export class AppComponent {

    constructor(public router: Router) {
        this.router.navigate([initialScreen]);
    }
}
