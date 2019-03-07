# CareerBuilder UX Toolkit (CUT)

This project folder contains the source for the **CUT** Angular 6 library. This library represents the implementation of the oneCB visual design into a reusable client-side visual design library.

## Structure

The project's architecture is built from the Angular 6 CLI's `ng generate library` command. Some modifications have been made to support the CB VDL modules, assets, and schematics.

Files to note within the root of the project:

* **karma.conf.js**: Configuration for Karma. Karma is used for unit testing.
* **ng-package.json** & **ng-package.prod.json**: *ng-packagr* configuration. You can [read more about *ng-packagr* here](https://www.npmjs.com/package/ng-packagr).
* **package.json**: The `package.json` used for the published library. This version of `package.json` is tied to requirements in *ng-packagr*. One major item of note is that developers should not be adding `dependencies`. Instead, use `peerDependencies` and take care with *semver* to be specific to as what version of the library should be included in the parent project.
* **tsconfig.lib.json** & **tsconfig.spec.json**: Typescript configuration files for compilation. These inherit from the root.
* **tslint.json**: Linting configuration. This inherits from the root.

### Schematics

The `schematics` folder contains Angular schematics.

[A more in-depth discussion on the schematics](schematics/)

### Source

The library's implementation is contained within the `src` folder.

[A more in-depth discussion about the source folder.](src/)
