import { EmployeeInterface } from "../utils/Interfaces";

interface EmployeeTokenProps {
  employee: EmployeeInterface;
}

export function EmployeeToken({ employee }: EmployeeTokenProps): JSX.Element {
  return (
    <div className="employeeToken">
      <img src={employee.avatar} alt="" />
      <p>{employee.name}</p>
    </div>
  );
}
