"use strict";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

export const SCREEN1 = "SCREEN1";
export const SCREEN2 = "SCREEN2";

@Component({
    selector: "screen1",
    templateUrl: "./screen1.component.html",
})
export class Screen1Component {
    constructor(public router: Router) {
    }

    public gotoScreen2(): void {
        this.router.navigate([SCREEN2]);
    }
}
