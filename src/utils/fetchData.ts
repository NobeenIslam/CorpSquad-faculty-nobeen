import {
  ProjectInterface,
  ClientInterface,
  EmployeeInterface,
} from "./Interfaces";

export async function fetchProjects() {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/projects"
  );
  const projectsJSON: ProjectInterface[] = await response.json();
  return projectsJSON;
}

export async function fetchClients() {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/clients"
  );
  const clientsJSON: ClientInterface[] = await response.json();
  return clientsJSON;
}

export async function fetchEmployees() {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/employees"
  );
  const employeesJSON: EmployeeInterface[] = await response.json();
  return employeesJSON;
}
