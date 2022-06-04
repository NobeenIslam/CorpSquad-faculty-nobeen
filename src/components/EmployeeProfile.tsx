import { useParams } from "react-router-dom";
import { DashboardState } from "../utils/reducerStateManagement/dashboardManager";
import { EmployeeTokenForPage } from "./EmployeeTokenForPage";
import { ProjectCard } from "./ProjectCard";

interface EmployeeProfileProps {
  dashboardState: DashboardState;
}

export function EmployeeProfile({
  dashboardState,
}: EmployeeProfileProps): JSX.Element {
  const thisEmployeeId = useParams().employeeId;
  const thisEmployee = dashboardState.employees.find(
    (employee) => employee.id === thisEmployeeId
  );

  //Can't do .includes as the objects are not the referencing same place in memory. Filter would return nothing
  const thisEmployeesProjects = dashboardState.projects.filter((project) => {
    const didFind = project.employees.find(
      (currEmployee) => currEmployee.id === thisEmployeeId
    );
    return didFind ? true : false;
  });

  const thisEmployeesProjectsCards: JSX.Element[] = thisEmployeesProjects.map(
    (project) => <ProjectCard key={project.id} project={project} />
  );

  return (
    <main className="d-flex flex-column justify-content-center">
      {thisEmployee !== undefined ? (
        <EmployeeTokenForPage employee={thisEmployee} />
      ) : (
        <div>Employee Not Found</div>
      )}
      <section className="d-flex flex-column mx-5">
        {thisEmployeesProjectsCards}
      </section>
    </main>
  );
}
