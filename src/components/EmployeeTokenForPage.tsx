import { EmployeeInterface } from "../utils/Interfaces";
//This component is only for the personal Employee Page (Right at the top). No need for linking here so alot of the more complex
//things have been removed
interface EmployeeTokenForPageProps {
  employee: EmployeeInterface;
}

export function EmployeeTokenForPage({
  employee,
}: EmployeeTokenForPageProps): JSX.Element {
  return (
    <div className="employeeTokenForPage">
      <img src={employee.avatar} alt="" />
      <h2>Name: {employee.name}</h2>
      <h3>Role: {employee.role}</h3>
    </div>
  );
}
