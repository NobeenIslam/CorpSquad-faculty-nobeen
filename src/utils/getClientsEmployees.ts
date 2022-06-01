import { EmployeeInterface, ProjectInterfaceWithAllData } from "./Interfaces";

/**
 * This function is expected to be run in Client Profile to get all the employees that have worked for a specific client
 * @param thisClientsProjects Expects an array which represents only that client's projects
 * @returns {EmployeeInterface[]} Array of all the employees that have worked with that client. No duplicates
 */
export function getClientsEmployees(
  thisClientsProjects: ProjectInterfaceWithAllData[]
): EmployeeInterface[] {
  const thisClientsEmployeesWithDuplicates = thisClientsProjects
    .map((project) => project.employees)
    .flat();
  const thisClientsEmployeesUnique = thisClientsEmployeesWithDuplicates.filter(
    (employee, index) => {
      return thisClientsEmployeesWithDuplicates.indexOf(employee) === index;
    }
  );
  return thisClientsEmployeesUnique;
}
