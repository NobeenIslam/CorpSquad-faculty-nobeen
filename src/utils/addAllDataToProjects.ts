import { addClientNameToProjects } from "./addClientNameToProjects";
import { addEmployeeInfoToProjects } from "./addEmployeeInfoToProjects";
import {
  ClientInterface,
  EmployeeInterface,
  ProjectInterface,
  ProjectInterfaceWithAllData,
  ProjectInterfaceWithClientName,
} from "./Interfaces";

/**
 * Takes projects and adds all additional information (client names and all employee information
 * @param projects {ProjectInterface[]} Projects object array without clientName and full employee info
 * @param clients  {ClientInterface[]} Clients object array which containts client ids and their names
 * @param employees {EmployeeInterface[]} Clients object array which containts client ids and their names
 * @returns @returns {ProjectInterfaceWithAllData[]} Projects object array with clientNames and employees' (full-info array) as a keys/values
 */

export function addAllDataToProjects(
  projects: ProjectInterface[],
  clients: ClientInterface[],
  employees: EmployeeInterface[]
): ProjectInterfaceWithAllData[] {
  // Take each project and return an object with all key/values of project + name from clients based on the Ids matching
  const projectsWithClientNames: ProjectInterfaceWithClientName[] =
    addClientNameToProjects(projects, clients);
  const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
    addEmployeeInfoToProjects(projectsWithClientNames, employees);

  return projectsWithAllInfo;
}
