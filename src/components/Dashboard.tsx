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
  State,
} from "../utils/Interfaces";
import { sumAllRevenues } from "../utils/unitFunctions/sumAllRevenues";
import { ProjectCard } from "./ProjectCard";
import { SearchControls } from "./SearchControls";

interface Action {
  type: string;
  payload: State; //Send a payload with dispatch that has all the state information to update / keep the same
}

//To protect against string typos and hard-coded strings everywhere in the code
const actionsLibrary = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_CLIENT_SEARCH: "SET_CLIENT_SEARCH",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionsLibrary.SET_PROJECTS: {
      return { ...state, projects: action.payload.projects }; //Keep all other state variables the same and only update projects
    }
    case actionsLibrary.SET_CLIENT_SEARCH: {
      return { ...state, clientSearch: "test" };
    }
    default: {
      return state;
    }
  }
}

export function Dashboard(): JSX.Element {
  const initialState: State = {
    projects: [],
    clientSearch: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      dispatch({
        type: actionsLibrary.SET_PROJECTS,
        payload: { ...state, projects: projectsWithAllInfo },
      });
      //In dispatch send a payload which keeps all other states the same and only sends the new "projects" information we want to update
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const projectCards: JSX.Element[] = state.projects.map((project) => (
    <ProjectCard key={project.id} project={project} projects={state.projects} />
  ));

  const aggregateRevenue = sumAllRevenues(state.projects);
  return (
    <>
      <main className="mainContent">
        <h1 className="title">Aggregate Revenue: £{aggregateRevenue}</h1>
        <SearchControls state={state} />
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
