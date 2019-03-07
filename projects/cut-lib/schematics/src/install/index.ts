import {
  chain,
  noop,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree
} from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { InsertChange } from "@schematics/angular/utility/change";
import { getWorkspace } from "@schematics/angular/utility/config";
import { WorkspaceProject } from "@schematics/angular/utility/workspace-models";

import * as parse5 from "parse5";

import { addModuleImportToRootModule, getStylesPath } from "../utils/ast";
import { getProjectFromWorkspace } from "../utils/devkit-utils/config";
import { addPackageToPackageJson } from "../utils/package";
import { ISchema } from "./schema";

const angularVersion = "~7.2.7";
const materialVersion = "~7.3.3";

const packagesToInstall: { [packageName: string]: string } = {
  "cut": "~0.0.0",
  "clipboard": "~2.0.0",
  "@angular/cdk": materialVersion,
  "@angular/material": materialVersion,
  "@angular/animations": angularVersion,
  "font-awesome": "~4.7.0",
  "jquery": "~3.3.0",
  "popper.js": "~1.14.0"
};

export default function (options: ISchema): Rule {
  if (!parse5) {
    throw new SchematicsException("parse5 dependency not found! Please install parse5 from npm to continue.");
  }

  return chain([
    options && options.skipPackageJson ? noop() : addVdlToPackageJson(),
    addStyleImportsToStyles(options),
    addDefaultModulesToRootConfig(options),
    addAssetsToProject(options)
  ]);
}

/**
 * Adds the peer dependencies to the project's package.json.
 *
 * @returns void
 */
function addVdlToPackageJson() {
  return (host: Tree, context: SchematicContext) => {

    for (const packageName in packagesToInstall) {
      if (!(packagesToInstall[packageName] as string)) continue;

      addPackageToPackageJson(host, "dependencies", packageName, (packagesToInstall[packageName]) as string);
    }

    context.addTask(new NodePackageInstallTask());
    return host;
  };
}

function addAssetsToProject(options: ISchema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project: WorkspaceProject = getProjectFromWorkspace(workspace, options.project);

    addAssetsToTooling(project, "build");
    addAssetsToTooling(project, "test");

    host.overwrite("angular.json", JSON.stringify(workspace, null, 2));

    return host;
  };
}

function addAssetsToTooling(project: WorkspaceProject, toolingName: string) {
  if (project.architect) {
    const tooling = project.architect[toolingName];
    if (tooling) {
      (tooling.options.assets as Array<any>).splice(0, 0, {
        glob: "**/*",
        input: "./node_modules/cut/assets",
        output: "/assets/"
      });
    }
  }
}

/** Add browser animation module to app.module */
function addDefaultModulesToRootConfig(options: ISchema) {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
		context.logger.info('WTF -- ', JSON.parse(JSON.stringify(project)));
    // Add the animation module
    addModuleImportToRootModule(host, "BrowserAnimationsModule", "@angular/platform-browser/animations", project, context);

    [
      "AccordionModule",
      "AccordionItemModule",
      "ButtonModule",
      "CardModule",
      "FrameworkModule",
      "SelectModule",
      "CutLibModule"
    ].forEach((cutModule) => {
      addModuleImportToRootModule(
        host,
        cutModule,
        "cut",
				project,
				context);
    });

    return host;
  };
}

function addStyleImportsToStyles(options: ISchema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    const stylesPath = getStylesPath(project);

    const buffer = host.read(stylesPath);
    if (buffer) {
      const src = buffer.toString();
      const insertion = new InsertChange(stylesPath, src.length,
        `@import "../node_modules/cut/cb-type";

/* VARIABLES */
@import "../node_modules/cut/variables";

/* MATERIAL INDIGO PINK - THIS DOESN'T SEEM NECESSARY

@import "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
*/

@import "../node_modules/cut/cb-vdl.css";

/* CUT (CB-UX-Toolkit) */
@import "../node_modules/cut/cut.css";

/* DEMO APPLICATION STYLES */
$fa-font-path: "../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";

html, body {
  height: 100%;
}`);
      const recorder = host.beginUpdate(stylesPath);
      recorder.insertLeft(insertion.pos, insertion.toAdd);
      host.commitUpdate(recorder);
    } else {
      console.warn(`Skipped body reset; could not find file: ${stylesPath}`); // tslint:disable-line:no-console
    }
  };
}
