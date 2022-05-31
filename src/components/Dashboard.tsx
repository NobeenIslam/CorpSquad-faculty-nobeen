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
import { ProjectCard } from "./ProjectCard";

interface Action {
  type: string;
  newFullResource: ProjectInterfaceWithAllData[];
}

interface State {
  fullResource: ProjectInterfaceWithAllData[];
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_ALL_DATA": {
      const newState = { fullResource: action.newFullResource };
      return newState;
    }
    default: {
      return state;
    }
  }
}

export function Dashboard(): JSX.Element {
  const initialState: State = {
    fullResource: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      dispatch({ type: "ADD_ALL_DATA", newFullResource: projectsWithAllInfo });
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const projectCards: JSX.Element[] = state.fullResource.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <>
      <main>{projectCards}</main>
    </>
  );
}
