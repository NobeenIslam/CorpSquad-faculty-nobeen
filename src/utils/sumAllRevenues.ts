import { ProjectInterfaceWithAllData } from "./Interfaces";

export function sumAllRevenues(
  projects: ProjectInterfaceWithAllData[]
): number {
  const aggregateRevenue = projects.reduce((acc, project) => {
    const thisProjectRevenue = parseInt(project.contract.size);
    if (thisProjectRevenue === NaN) {
      return acc + 0;
    } else {
      return acc + thisProjectRevenue;
    }
  }, 0);
  return aggregateRevenue;
}
