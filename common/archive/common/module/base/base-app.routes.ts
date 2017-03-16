"use strict";

import { Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { Screen1Component } from "../../../../../src/app/src/screen1/screen1.component";
import { Screen2Component } from "../../../../../src/app/src/screen2/screen2.component";

export let routes: Routes = [
    {
        path: "SCREEN1",
        component: Screen1Component,
    },
    {
        path: "SCREEN2",
        component: Screen2Component,
    },
    {
        path: "",
        component: AppComponent,
    },
    // {
    //     path: "",
    //     redirectTo: "SCREEN1",
    //     pathMatch: "full"
    // }
];
