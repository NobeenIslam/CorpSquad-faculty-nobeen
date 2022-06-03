import { Link } from "react-router-dom";
import { EmployeeInterface } from "../utils/Interfaces";

interface EmployeeTokenProps {
  employee: EmployeeInterface;
}

export function EmployeeToken({ employee }: EmployeeTokenProps): JSX.Element {
  return (
    <div className="employeeToken">
      <Link to={`/employees/${employee.id}`}>
        <img src={employee.avatar} alt="" />
      </Link>
      <p>{employee.name}</p>
    </div>
  );
}
