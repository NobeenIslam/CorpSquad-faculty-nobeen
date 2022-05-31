import { useEffect, useState } from "react";
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

export function Dashboard(): JSX.Element {
  const [fullResource, setFullResource] = useState<
    ProjectInterfaceWithAllData[]
  >([]);

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      setFullResource(projectsWithAllInfo);
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const projectCards: JSX.Element[] = fullResource.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <>
      <main>{projectCards}</main>
    </>
  );
}
