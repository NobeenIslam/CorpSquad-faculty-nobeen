import { Link } from "react-router-dom";
import {
  EmployeeInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";

interface EmployeeTokenProps {
  employee: EmployeeInterface;
  projects: ProjectInterfaceWithAllData[]; //Needed to pass in as props so can declare state for link Route
}

export function EmployeeToken({
  employee,
  projects,
}: EmployeeTokenProps): JSX.Element {
  return (
    <div className="employeeToken">
      <Link
        to={`/employees/${employee.id}`}
        state={{ projects: projects, employee: employee }}
      >
        <img src={employee.avatar} alt="" />
      </Link>
      <p>{employee.name}</p>
    </div>
  );
}
