import { ProjectInterfaceWithAllData } from "../Interfaces";

export function getProjectsEmployeeNames(
  project: ProjectInterfaceWithAllData
): string[] {
  return project.employees.map((employee) => employee.name);
}
