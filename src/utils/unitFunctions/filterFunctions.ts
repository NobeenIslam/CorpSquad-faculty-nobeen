import { ProjectInterfaceWithAllData } from "../Interfaces";
import { DashboardState } from "../reducerStateManagement/dashboardManager";
import { getProjectsEmployeeNames } from "./getProjectsEmployeeNames";

export function filterByClient(
  dashboardState: DashboardState,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  const filteredProjects: ProjectInterfaceWithAllData[] =
    projectsToBeFiltered.filter(
      (project) => project.clientName === dashboardState.clientSearch
    );
  return filteredProjects;
}

export function filterByEmployee(
  dashboardState: DashboardState,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  function doesProjectIncludeEmployee(
    project: ProjectInterfaceWithAllData
  ): boolean {
    const thisProjectsEmployeeNames = getProjectsEmployeeNames(project);
    return thisProjectsEmployeeNames.includes(dashboardState.employeeSearch);
  }

  const filteredProjects: ProjectInterfaceWithAllData[] =
    projectsToBeFiltered.filter((project) =>
      doesProjectIncludeEmployee(project)
    );

  return filteredProjects;
}
