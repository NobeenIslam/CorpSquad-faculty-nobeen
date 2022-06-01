import {
  ProjectInterface,
  ClientInterface,
  EmployeeInterface,
} from "../Interfaces";

/**
 * Fetch projects
 * @returns {Promise<ProjectInterface[]>}. Returns a promise array of all the projects taken from the API
 */

export async function fetchProjects(): Promise<ProjectInterface[]> {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/projects"
  );
  const projectsJSON: ProjectInterface[] = await response.json();
  return projectsJSON;
}

/**
 * Fetch Clients
 * @returns {Promise<ClientInterface[]>}. Returns a promise array of all the clients taken from the API
 */

export async function fetchClients(): Promise<ClientInterface[]> {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/clients"
  );
  const clientsJSON: ClientInterface[] = await response.json();
  return clientsJSON;
}

/**
 * Fetch Employees
 * @returns {Promise<EmployeeInterface[]>}. Returns a promise array of all the employees taken from the API
 */

export async function fetchEmployees(): Promise<EmployeeInterface[]> {
  const response = await fetch(
    "https://consulting-projects.academy-faculty.repl.co/api/employees"
  );
  const employeesJSON: EmployeeInterface[] = await response.json();
  return employeesJSON;
}
