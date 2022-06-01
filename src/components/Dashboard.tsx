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
  const [dashboardState, dispatch] = useReducer(
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

      dispatch({
        type: dashboardActionsLibrary.SET_PROJECTS,
        payload: { ...dashboardState, projects: projectsWithAllInfo },
      });
      //In dispatch send a payload which keeps all other states the same and only sends the new "projects" information we want to update
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const projectCards: JSX.Element[] = dashboardState.projects.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
      projects={dashboardState.projects}
    />
  ));

  const aggregateRevenue = sumAllRevenues(dashboardState.projects);
  return (
    <>
      <main className="mainContent">
        <h1 className="title">Aggregate Revenue: £{aggregateRevenue}</h1>
        <SearchControls dashboardState={dashboardState} />
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
