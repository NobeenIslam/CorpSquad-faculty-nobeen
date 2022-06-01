import { useLocation, useParams } from "react-router-dom";
import {
  EmployeeInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";

interface State {
  projects: ProjectInterfaceWithAllData[];
  employee: EmployeeInterface;
}

export function EmployeeProfile(): JSX.Element {
  const { employeeId } = useParams();
  const location = useLocation();
  const { projects, employee } = location.state as State;

  console.log(projects);
  return (
    <main>
      <EmployeeToken employee={employee} projects={projects} />
      <p>{employee.role}</p>
    </main>
  );
}
