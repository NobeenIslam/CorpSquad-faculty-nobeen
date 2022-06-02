import { useEffect, useReducer } from "react";
import { addAllDataToProjects } from "../utils/unitFunctions/addAllDataToProjects";

import {
  fetchProjects,
  fetchClients,
  fetchEmployees,
} from "../utils/unitFunctions/fetchData";
import {
  ClientInterface,
  EmployeeInterface,
  ProjectInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { sumAllRevenues } from "../utils/unitFunctions/sumAllRevenues";
import { ProjectCard } from "./ProjectCard";
import { FilterControls } from "./FilterControls";
import {
  dashboardActionsLibrary,
  dashboardReducer,
  initialDashboardState,
} from "../utils/reducerStateManagement/dashboardManager";
import { getProjectsEmployeeNames } from "../utils/unitFunctions/getProjectsEmployeeNames";
import {
  mostRecentEndDateFirst,
  mostRecentStartDateFirst,
  oldestEndDateFirst,
  oldestStartDateFirst,
} from "../utils/unitFunctions/sortDateFunctions";
import {
  activateMostRecentEndDate,
  activateOldestEndDate,
  activateOldestStartDate,
} from "./DateSortButtons";

export function Dashboard(): JSX.Element {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    initialDashboardState
  );

  console.log(dashboardState);

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      dashboardDispatch({
        type: dashboardActionsLibrary.SET_PROJECTS,
        payload: { ...dashboardState, projects: projectsWithAllInfo },
      });
      //In dispatch send a payload which keeps all other states the same and only sends the new "projects" information we want to update
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const aggregateRevenue = sumAllRevenues(dashboardState.projects);

  //order by startDate by default
  let filteredProjects: ProjectInterfaceWithAllData[] =
    dashboardState.projects.sort((proj1, proj2) =>
      mostRecentStartDateFirst(proj1, proj2)
    );

  //FITLER BY CLIENT
  if (dashboardState.clientSearch !== "Select a Client...") {
    filteredProjects = dashboardState.projects.filter(
      (project) => project.clientName === dashboardState.clientSearch
    );
  }

  //FILTER BY EMPLOYEE
  function doesProjectIncludeEmployee(
    project: ProjectInterfaceWithAllData
  ): boolean {
    const thisProjectsEmployeeNames = getProjectsEmployeeNames(project);
    return thisProjectsEmployeeNames.includes(dashboardState.employeeSearch);
  }

  if (dashboardState.employeeSearch !== "Select an Employee...") {
    filteredProjects = filteredProjects.filter((project) =>
      doesProjectIncludeEmployee(project)
    );
  }

  //SORT BY DATE
  //Sort by most recent start date is DEFAULT
  if (dashboardState.dateSortToggles === activateOldestStartDate) {
    filteredProjects.sort((proj1, proj2) => oldestStartDateFirst(proj1, proj2));
  } else if (dashboardState.dateSortToggles === activateMostRecentEndDate) {
    filteredProjects.sort((proj1, proj2) =>
      mostRecentEndDateFirst(proj1, proj2)
    );
  } else if (dashboardState.dateSortToggles === activateOldestEndDate) {
    filteredProjects.sort((proj1, proj2) => oldestEndDateFirst(proj1, proj2));
  }

  const projectCards: JSX.Element[] = filteredProjects.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
      projects={dashboardState.projects}
    />
  ));

  return (
    <>
      <main className="mainContent">
        <h1 className="title">Aggregate Revenue: £{aggregateRevenue}</h1>
        <div>Projects Found: {filteredProjects.length}</div>
        <FilterControls
          dashboardState={dashboardState}
          dashboardDispatch={dashboardDispatch}
        />
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
