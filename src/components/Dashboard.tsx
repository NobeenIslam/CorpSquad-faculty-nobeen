import { useEffect } from "react";
import { addAllDataToProjects } from "../utils/unitFunctions/addAllDataToProjects";

import {
  fetchProjects,
  fetchClients,
  fetchEmployees,
} from "../utils/unitFunctions/fetchData";
import {
  ClientInterface,
  EmployeeInterface,
  ProjectInterface,
  ProjectInterfaceWithAllData,
} from "../utils/Interfaces";
import { sumAllRevenues } from "../utils/unitFunctions/sumAllRevenues";
import { ProjectCard } from "./ProjectCard";
import {
  activateSortRevenueAscending,
  activateSortRevenueDescending,
  FilterControls,
} from "./FilterControls";
import {
  DashboardActions,
  dashboardActionsLibrary,
  DashboardState,
} from "../utils/reducerStateManagement/dashboardManager";
import {
  mostRecentEndDateFirst,
  mostRecentStartDateFirst,
  oldestEndDateFirst,
  oldestStartDateFirst,
} from "../utils/unitFunctions/sortDateFunctions";
import {
  activateMostRecentEndDate,
  activateOldestEndDate,
  activateOldestStartDate,
} from "./DateSortButtons";
import {
  filterByAfterStartDate,
  filterByBeforeEndDate,
  filterByBeforeStartDate,
  filterByClient,
  filterByEmployee,
  filterByGreaterThanRevenue,
  filterByLessThanRevenue,
} from "../utils/unitFunctions/filterFunctions";
import {
  sortRevenueAscending,
  sortRevenueDescending,
} from "../utils/unitFunctions/sortRevenueFunctions";

interface DashboardProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export function Dashboard({
  dashboardState,
  dashboardDispatch,
}: DashboardProps): JSX.Element {
  useEffect(() => {
    async function fetchAllData() {
      const projects: ProjectInterface[] = await fetchProjects();
      const clients: ClientInterface[] = await fetchClients();
      const employees: EmployeeInterface[] = await fetchEmployees();

      const projectsWithAllInfo: ProjectInterfaceWithAllData[] =
        addAllDataToProjects(projects, clients, employees);

      dashboardDispatch({
        type: dashboardActionsLibrary.SET_PROJECTS,
        payload: { ...dashboardState, projects: projectsWithAllInfo },
      });
      //In dispatch send a payload which keeps all other states the same and only sends the new "projects" information we want to update
    }

    fetchAllData();
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
  }, []);

  const aggregateRevenue = sumAllRevenues(dashboardState.projects);

  //order by by most recentstartDate by default
  let filteredProjects: ProjectInterfaceWithAllData[] =
    dashboardState.projects.sort((proj1, proj2) =>
      mostRecentStartDateFirst(proj1, proj2)
    );

  //SORT BY DATE
  //Sort by most recent start date is DEFAULT
  if (dashboardState.dateSortToggles === activateOldestStartDate) {
    filteredProjects.sort((proj1, proj2) => oldestStartDateFirst(proj1, proj2));
  } else if (dashboardState.dateSortToggles === activateMostRecentEndDate) {
    filteredProjects.sort((proj1, proj2) =>
      mostRecentEndDateFirst(proj1, proj2)
    );
  } else if (dashboardState.dateSortToggles === activateOldestEndDate) {
    filteredProjects.sort((proj1, proj2) => oldestEndDateFirst(proj1, proj2));
  }

  //SORT BY REVENUE
  if (dashboardState.revenueSortToggles === activateSortRevenueAscending) {
    filteredProjects.sort((proj1, proj2) => sortRevenueAscending(proj1, proj2));
  } else if (
    dashboardState.revenueSortToggles === activateSortRevenueDescending
  ) {
    filteredProjects.sort((proj1, proj2) =>
      sortRevenueDescending(proj1, proj2)
    );
  }

  //FITLER BY CLIENT
  if (dashboardState.clientSearch !== "Select a Client...") {
    filteredProjects = filterByClient(dashboardState, filteredProjects);
  }

  //FILTER BY EMPLOYEE
  if (dashboardState.employeeSearch !== "Select an Employee...") {
    filteredProjects = filterByEmployee(dashboardState, filteredProjects);
  }

  //FILTERBY Date

  if (dashboardState.afterStartDateSearch !== "") {
    filteredProjects = filterByAfterStartDate(
      dashboardState.afterStartDateSearch,
      filteredProjects
    );
  }

  if (dashboardState.beforeStartDateSearch !== "") {
    filteredProjects = filterByBeforeStartDate(
      dashboardState.beforeStartDateSearch,
      filteredProjects
    );
  }

  if (
    dashboardState.afterStartDateSearch &&
    dashboardState.beforeStartDateSearch !== ""
  ) {
    const afterSearchTime = new Date(dashboardState.afterStartDateSearch);
    const beforeSearchTime = new Date(dashboardState.beforeStartDateSearch);
    if (afterSearchTime > beforeSearchTime) {
      window.alert("Chronological Conflict! Please select your filters again");
      dashboardDispatch({
        type: dashboardActionsLibrary.SET_BEFORE_START_DATE_SEARCH,
        payload: { ...dashboardState, beforeStartDateSearch: "" },
      });
    }
  }

  if (dashboardState.afterEndDateSearch !== "") {
    filteredProjects = filterByAfterStartDate(
      dashboardState.afterEndDateSearch,
      filteredProjects
    );
  }

  if (dashboardState.beforeEndDateSearch !== "") {
    filteredProjects = filterByBeforeEndDate(
      dashboardState.beforeEndDateSearch,
      filteredProjects
    );
  }

  if (
    dashboardState.afterEndDateSearch &&
    dashboardState.beforeEndDateSearch !== ""
  ) {
    const afterSearchTime = new Date(dashboardState.afterEndDateSearch);
    const beforeSearchTime = new Date(dashboardState.beforeEndDateSearch);
    if (afterSearchTime > beforeSearchTime) {
      window.alert("Chronological Conflict! Please select your filters again");
      dashboardDispatch({
        type: dashboardActionsLibrary.SET_BEFORE_END_DATE_SEARCH,
        payload: { ...dashboardState, beforeEndDateSearch: "" },
      });
    }
  }

  //FILTER BY REVENUE
  if (dashboardState.greaterRevenueSearch !== "") {
    filteredProjects = filterByGreaterThanRevenue(
      dashboardState.greaterRevenueSearch,
      filteredProjects
    );
  }

  if (dashboardState.lesserRevenueSearch !== "") {
    filteredProjects = filterByLessThanRevenue(
      dashboardState.lesserRevenueSearch,
      filteredProjects
    );
  }

  const projectCards: JSX.Element[] = filteredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <>
      <main className="mainContent">
        <h1 className="title">Aggregate Revenue: £{aggregateRevenue}</h1>
        <h2>Filter Projects:</h2>
        <div>Projects Found: {filteredProjects.length}</div>
        <FilterControls
          dashboardState={dashboardState}
          dashboardDispatch={dashboardDispatch}
        />
        <section className="dashboard">{projectCards}</section>
      </main>
    </>
  );
}
