import { useEffect, useReducer } from "react";
import {
  DashboardActions,
  dashboardActionsLibrary,
  DashboardState,
} from "../utils/reducerStateManagement/dashboardManager";
import {
  searchControlsreducer,
  initialSearchControlsState,
  searchControlsActionsLibrary,
} from "../utils/reducerStateManagement/searchControlsManager";
import { fetchClients, fetchEmployees } from "../utils/unitFunctions/fetchData";

interface SearchControlsProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export function SearchControls({
  dashboardState,
  dashboardDispatch,
}: SearchControlsProps): JSX.Element {
  const [searchControlsState, searchControlsDispatch] = useReducer(
    searchControlsreducer,
    initialSearchControlsState
  );

  useEffect(
    () => {
      async function storeClientsAndEmployees() {
        const clients = await fetchClients();
        const employees = await fetchEmployees();
        searchControlsDispatch({
          type: searchControlsActionsLibrary.SET_CLIENTS,
          payload: { ...searchControlsState, clients: clients },
          //In dispatch send a payload which keeps all other states the same and only sends the new "clients" information we want to update
        });
        searchControlsDispatch({
          type: searchControlsActionsLibrary.SET_EMPLOYEES,
          payload: { ...searchControlsState, employees: employees },
        });
      }
      storeClientsAndEmployees();
      // Return iniital state to fix memory leak unmounted component "Can't performa a React state update on an umounted component"
      return () => {
        searchControlsDispatch({
          type: searchControlsActionsLibrary.DEFAULT, //enters the default case of the switch
          payload: { ...searchControlsState },
        });
      };
    },
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
    []
  );

  const clientNames = searchControlsState.clients
    .map((client) => client.name)
    .sort();
  // const employeeNames = searchControlsState.employees
  //   .map((employee) => employee.name)
  //   .sort();

  const clientNamesOptions: JSX.Element[] = clientNames.map(
    (clientName, index) => (
      <option key={index} value={clientName}>
        {clientName}
      </option>
    )
  );

  return (
    <>
      <div>Project Count: {dashboardState.projects.length} </div>
      <select
        value={dashboardState.clientSearch}
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_CLIENT_SEARCH,
            payload: { ...dashboardState, clientSearch: e.target.value },
            //Send a payload which keeps all other states the same but updates clientSearch according to the selected option value
          });
        }}
      >
        <option>Select a Client...</option>
        {clientNamesOptions}
      </select>
    </>
  );
}
