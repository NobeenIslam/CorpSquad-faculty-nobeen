import {
  EmployeeInterface,
  ProjectInterfaceWithAllData,
  ProjectInterfaceWithClientName,
} from "./Interfaces";

export function addEmployeeInfoToProjects(
  projects: ProjectInterfaceWithClientName[],
  employees: EmployeeInterface[]
):ProjectInterfaceWithAllData[] {
  const projectsWillAllInfo = projects.map((project) => {
    const employeesForThisProject = project.employeeIds.map((id) => {
      //For each employee id in the project get his/her full data by searching through employees
      const fullEmployeeData = employees.find((employee) => id === employee.id);
      if (fullEmployeeData === undefined) {
        return "Employee not found";
      } else {
        return fullEmployeeData;
      }
    });
    return { ...project, employees: employeesForThisProject };
  });
  return projectsWillAllInfo;
}
