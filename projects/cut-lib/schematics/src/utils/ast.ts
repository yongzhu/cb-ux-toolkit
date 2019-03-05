import { normalize } from "@angular-devkit/core";
import { SchematicsException, Tree, SchematicContext } from "@angular-devkit/schematics";
import { addImportToModule } from "@schematics/angular/utility/ast-utils";
import { InsertChange } from "@schematics/angular/utility/change";
import { WorkspaceProject } from "@schematics/angular/utility/workspace-models";
import { getAppModulePath } from "@schematics/angular/utility/ng-ast-utils";

import * as ts from "typescript";

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  const content = buffer.toString();
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

/** Import and add module to root app module. */
export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string, project: WorkspaceProject, context: SchematicContext) {
	context.logger.info('I AM CONFUSED -- ', JSON.parse(JSON.stringify(project)));
  if (!project.architect || project.architect === undefined || project.architect.build === undefined) throw new SchematicsException(`Project not there ${project}`);
  const modulePath = getAppModulePath(host, project.architect.build.options.main);
  addModuleImportToModule(host, modulePath, moduleName, src);
}

/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
export function addModuleImportToModule(
  host: Tree, modulePath: string, moduleName: string, src: string) {
  const moduleSource = getSourceFile(host, modulePath);

  if (!moduleSource) {
    throw new SchematicsException(`Module not found: ${modulePath}`);
  }

  const changes = addImportToModule(moduleSource, modulePath, moduleName, src);
  const recorder = host.beginUpdate(modulePath);

  changes.forEach((change) => {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  });

  host.commitUpdate(recorder);
}

/** Get the root stylesheet file. */
export function getStylesPath(project: WorkspaceProject): string {
  if (!project || !project.architect || !project.architect["build"]) {
    throw new SchematicsException("Unable to find project build information.");
  }

  const buildTarget = project.architect["build"];

  if (buildTarget.options && buildTarget.options.styles && buildTarget.options.styles.length) {
    const styles = buildTarget.options.styles.map((s: any) => typeof s === "string" ? s : s.input);

    // First, see if any of the assets is called "styles.(le|sc|c)ss", which is the default
    // "main" style sheet.
    const defaultMainStylePath = styles.find((a: any) => /styles\.(c|le|sc)ss/.test(a));
    if (defaultMainStylePath) {
      return normalize(defaultMainStylePath);
    }

    // If there was no obvious default file, use the first style asset.
    const fallbackStylePath = styles.find((a: any) => /\.(c|le|sc)ss/.test(a));
    if (fallbackStylePath) {
      return normalize(fallbackStylePath);
    }
  }

  throw new SchematicsException("No style files could be found into which a theme could be added");
}
