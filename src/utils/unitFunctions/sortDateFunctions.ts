import { ProjectInterfaceWithAllData } from "../Interfaces";

export function mostRecentStartDateFirst(
  firstProject: ProjectInterfaceWithAllData,
  secondProject: ProjectInterfaceWithAllData
): number {
  const firstDate = new Date(firstProject.contract.startDate);
  const secondDate = new Date(secondProject.contract.startDate);
  return secondDate.getTime() - firstDate.getTime();
}

export function oldestStartDateFirst(
  firstProject: ProjectInterfaceWithAllData,
  secondProject: ProjectInterfaceWithAllData
): number {
  const firstDate = new Date(firstProject.contract.startDate);
  const secondDate = new Date(secondProject.contract.startDate);
  return firstDate.getTime() - secondDate.getTime();
}

export function mostRecentEndDateFirst(
  firstProject: ProjectInterfaceWithAllData,
  secondProject: ProjectInterfaceWithAllData
): number {
  const firstDate = new Date(firstProject.contract.endDate);
  const secondDate = new Date(secondProject.contract.endDate);
  return secondDate.getTime() - firstDate.getTime();
}

export function oldestEndDateFirst(
  firstProject: ProjectInterfaceWithAllData,
  secondProject: ProjectInterfaceWithAllData
): number {
  const firstDate = new Date(firstProject.contract.endDate);
  const secondDate = new Date(secondProject.contract.endDate);
  return firstDate.getTime() - secondDate.getTime();
}
