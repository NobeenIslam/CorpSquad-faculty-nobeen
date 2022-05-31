import { useEffect, useState } from "react";
import { addClientNameToProjects } from "../utils/addClientNameToProjects";
import { addEmployeeInfoToProjects } from "../utils/addEmployeeInfoToProjects";
import {
  ClientInterface,
  EmployeeInterface,
  ProjectInterface,
  ProjectInterfaceWithAllData,
  ProjectInterfaceWithClientName,
} from "../utils/Interfaces";
import { ProjectCard } from "./ProjectCard";

export function Dashboard(): JSX.Element {
  const [fullResource, setFullResource] = useState<
    ProjectInterfaceWithAllData[]
  >([]);

  console.log("RENDER");

  async function fetchProjects() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/projects"
    );
    const projectsJSON: ProjectInterface[] = await response.json();
    return projectsJSON;
  }

  async function fetchClients() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/clients"
    );
    const clientsJSON: ClientInterface[] = await response.json();
    return clientsJSON;
  }

  async function fetchEmployees() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/employees"
    );
    const employeesJSON: EmployeeInterface[] = await response.json();
    return employeesJSON;
  }

  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      // Take each project and return an object with all key/values of project + name from clients based on the Ids matching
      const projectsWithClientNames: ProjectInterfaceWithClientName[] =
        addClientNameToProjects(projects, clients);
      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addEmployeeInfoToProjects(projectsWithClientNames, employees);

      setFullResource(projectsWithAllInfo);
    }
    fetchAllData()
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
