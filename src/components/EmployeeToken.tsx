import { Link } from "react-router-dom";
import { EmployeeInterface } from "../utils/Interfaces";

interface EmployeeTokenProps {
  employee: EmployeeInterface;
}

export function EmployeeToken({ employee }: EmployeeTokenProps): JSX.Element {
  return (
    <div className="d-flex flex-column mx-4 align-items-center">
      <Link to={`/employees/${employee.id}`}>
        <img src={employee.avatar} alt="" />
      </Link>
      <p className="text-center">{employee.name}</p>
    </div>
  );
}
