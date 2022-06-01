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
import { SearchControls } from "./SearchControls";
import {
  dashboardActionsLibrary,
  dashboardReducer,
  initialDashboardState,
} from "../utils/reducerStateManagement/dashboardManager";

export function Dashboard(): JSX.Element {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    initialDashboardState
  );
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

  console.log(dashboardState.clientSearch);

  const aggregateRevenue = sumAllRevenues(dashboardState.projects);

  let filteredProjects: ProjectInterfaceWithAllData[] = dashboardState.projects;

  if (dashboardState.clientSearch !== "Select a Client...") {
    filteredProjects = dashboardState.projects.filter(
      (project) => project.clientName === dashboardState.clientSearch
    );
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
        <SearchControls
          dashboardState={dashboardState}
          dashboardDispatch={dashboardDispatch}
        />
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
