# Library Source - CBES VDL

This folder is the root of the source for the library. The code here will be used to build the end library.

## Assets

Static assets such as images or fonts should be placed within the `assets` folder. This will be copied to the root of the distributable library.

## Library Code

The `lib` folder contains all the components, directives, services, etc. It is important to note that within this folder there is a certain structure that has been setup.

The CBES VDL is built on CB's VDL. The CB VDL is built on Angular 5 and presented problems when trying to use it with CBES Angular 6 UI applications. In order to aleviate this issue the necessary code and styles were pulled from the CB VDL into a folder `cb`. The goal for code within the `cb` folder is that it should be as much as a copy and paste from the original CB VDL as possible. Basic linting fixes and any conversions necessary to make it work with Angular 6 should be done. It should be noted that using the CB VDL code within this Angular 6 library may present an issue regarding how the library is built. See the **Public API** section below for a detailed discussion of issues that may be present when bringing the CB VDL code into this library.

At this moment the CBES VDL library is small enough that all the components live in a single module. As the library grows more diverse breaking components into modules for better downstream chunking may be necessary. All components will have their own folder under the `lib` directory. This can be seen with the `header` folder.

## Styles

The styles for the library should be exported as SCSS files. This will enable downstream projects to customize the layout through variable modification.

Within the `stylesheets` folder are two sub-folders. The `cb-vdl` folder contains all the scss pulled from the CB VDL project. The `cut` represent global styles provided by the CBES VDL project. Each folder will contain a number of files broken down into specific areas. These files are pulled together by two files which consist of imports for their respective VDL.

In the root `src` folder a single `styles.scss` brings all the styles together. This file will be read by `scss-bundler` and output to the root directory in the distribution.

## Public API

In order for the library to include all the pieces which have been built in the `lib` folder the `public_api.ts` file is used to roll-up all the exports.

There are some very important points that must be considered when working with exports from the library.

1. You cannot use re-exports! Doing so will cause AOT compilation issues either with the library or with the parent project. For example, most of the CB VDL modules that have been brought over use an `index.ts` barrel file. Re-exporting from this file **will cause errors!**

The following will not work:

```TypeScript
// Fails
export * from "./lib/cb";
// Also fails
export * from "./lib/cb/accordion";
```

Each module must be exported by directly referencing the relevant file:

```Typescript
export * from "./lib/cb/accordion/accordion.module";
```

2. The file should also include exports for classes that the module or components in the module use.

```TypeScript
export {
  LogoPath,
  Product,
  HeaderNavItem,
  AppSwitcherItem,
  Option,
  UserProfile,
  HeaderData
} from "./lib/cb/framework/header.models";
```
