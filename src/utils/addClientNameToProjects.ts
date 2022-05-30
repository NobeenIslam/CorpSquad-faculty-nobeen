import { ClientInterface, ProjectInterface } from "./Interfaces";

export function addClientNameToProjects(
  projects: ProjectInterface[],
  clients: ClientInterface[]
) {
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
