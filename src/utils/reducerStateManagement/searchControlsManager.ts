import { ClientInterface, EmployeeInterface } from "../Interfaces";

export const searchControlsActionsLibrary = {
  SET_CLIENTS: "SET_CLIENTS",
  SET_EMPLOYEES: "SET_EMPLOYEES",
};

export const initialSearchControlsState = {
  clients: [],
  employees: [],
};

export interface SearchControlsState {
  clients: ClientInterface[];
  employees: EmployeeInterface[];
}

export interface SearchControlsActions {
  type: string;
  payload: SearchControlsState;
}

export function searchControlsreducer(
  state: SearchControlsState,
  action: SearchControlsActions
): SearchControlsState {
  switch (action.type) {
    case searchControlsActionsLibrary.SET_CLIENTS: {
      return { ...state, clients: action.payload.clients };
    }
    case searchControlsActionsLibrary.SET_EMPLOYEES: {
      return { ...state, employees: action.payload.employees };
    }
    default: {
      return state;
    }
  }
}
