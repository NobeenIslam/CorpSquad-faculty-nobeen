import { useEffect, useState } from "react";
import { ClientInterface, EmployeeInterface, ProjectInterface } from "../utils/Interfaces";
import { ProjectCard } from "./ProjectCard";

export function Dashboard(): JSX.Element {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);

  async function fetchProjects() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/projects"
    );
    const projectsJSON: ProjectInterface[] = await response.json();
    setProjects(projectsJSON);
  }

  async function fetchClients() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/clients"
    );
    const clientsJSON: ClientInterface[] = await response.json();
    setClients(clientsJSON);
  }

  async function fetchEmployees() {
    const response = await fetch(
      "https://consulting-projects.academy-faculty.repl.co/api/employees"
    );
    const employeesJSON: ClientInterface[] = await response.json();
    setClients(employeesJSON);
  }

  useEffect(() => {
    fetchProjects();
    fetchClients();
    fetchEmployees();
  }, []);

  return (
    <>
      <div>{JSON.stringify(projects[1])}</div>
      <ProjectCard project={projects[1]} />
    </>
  );
}
