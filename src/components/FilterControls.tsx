import { useEffect, useReducer } from "react";
import {
  DashboardActions,
  dashboardActionsLibrary,
  DashboardState,
} from "../utils/reducerStateManagement/dashboardManager";
import {
  filterControlsreducer,
  initialFilterControlsState,
  filterControlsActionsLibrary,
} from "../utils/reducerStateManagement/filterControlsManager";
import { fetchClients, fetchEmployees } from "../utils/unitFunctions/fetchData";
import { DateSortButtons } from "./DateSortButtons";

interface FilterControlsProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export function FilterControls({
  dashboardState,
  dashboardDispatch,
}: FilterControlsProps): JSX.Element {
  const [filterControlsState, filterControlsDispatch] = useReducer(
    filterControlsreducer,
    initialFilterControlsState
  );

  //Decided to fetch the clients and employees data from the end point as it was easier to extract the client and employee names from that raw data to use in the drop downs.
  useEffect(
    () => {
      async function storeClientsAndEmployees() {
        const clients = await fetchClients();
        const employees = await fetchEmployees();
        filterControlsDispatch({
          type: filterControlsActionsLibrary.SET_CLIENTS,
          payload: { ...filterControlsState, clients: clients },
          //In dispatch send a payload which keeps all other states the same and only sends the new "clients" information we want to update
        });
        filterControlsDispatch({
          type: filterControlsActionsLibrary.SET_EMPLOYEES,
          payload: { ...filterControlsState, employees: employees },
        });
      }
      storeClientsAndEmployees();
      // Return iniital state to fix memory leak unmounted component "Can't performa a React state update on an umounted component"
      return () => {
        filterControlsDispatch({
          type: filterControlsActionsLibrary.DEFAULT, //enters the default case of the switch
          payload: { ...filterControlsState },
        });
      };
    },
    //Disabling as it is saying to put clients,projects and employees in which would cause an infinite loop
    //eslint-disable-next-line
    []
  );

  const clientNames = filterControlsState.clients
    .map((client) => client.name)
    .sort();

  const employeeNames = filterControlsState.employees
    .map((employee) => employee.name)
    .sort();

  const clientNamesOptions: JSX.Element[] = clientNames.map(
    (clientName, index) => (
      <option key={index} value={clientName}>
        {clientName}
      </option>
    )
  );

  const employeeNamesOptions: JSX.Element[] = employeeNames.map(
    (employeeName, index) => (
      <option key={index} value={employeeName}>
        {employeeName}
      </option>
    )
  );

  return (
    <>
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
      <select
        value={dashboardState.employeeSearch}
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_EMPLOYEE_SEARCH,
            payload: { ...dashboardState, employeeSearch: e.target.value },
            //Send a payload which keeps all other states the same but updates clientSearch according to the selected option value
          });
        }}
      >
        <option>Select an Employee...</option>
        {employeeNamesOptions}
      </select>
      <DateSortButtons
        dashboardState={dashboardState}
        dashboardDispatch={dashboardDispatch}
      />
      <div>After Start-Date</div>
      <input
        type="date"
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_AFTER_START_DATE_SEARCH,
            payload: {
              ...dashboardState,
              afterStartDateSearch: e.target.value,
            },
          });
        }}
      ></input>
      <div>Before Start-Date</div>
      <input
        type="date"
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_BEFORE_START_DATE_SEARCH,
            payload: {
              ...dashboardState,
              beforeStartDateSearch: e.target.value,
            },
          });
        }}
      ></input>
      <div>After End-Date</div>
      <input
        type="date"
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_AFTER_END_DATE_SEARCH,
            payload: { ...dashboardState, afterEndDateSearch: e.target.value },
          });
        }}
      ></input>
      <div>Before End-Date</div>
      <input
        type="date"
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_BEFORE_END_DATE_SEARCH,
            payload: { ...dashboardState, beforeEndDateSearch: e.target.value },
          });
        }}
      ></input>
    </>
  );
}
