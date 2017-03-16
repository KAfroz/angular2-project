"use strict";

import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "./base/base-app.routes";

export let appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);
