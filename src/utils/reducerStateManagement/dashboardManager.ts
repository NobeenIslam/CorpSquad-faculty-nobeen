import { ProjectInterfaceWithAllData } from "../Interfaces";

//To protect against string typos and hard-coded strings everywhere in the code
export const dashboardActionsLibrary = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_CLIENT_SEARCH: "SET_CLIENT_SEARCH",
  SET_EMPLOYEE_SEARCH: "SET_EMPLOYEE_SEARCH",
  TOGGLE_DATE_SORT: "TOGGLE_DATE_SORT",
  SET_AFTER_START_DATE_SEARCH: "SET_AFTER_START_DATE_SEARCH",
  SET_BEFORE_START_DATE_SEARCH: "SET_BEFORE_START_DATE_SEARCH",
  SET_AFTER_END_DATE_SEARCH: "SET_AFTER_END_DATE_SEARCH",
  SET_BEFORE_END_DATE_SEARCH: "SET_BEFORE_END_DATE_SEARCH",
  SET_REVENUE_SORT: "SET_REVENUE_SORT",
};

//endDate searches are initialised empty strings because when you "clear" on the date picker it sets the value to empty ""
export const initialDashboardState: DashboardState = {
  projects: [],
  clientSearch: "Select a Client...",
  employeeSearch: "Select an Employee...",
  dateSortToggles: ["active", "inactive", "inactive", "inactive"],
  afterStartDateSearch: "",
  beforeStartDateSearch: "",
  afterEndDateSearch: "",
  beforeEndDateSearch: "",
  revenueSortToggles: ["inactive", "inactive"],
};

export interface DashboardState {
  projects: ProjectInterfaceWithAllData[];
  clientSearch: string;
  employeeSearch: string;
  dateSortToggles: string[];
  afterStartDateSearch: string;
  beforeStartDateSearch: string;
  afterEndDateSearch: string;
  beforeEndDateSearch: string;
  revenueSortToggles: string[];
}

export interface DashboardActions {
  type: string;
  payload: DashboardState; //Send a payload with dispatch that has all the state information to update / keep the same
}

export function dashboardReducer(
  state: DashboardState,
  action: DashboardActions
): DashboardState {
  switch (action.type) {
    case dashboardActionsLibrary.SET_PROJECTS: {
      return { ...state, projects: action.payload.projects }; //Keep all other state variables the same and only update projects
    }
    case dashboardActionsLibrary.SET_CLIENT_SEARCH: {
      return { ...state, clientSearch: action.payload.clientSearch };
    }
    case dashboardActionsLibrary.SET_EMPLOYEE_SEARCH: {
      return { ...state, employeeSearch: action.payload.employeeSearch };
    }
    case dashboardActionsLibrary.TOGGLE_DATE_SORT: {
      return {
        ...state,
        dateSortToggles: action.payload.dateSortToggles,
        revenueSortToggles: action.payload.revenueSortToggles,
      };
    }
    case dashboardActionsLibrary.SET_AFTER_START_DATE_SEARCH: {
      return {
        ...state,
        afterStartDateSearch: action.payload.afterStartDateSearch,
      };
    }
    case dashboardActionsLibrary.SET_BEFORE_START_DATE_SEARCH: {
      return {
        ...state,
        beforeStartDateSearch: action.payload.beforeStartDateSearch,
      };
    }
    case dashboardActionsLibrary.SET_AFTER_END_DATE_SEARCH: {
      return {
        ...state,
        afterEndDateSearch: action.payload.afterEndDateSearch,
      };
    }
    case dashboardActionsLibrary.SET_BEFORE_END_DATE_SEARCH: {
      return {
        ...state,
        beforeEndDateSearch: action.payload.beforeEndDateSearch,
      };
    }
    case dashboardActionsLibrary.SET_REVENUE_SORT: {
      return {
        ...state,
        dateSortToggles: action.payload.dateSortToggles,
        revenueSortToggles: action.payload.revenueSortToggles,
      };
    }
    default: {
      return state;
    }
  }
}
