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
          //In dispatch send a payload which keeps all other states the same and only sends the new "clients" information we want to update
        });
        dispatch({
          type: searchControlsActionsLibrary.SET_EMPLOYEES,
          payload: { ...searchControlsState, employees: employees },
        });
      }
      storeClientsAndEmployees();
      // Return iniital state to fix memory leak unmounted component "Can't performa a React state update on an umounted component"
      return () => {
        dispatch({ type: "DEFAULT", payload: { ...searchControlsState } });
      };
    },
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
    []
  );

  const clientNames = searchControlsState.clients
    .map((client) => client.name)
    .sort();
  const employeeNames = searchControlsState.employees
    .map((employee) => employee.name)
    .sort();

  const clientNamesOptions: JSX.Element[] = clientNames.map(
    (clientName, index) => (
      <option key={index} value={clientName}>
        {clientName}
      </option>
    )
  );
  console.log(clientNames);
  console.log(employeeNames);

  return (
    <>
      <div>Project Count: {dashboardState.projects.length} </div>
      <select>{clientNamesOptions}</select>
    </>
  );
}
