// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// NOTE THE ORDERING OF THESE FIRST THREE IMPORTS IS IMPORTANT!!!
// THEY ARE SEPARATED BY A BLANK LINE TO PREVENT THE LINT-FIX TASK FROM REORDERING!!!
import "core-js/es7/reflect";

import "zone.js/dist/zone";
import "zone.js/dist/zone-testing";

import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context("./", true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
