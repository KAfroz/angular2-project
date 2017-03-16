"use strict";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
import { appRouterProviders } from "./app.routes";
import { Screen1Component } from "../../../../src/app/src/screen1/screen1.component";
import { Screen2Component } from "../../../../src/app/src/screen2/screen2.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, appRouterProviders],
    declarations: [AppComponent, Screen1Component, Screen2Component],
    bootstrap: [AppComponent],
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
})
export class AppModule { }
