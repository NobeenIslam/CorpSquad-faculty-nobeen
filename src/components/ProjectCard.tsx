import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";

interface ProjectCardProps {
  project: ProjectInterfaceWithAllData;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const employeeTokens: JSX.Element[] = project.employees.map((employee) => (
    <EmployeeToken key={employee.id} employee={employee} />
  ));

  return (
    <section className="projectCard">
      <h2>{project.id}</h2>
      <div>
        <b>Start-Date:</b> {project.contract.startDate} || End-Date:{" "}
        {project.contract.endDate}
      </div>
      <div>
        <b>Client:</b> {project.clientName}
      </div>
      <div>
        <b>Revenue:</b> £{project.contract.size}
      </div>
      <h3>Employees:</h3>
      <section className="employeeTokens">{employeeTokens}</section>
    </section>
  );
}
