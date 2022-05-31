import { ProjectInterfaceWithAllData } from "./Interfaces";

/**
 * This function iterates through projects and their contracts and sums all the revenues
 * @param projects All projects fetched from API
 * @returns The sum of all the project revenues
 */

export function sumAllRevenues(
  projects: ProjectInterfaceWithAllData[]
): number {
  const aggregateRevenue = projects.reduce((acc, project) => {
    const thisProjectRevenue = parseInt(project.contract.size);
    if (isNaN(thisProjectRevenue)) {
      return acc + 0;
    } else {
      return acc + thisProjectRevenue;
    }
  }, 0);
  return aggregateRevenue;
}
