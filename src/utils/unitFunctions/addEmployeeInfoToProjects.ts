import {
  BlankEmployeeInterface,
  EmployeeInterface,
  ProjectInterfaceWithAllData,
  ProjectInterfaceWithClientName,
} from "../Interfaces";

/**
 * Takes a mofified projects array, which already has clientNames added and appends the full employee infos of the employees that
 * have worked on the project.
 * @param projects {ProjectInterfaceWithClientName[]} Projects object array without clientName and full employee info
 * @param employees {EmployeeInterface[]} Clients object array which containts client ids and their names
 * @returns {ProjectInterfaceWithAllData[]} Projects object array with clientNames and employees' (full-info array) as a keys/values
 */

export function addEmployeeInfoToProjects(
  projects: ProjectInterfaceWithClientName[],
  employees: EmployeeInterface[]
): ProjectInterfaceWithAllData[] {
  const projectsWillAllInfo = projects.map((project) => {
    const employeesForThisProject = project.employeeIds.map((id) => {
      //For each employee id in the project get his/her full data by searching through employees and matching by ID
      const fullEmployeeData = employees.find((employee) => id === employee.id);
      if (fullEmployeeData === undefined) {
        const blankEmployee: BlankEmployeeInterface = {
          id: "Employee Not Found",
          name: "Employee Not Found",
          role: "Employee Not Found",
          avatar: "",
        };
        return blankEmployee;
      } else {
        return fullEmployeeData;
      }
    });
    return { ...project, employees: employeesForThisProject };
  });
  return projectsWillAllInfo;
}
