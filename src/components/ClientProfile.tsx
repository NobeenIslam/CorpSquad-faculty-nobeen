import { useParams } from "react-router-dom";
import { getClientsEmployees } from "../utils/unitFunctions/getClientsEmployees";
import { EmployeeToken } from "./EmployeeToken";
import { ProjectCard } from "./ProjectCard";
import { sortByEmployeeName } from "../utils/unitFunctions/sortByEmployeeName";
import { DashboardState } from "../utils/reducerStateManagement/dashboardManager";

interface ClientProfileProps {
  dashboardState: DashboardState;
}

export function ClientProfile({
  dashboardState,
}: ClientProfileProps): JSX.Element {
  const { clientId } = useParams();

  const thisClientsProjects = dashboardState.projects.filter(
    (project) => clientId === project.clientId
  );
  const thisClientsName = thisClientsProjects[0].clientName;
  const thisClientsEmployees = getClientsEmployees(thisClientsProjects).sort(
    (e1, e2) => sortByEmployeeName(e1, e2)
  );

  const thisClientsProjectCards: JSX.Element[] = thisClientsProjects.map(
    (project) => <ProjectCard key={project.id} project={project} />
  );

  const thisClientsEmployeeTokens: JSX.Element[] = thisClientsEmployees.map(
    (employee) => <EmployeeToken key={employee.id} employee={employee} />
  );

  return (
    <main className="container col justify-content-center mt-4">
      <h1 className="text-center">Client: {thisClientsName}</h1>
      <p className="text-center mt-2 mb-0">
        <a href="#afilEmp" className="text-secondary">
          Go to: All Affiliated Employees
        </a>
      </p>
      <section className="d-flex flex-column mx-5">
        {thisClientsProjectCards}
      </section>
      <div className="card mx-5">
        <h2 id="afilEmp" className="card-header text-center mt-2 mb-4">
          All Employees affiliated with {thisClientsName}:
        </h2>
        <section className="d-flex flex-row flex-wrap justify-content-center ">
          {thisClientsEmployeeTokens}
        </section>
      </div>
    </main>
  );
}
