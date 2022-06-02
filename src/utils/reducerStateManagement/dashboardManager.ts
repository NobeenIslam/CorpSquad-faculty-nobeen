import { ProjectInterfaceWithAllData } from "../Interfaces";

//To protect against string typos and hard-coded strings everywhere in the code
export const dashboardActionsLibrary = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_CLIENT_SEARCH: "SET_CLIENT_SEARCH",
  SET_EMPLOYEE_SEARCH: "SET_EMPLOYEE_SEARCH",
  TOGGLE_DATE_SORT: "TOGGLE_DATE_SORT",
};

export const initialDashboardState: DashboardState = {
  projects: [],
  clientSearch: "Select a Client...",
  employeeSearch: "Select an Employee...",
  dateSortToggles: ["active", "inactive", "inactive", "inactive"],
};

export interface DashboardState {
  projects: ProjectInterfaceWithAllData[];
  clientSearch: string;
  employeeSearch: string;
  dateSortToggles: string[];
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
      return { ...state, dateSortToggles: action.payload.dateSortToggles };
    }
    default: {
      return state;
    }
  }
}
