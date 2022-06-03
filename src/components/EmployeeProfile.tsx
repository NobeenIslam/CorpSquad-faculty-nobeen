import { useLocation } from "react-router-dom";
import {
  EmployeeInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { EmployeeTokenForPage } from "./EmployeeTokenForPage";
import { ProjectCard } from "./ProjectCard";

interface State {
  employee: EmployeeInterface;
}

interface EmployeeProfileProps {
  projects: ProjectInterfaceWithAllData[];
}

export function EmployeeProfile({
  projects,
}: EmployeeProfileProps): JSX.Element {
  const location = useLocation();
  const { employee } = location.state as State;

  //Can't do .includes as the objects are not the referencing same place in memory. Filter would return nothing
  const thisEmployeesProjects = projects.filter((project) => {
    const didFind = project.employees.find(
      (currEmployee) => currEmployee.id === employee.id
    );
    return didFind ? true : false;
  });

  const thisEmployeesProjectsCards: JSX.Element[] = thisEmployeesProjects.map(
    (project) => <ProjectCard key={project.id} project={project} />
  );

  return (
    <main className="mainContent">
      <EmployeeTokenForPage employee={employee} />
      <section className="dashboard">{thisEmployeesProjectsCards}</section>
    </main>
  );
}
