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
    <section className="card my-4">
      <h5 className="card-header text-center">Project Id: {project.id}</h5>
      <div className="card-body">
        {" "}
        <div className="text-center">
          <b>Start-Date:</b> {project.contract.startDate} || <b>End-Date: </b>
          {project.contract.endDate}
        </div>
        <div className="text-center ">
          <b>Client:</b>{" "}
          <Link to={`/clients/${project.clientId}`}>{project.clientName}</Link>
        </div>
        <div className="text-center">
          <b>Revenue:</b> £{project.contract.size}
        </div>
        <h3>Employees:</h3>
        <section className="d-flex flex-row flex-wrap justify-content-center">
          {employeeTokens}
        </section>
      </div>
    </section>
  );
}
