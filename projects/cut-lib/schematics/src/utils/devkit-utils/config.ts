import { SchematicsException } from "@angular-devkit/schematics";
import { WorkspaceProject, WorkspaceSchema } from "@schematics/angular/utility/workspace-models";
/**
 * Gets a project from the Angular CLI workspace. If no project name is given, the first project
 * will be retrieved.
 */
export function getProjectFromWorkspace(config: WorkspaceSchema, projectName?: string): WorkspaceProject {
  if (config.projects) {
    if (projectName) {
			console.warn(`project name -- ${projectName}`);
      const project = <WorkspaceProject>config.projects[projectName];
      if (!project) {
        throw new SchematicsException(`No project named "${projectName}" exists.`);
      }

      Object.defineProperty(project, "name", {enumerable: false, value: projectName});
      return project;
    }

    // If there is exactly one non-e2e project, use that. Otherwise, require that a specific
    // project be specified.
    const allProjectNames = Object.keys(config.projects).filter(p => !p.includes("e2e"));
    if (allProjectNames.length === 1) {
      const project = <WorkspaceProject>config.projects[allProjectNames[0]];
      // Set a non-enumerable project name to the project. We need the name for schematics
      // later on, but don"t want to write it back out to the config file.
      Object.defineProperty(project, "name", {enumerable: false, value: projectName});
      return project;
    } else {
      throw new SchematicsException("Multiple projects are defined; please specify a project name");
    }
  }

  throw new SchematicsException("No projects are defined");
}
