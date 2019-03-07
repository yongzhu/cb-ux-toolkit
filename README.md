# CareerBuilder UX Toolkit - (CUT)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5. Please refer to the post [The Angular Library Series - Creating a Library in Angular 6](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5) to better understand this project's structure.

## Overview

CUT is a rebuild and restructure of [CB's VDL](https://github.com/cbdr/cb-vdl) and [oneCB initiative](https://company-40162.frontify.com/d/6xYC97AVwz1E/style-guide). The goal of this project is to build off of the the design library presented in the CBVDL but update UX standards and improve the library as much as possible.

*Note: At the creation of this project the cb-vdl project was no longer maintained. The project does not contain a direct dependency on the cb-vdl library but opts to use its code as a starting point.*

## Using the Library

To get started using the library there are two simple steps:

1. Add a `.npmrc` file to your project which points to the *cb-node-release* registry:
```
registry=https://cbdatascience.jfrog.io/cbdatascience/api/npm/cb-node-release/
```
2. Use the Angular Devkit 6+ schematic installation:
```shell
ng add cut
```
or you can use the local install of the Angular CLI:
```shell
npm run ng -- add cut
```

## Project Structure

This Angular 6 library project is built using the new library functionality presented in the Angular-CLI in version 6. It is constructed in a way where the library is contained within an Angular "workspace". At the root of this workspace is a standard Angular application. This application serves as the main demo for the CUT.

Also within this workspace is a `projects/` directory. The `cut-lib` project represents the `cut` library.

*Note: To differentiate between the demo app and the library, the application is named `cut-app` and the project name for the library is `cut-lib`. External to this workspace the VDL is known as its NPM package name, `cut`.*

For a more in-depth information regarding the library look in the [project folder](/projects/cut-lib).

## Setup

Run `npm install` to download all the dependencies. If you have the Angular CLI installed it should be on 6.1.5 or greater. The npm package scripts have been setup to mask most use of the CLI. If you don't want to install the CLI or have a different version use the npm command `npm run ng -- <comand>`.

## Development server

**You must** run `npm run build-lib` before the demo application web server can be started!

### Demo Web Application

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

***Note**: At the moment changing files within the library will cause a crash in the hot-reload code for the demo site. A fix is being worked on.*

## Code scaffolding

Code scaffolding must be targeted to a specific project within the workspace! 

**Example:** Run `npm run ng -- generate component component-name --project=cut-lib` to generate a new component in the library. You can also use `npm run ng -- ng generate directive|pipe|service|class|guard|interface|enum|module`. To scaffold components in the web application use *cut-app* instead.

*Note: The above example shows how to run the `ng` cli command without needing to install the Angular CLI globally.*

### Naming Conventions

The prefix `cut` will be appended to components added to the library automatically. When creating a new component it is unnecessary to add this prefix. All developers should follow the [Naming](https://angular.io/guide/styleguide#naming) conventions spelled out in the Angular Style Guidelines. Specifically, please follow the style guidelines for [component selectors](https://angular.io/guide/styleguide#component-selectors) when creating new components.

## Build

Run `npm run build` to build both projects. The build artifacts will be stored in their respective directories within the `dist/` directory. The build will use the `--prod` flag when building each project.

To build the library only run `npm run build-lib`. The web application can be built by running `npm run build-app`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Making a Pre-Release or Release

Pre-release should be published from the *develop* branch. A pre-release can be considered for any major or or minor versions (please refer to semver for conventions). It should be unnecessary to create pre-releases for patch releases as those releases should focus on bugs only.

Releases should be generated **only** from the *master* branch.

1. Check out the respective branch, *develop* for pre-release, *master* for release.
2. Version the package correctly. For pre-release use *premajor* or *preminor*, for release use major, minor, or patch:

Pre-release example:

For the first pre-release of a minor version:

```shell
npm version preminor -m "Pre-release %s"
```

Subsequent pre-releases of the same minor version:

```shell
npm version prerelease -m "Pre-release %s"
```

Release example:

```shell
npm version major -m "Release %s"
```

In all examples **it is important** to add the `-m "..."` option. The build looks for this message to determine if the commit should be deployed.

3. Push the commit and tag (the command below will push **all** tags): 

```shell
git push && git push --tags
```

At this point the Jenkins builds will pick up the change and do the necessary steps to publish the package to the internal registry.

**NOTE: Only administrators of the repository may push to *master* and *develop* without going through a code-review and PR process. Hence, only administrators will be able to publish packages!**

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Angular Library Series

1. [Creating a Library with the Angular CLI](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)
2. [Building and Packaging](https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121)
3. [Publishing](https://blog.angularindepth.com/the-angular-library-series-publishing-ce24bb673275)
