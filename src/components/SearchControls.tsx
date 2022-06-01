import { useEffect, useReducer } from "react";
import { ClientInterface, EmployeeInterface, State } from "../utils/Interfaces";
import { fetchClients, fetchEmployees } from "../utils/fetchData";
interface SearchControlsProps {
  state: State;
}

interface SearchControlsState {
  clients: ClientInterface[];
  employees: EmployeeInterface[];
}

interface SearchControlsActions {
  type: string;
  payload: SearchControlsState;
}

const searchControlsActionsLibrary = {
  SET_CLIENTS: "SET_CLIENTS",
  SET_EMPLOYEES: "SET_EMPLOYEES",
};

function searchControlsreducer(
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

export function SearchControls({ state }: SearchControlsProps): JSX.Element {
  const initialSearchControlsState = {
    clients: [],
    employees: [],
  };
  const [searchControlsState, dispatch] = useReducer(
    searchControlsreducer,
    initialSearchControlsState
  );

  useEffect(
    () => {
      async function storeClientsAndEmployees() {
        const clients = await fetchClients();
        const employees = await fetchEmployees();
        dispatch({
          type: searchControlsActionsLibrary.SET_CLIENTS,
          payload: { ...searchControlsState, clients: clients },
        });
        dispatch({
          type: searchControlsActionsLibrary.SET_EMPLOYEES,
          payload: { ...searchControlsState, employees: employees },
        });
      }
      storeClientsAndEmployees();
    },
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
    []
  );

  console.log(searchControlsState.clients);
  console.log(searchControlsState.employees);

  return (
    <>
      <div>Project Count: {state.projects.length} </div>
      <select>
        <option></option>
      </select>
    </>
  );
}
