import { EmployeeInterface } from "../Interfaces";

export function sortByEmployeeName(
  employee1: EmployeeInterface,
  employee2: EmployeeInterface
): number {
  if (employee1.name < employee2.name) {
    return -1;
  } else if (employee1.name > employee2.name) {
    return 1;
  } else {
    return 0;
  }
}
