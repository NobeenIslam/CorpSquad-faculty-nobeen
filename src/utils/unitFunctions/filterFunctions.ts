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

export function filterByAfterStartDate(
  startDateSearch: string,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  const filteredProjects = projectsToBeFiltered.filter((project) => {
    const projectStartTime = new Date(project.contract.startDate).getTime();
    const searchTime = new Date(startDateSearch).getTime();
    return projectStartTime > searchTime;
  });
  return filteredProjects;
}

export function filterByBeforeStartDate(
  startDateSearch: string,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  const filteredProjects = projectsToBeFiltered.filter((project) => {
    const projectStartTime = new Date(project.contract.startDate).getTime();
    const searchTime = new Date(startDateSearch).getTime();
    return projectStartTime < searchTime;
  });
  return filteredProjects;
}

export function filterByAfterEndDate(
  endDateSearch: string,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  const filteredProjects = projectsToBeFiltered.filter((project) => {
    const projectEndTime = new Date(project.contract.endDate).getTime();
    const searchTime = new Date(endDateSearch).getTime();
    return projectEndTime > searchTime;
  });
  return filteredProjects;
}

export function filterByBeforeEndDate(
  endDateSearch: string,
  projectsToBeFiltered: ProjectInterfaceWithAllData[]
): ProjectInterfaceWithAllData[] {
  const filteredProjects = projectsToBeFiltered.filter((project) => {
    const projectEndTime = new Date(project.contract.endDate).getTime();
    const searchTime = new Date(endDateSearch).getTime();
    return projectEndTime < searchTime;
  });
  return filteredProjects;
}
