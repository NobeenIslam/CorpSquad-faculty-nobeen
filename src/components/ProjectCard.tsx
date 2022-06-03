import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";
import { Link } from "react-router-dom";
import { sortByEmployeeName } from "../utils/unitFunctions/sortByEmployeeName";

interface ProjectCardProps {
  project: ProjectInterfaceWithAllData;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const alphabeticalEmployees = project.employees.sort((e1, e2) =>
    sortByEmployeeName(e1, e2)
  );

  const employeeTokens: JSX.Element[] = alphabeticalEmployees.map(
    (employee) => <EmployeeToken key={employee.id} employee={employee} />
  );

  return (
    <section className="projectCard">
      <h2>Project Id: {project.id}</h2>
      <div>
        <b>Start-Date:</b> {project.contract.startDate} || End-Date:{" "}
        {project.contract.endDate}
      </div>
      <div>
        <b>Client:</b>{" "}
        <Link to={`/clients/${project.clientId}`}>{project.clientName}</Link>
      </div>
      <div>
        <b>Revenue:</b> £{project.contract.size}
      </div>
      <h3>Employees:</h3>
      <section className="employeeTokensContainer">{employeeTokens}</section>
    </section>
  );
}
