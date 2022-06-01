import { useEffect, useReducer } from "react";
import { DashboardState } from "../utils/reducerStateManagement/dashboardManager";
import {
  searchControlsreducer,
  initialSearchControlsState,
  searchControlsActionsLibrary,
} from "../utils/reducerStateManagement/searchControlsManager";
import { fetchClients, fetchEmployees } from "../utils/unitFunctions/fetchData";

interface SearchControlsProps {
  dashboardState: DashboardState;
}

export function SearchControls({
  dashboardState,
}: SearchControlsProps): JSX.Element {
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
      <div>Project Count: {dashboardState.projects.length} </div>
      <select>
        <option></option>
      </select>
    </>
  );
}
