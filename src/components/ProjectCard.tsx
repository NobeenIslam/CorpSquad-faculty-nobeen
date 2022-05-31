import { ProjectInterfaceWithAllData } from "../utils/Interfaces";
import { EmployeeToken } from "./EmployeeToken";

interface ProjectCardProps {
  project: ProjectInterfaceWithAllData;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {

  const employeeTokens: JSX.Element[] = project.employees.map((employee)=><EmployeeToken key= {employee.id} employee={employee}/>)
  
  return (
    <section>
      <h2>{project.id}</h2>
      <div>Start-Date:{project.contract.startDate}</div>
      <div>End-Date:{project.contract.endDate}</div>
      <div>Client: {project.clientName}</div>
      <div>Revenue: £{project.contract.size}</div>
      <div>Employees: {employeeTokens}</div>
    </section>
  );
}
