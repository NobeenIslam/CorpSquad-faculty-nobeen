import { ClientInterface, ProjectInterface, ProjectInterfaceWithClientName } from "./Interfaces";

export function addClientNameToProjects(
  projects: ProjectInterface[],
  clients: ClientInterface[]
):ProjectInterfaceWithClientName[] {
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
