import { ProjectInterfaceWithAllData } from "../Interfaces";

//To protect against string typos and hard-coded strings everywhere in the code
export const dashboardActionsLibrary = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_CLIENT_SEARCH: "SET_CLIENT_SEARCH",
};

export const initialDashboardState: DashboardState = {
  projects: [],
  clientSearch: "",
};

export interface DashboardState {
  projects: ProjectInterfaceWithAllData[];
  clientSearch: string;
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
      return { ...state, clientSearch: "test" };
    }
    default: {
      return state;
    }
  }
}
