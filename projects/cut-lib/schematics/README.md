# Angular Schematics - CBES VDL

Angular 6 introduced schematics, *"a workflow tool for the modern web"*. Schematics can apply transforms to projects such as creating new components, updating dependencies, or configuration options.

For the CBES VDL there is one primary schematic that has been created, an **install**.

## Overview

The schematics are compiled separately from the rest of the library. The `tsconfig.json` defines the output of the compilation to be the same directory as the dist output created by the `npm run build-lib` task.

To build the schematics run `npm run build-schematics`. A post-build task will copy *.json files in the folder structure to their relative position in the output folder.

## Schematics

Each section below will cover a schematic defined within the `src` folder.

### Install

The install task simply takes installs the `cut` package, its dependencies, and configures it within a parent project.

The task does the following:

* Installs Peer Dependencies:
  - Angular Material
  - Bootstrap (and popper.js)
  - FontAwesome
  - jQuery
  - NGX-Bootstrap
* Configures styles import
* Adds base modules to root module include

## Notes on Utilities

As mentioned, the `install` task is taken from `@angular/material`. The supporting utilities were needed from that project, however they're not exported within the package itself. The documentation in those folders links to the originals. The files themselves contain authorship notes.

## Additional References

1. [Schematics - An Introduction](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)
