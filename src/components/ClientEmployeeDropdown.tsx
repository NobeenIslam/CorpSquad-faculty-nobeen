import {
  DashboardActions,
  dashboardActionsLibrary,
  DashboardState,
} from "../utils/reducerStateManagement/dashboardManager";

interface ClientEmployeeDropdownProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export const activateSortRevenueAscending = ["active", "inactive"];
export const activateSortRevenueDescending = ["inactive", "active"];

export function ClientEmployeeDropdown({
  dashboardState,
  dashboardDispatch,
}: ClientEmployeeDropdownProps): JSX.Element {
  /*There are some employees which have not worked on a project, so better to fetch from employees directly, rather than getting list of names from full projects data*/
  const clientNames = dashboardState.clients
    .map((client) => client.name)
    .sort();

  const employeeNames = dashboardState.employees
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
      <div className="row justify-content-center">
        <select
          value={dashboardState.clientSearch}
          className="btn btn-secondary mb-2"
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
      </div>
      <div className="row justify-content-center">
        {" "}
        <select
          value={dashboardState.employeeSearch}
          className="btn btn-secondary"
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
      </div>
    </>
  );
}
