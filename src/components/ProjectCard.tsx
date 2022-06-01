import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: ProjectInterfaceWithAllData;
  projects: ProjectInterfaceWithAllData[]; //Passing down to children so it can be used in EmployeeToken Link
}

export function ProjectCard({
  project,
  projects,
}: ProjectCardProps): JSX.Element {
  const employeeTokens: JSX.Element[] = project.employees.map((employee) => (
    <EmployeeToken key={employee.id} employee={employee} projects={projects} />
  ));

  return (
    <section className="projectCard">
      <h2>Project Id: {project.id}</h2>
      <div>
        <b>Start-Date:</b> {project.contract.startDate} || End-Date:{" "}
        {project.contract.endDate}
      </div>
      <div>
        <b>Client:</b>{" "}
        <Link to={`/clients/${project.clientId}`} state={projects}>
          {project.clientName}
        </Link>
      </div>
      <div>
        <b>Revenue:</b> £{project.contract.size}
      </div>
      <h3>Employees:</h3>
      <section className="employeeTokensContainer">{employeeTokens}</section>
    </section>
  );
}
