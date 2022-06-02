import {
  DashboardState,
  DashboardActions,
  dashboardActionsLibrary,
} from "../utils/reducerStateManagement/dashboardManager";

interface DatePickerFiltersProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}
export function DatePickerFilters({
  dashboardState,
  dashboardDispatch,
}: DatePickerFiltersProps): JSX.Element {
  return (
    <>
      <div>Started After:</div>
      <input
        type="date"
        value={dashboardState.afterStartDateSearch}
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
      <div>Started Before:</div>
      <input
        type="date"
        value={dashboardState.beforeStartDateSearch}
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
      <div>Ended After:</div>
      <input
        type="date"
        value={dashboardState.afterEndDateSearch}
        onChange={(e) => {
          dashboardDispatch({
            type: dashboardActionsLibrary.SET_AFTER_END_DATE_SEARCH,
            payload: { ...dashboardState, afterEndDateSearch: e.target.value },
          });
        }}
      ></input>
      <div>Ended Before:</div>
      <input
        type="date"
        value={dashboardState.beforeEndDateSearch}
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
