import { useLocation, useParams } from "react-router-dom";
import { getClientsEmployees } from "../utils/unitFunctions/getClientsEmployees";
import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";
import { ProjectCard } from "./ProjectCard";
import { sortByEmployeeName } from "../utils/unitFunctions/sortByEmployeeName";

export function ClientProfile(): JSX.Element {
  const { clientId } = useParams();
  const location = useLocation();
  const projects = location.state as ProjectInterfaceWithAllData[];

  const thisClientsProjects = projects.filter(
    (project) => clientId === project.clientId
  );
  const thisClientsName = thisClientsProjects[0].clientName;
  const thisClientsEmployees = getClientsEmployees(thisClientsProjects).sort(
    (e1, e2) => sortByEmployeeName(e1, e2)
  );

  const thisClientsProjectCards: JSX.Element[] = thisClientsProjects.map(
    (project) => (
      <ProjectCard key={project.id} project={project} projects={projects} />
    )
  );

  const thisClientsEmployeeTokens: JSX.Element[] = thisClientsEmployees.map(
    (employee) => (
      <EmployeeToken
        key={employee.id}
        employee={employee}
        projects={projects}
      />
    )
  );

  return (
    <main className="mainContent">
      <h1 className="title">Client: {thisClientsName}</h1>
      <section className="dashboard">{thisClientsProjectCards}</section>
      <section className="clientEmployeesContainer">
        <h2>All Employees affiliated with {thisClientsName}:</h2>
        <div className="clientEmployeesTokens">{thisClientsEmployeeTokens}</div>
      </section>
    </main>
  );
}
