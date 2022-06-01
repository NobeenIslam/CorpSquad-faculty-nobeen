import { ClientInterface, EmployeeInterface } from "../Interfaces";

export const filterControlsActionsLibrary = {
  DEFAULT: "DEFAULT",
  SET_CLIENTS: "SET_CLIENTS",
  SET_EMPLOYEES: "SET_EMPLOYEES",
};

export const initialFilterControlsState = {
  clients: [],
  employees: [],
};

export interface FilterControlsState {
  clients: ClientInterface[];
  employees: EmployeeInterface[];
}

export interface FilterControlsActions {
  type: string;
  payload: FilterControlsState;
}

export function filterControlsreducer(
  state: FilterControlsState,
  action: FilterControlsActions
): FilterControlsState {
  switch (action.type) {
    case filterControlsActionsLibrary.SET_CLIENTS: {
      return { ...state, clients: action.payload.clients };
    }
    case filterControlsActionsLibrary.SET_EMPLOYEES: {
      return { ...state, employees: action.payload.employees };
    }
    default: {
      return state;
    }
  }
}
