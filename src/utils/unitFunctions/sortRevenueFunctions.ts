import { ProjectInterfaceWithAllData } from "../Interfaces";

export function sortRevenueAscending(
  proj1: ProjectInterfaceWithAllData,
  proj2: ProjectInterfaceWithAllData
): number {
  return parseInt(proj1.contract.size) - parseInt(proj2.contract.size);
}

export function sortRevenueDescending(
  proj1: ProjectInterfaceWithAllData,
  proj2: ProjectInterfaceWithAllData
): number {
  return parseInt(proj2.contract.size) - parseInt(proj1.contract.size);
}
