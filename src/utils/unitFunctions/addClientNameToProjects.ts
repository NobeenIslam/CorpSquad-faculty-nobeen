import {
  ClientInterface,
  ProjectInterface,
  ProjectInterfaceWithClientName,
} from "../Interfaces";

/**
 * Adds clientName to each project object in the array based on the clientID.
 * @param projects {ProjectInterface[]} Projects object array without clientName and full employee info
 * @param clients {ClientInterface[]} Clients object array which containts client ids and their names
 * @returns {ProjectInterfaceWithClientName[]} Projects object array with clientNames as a key/value
 */

export function addClientNameToProjects(
  projects: ProjectInterface[],
  clients: ClientInterface[]
): ProjectInterfaceWithClientName[] {
  const projectsWithClientNames = projects.map((project) => {
    const thisProjectsClient = clients.find(
      (client) => client.id === project.clientId
    );
    if (thisProjectsClient === undefined) {
      return { ...project, clientName: "Client not found" };
    } else {
      return { ...project, clientName: thisProjectsClient.name };
    }
  });
  return projectsWithClientNames;
}
