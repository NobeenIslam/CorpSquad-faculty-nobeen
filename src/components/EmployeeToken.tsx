import { Link } from "react-router-dom";
import { EmployeeInterface } from "../utils/Interfaces";

interface EmployeeTokenProps {
  employee: EmployeeInterface;
}

export function EmployeeToken({ employee }: EmployeeTokenProps): JSX.Element {
  return (
    <div className="col justify-content-center mx-2">
      <Link to={`/employees/${employee.id}`}>
        <img src={employee.avatar} className="row " alt="" />
      </Link>
      <p className=" row text-center">{employee.name}</p>
    </div>
  );
}
