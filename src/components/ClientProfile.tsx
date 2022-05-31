import { useLocation, useParams } from "react-router-dom";
import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { ProjectCard } from "./ProjectCard";

export function ClientProfile(): JSX.Element {
  const { clientId } = useParams();
  const location = useLocation();
  const projects = location.state as ProjectInterfaceWithAllData[];

  const thisClientsProjects = projects.filter(
    (project) => clientId === project.clientId
  );
  const thisClientsName = thisClientsProjects[0].clientName;

  const thisClientsProjectCards: JSX.Element[] = thisClientsProjects.map(
    (project) => (
      <ProjectCard key={project.id} project={project} projects={projects} />
    )
  );

  return (
    <main className="mainContent">
      <h1 className="title">Client: {thisClientsName}</h1>
      <section className="dashboard">{thisClientsProjectCards}</section>
    </main>
  );
}
