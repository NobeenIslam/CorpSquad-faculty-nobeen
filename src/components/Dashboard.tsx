import { useEffect, useReducer } from "react";
import { addAllDataToProjects } from "../utils/addAllDataToProjects";

import {
  fetchProjects,
  fetchClients,
  fetchEmployees,
} from "../utils/fetchData";
import {
  ClientInterface,
  EmployeeInterface,
  ProjectInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { sumAllRevenues } from "../utils/sumAllRevenues";
import { ProjectCard } from "./ProjectCard";

interface Action {
  type: string;
  newProjects: ProjectInterfaceWithAllData[];
}

interface State {
  projects: ProjectInterfaceWithAllData[];
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_ALL_DATA": {
      const newState = { projects: action.newProjects };
      return newState;
    }
    default: {
      return state;
    }
  }
}

export function Dashboard(): JSX.Element {
  const initialState: State = {
    projects: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      dispatch({ type: "ADD_ALL_DATA", newProjects: projectsWithAllInfo });
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const projectCards: JSX.Element[] = state.projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  const aggregateRevenue = sumAllRevenues(state.projects);
  return (
    <>
      <main className="mainContent">
        <h1 className="revenue">Aggregate Revenue: £{aggregateRevenue}</h1>
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
