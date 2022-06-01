import { useLocation } from "react-router-dom";
import {
  EmployeeInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { EmployeeTokenForPage } from "./EmployeeTokenForPage";
import { ProjectCard } from "./ProjectCard";

interface State {
  projects: ProjectInterfaceWithAllData[];
  employee: EmployeeInterface;
}

export function EmployeeProfile(): JSX.Element {
  //const { employeeId } = useParams();
  const location = useLocation();
  const { projects, employee } = location.state as State;

  const thisEmployeesProjects = projects.filter((project) =>
    project.employees.includes(employee)
  );

  const thisEmployeesProjectsCards: JSX.Element[] = thisEmployeesProjects.map(
    (project) => (
      <ProjectCard key={project.id} project={project} projects={projects} />
    )
  );

  console.log(thisEmployeesProjects);
  return (
    <main>
      <EmployeeTokenForPage employee={employee} />
      <section className="dashboard">{thisEmployeesProjectsCards}</section>
    </main>
  );
}
