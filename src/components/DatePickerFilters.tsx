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
      <div className="row justify-content-center">
        {" "}
        <div>Started After:</div>
      </div>
      <div className="row justify-content-center mb-2 align-items-center">
        {" "}
        <input
          type="date"
          className="btn btn-info"
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
      </div>
      <div className="row justify-content-center">
        {" "}
        <div>Started Before:</div>
      </div>
      <div className="row justify-content-center mb-2 align-items-center">
        {" "}
        <input
          type="date"
          className="btn btn-info"
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
      </div>
      <div className="row justify-content-center">
        {" "}
        <div>Ended After:</div>
      </div>

      <div className="row justify-content-center mb-2 align-items-center">
        {" "}
        <input
          type="date"
          className="btn btn-info"
          value={dashboardState.afterEndDateSearch}
          onChange={(e) => {
            dashboardDispatch({
              type: dashboardActionsLibrary.SET_AFTER_END_DATE_SEARCH,
              payload: {
                ...dashboardState,
                afterEndDateSearch: e.target.value,
              },
            });
          }}
        ></input>
      </div>
      <div className="row justify-content-center">
        {" "}
        <div>Ended Before:</div>
      </div>

      <div className="row justify-content-center mb-2 align-items-center">
        {" "}
        <input
          type="date"
          className="btn btn-info"
          value={dashboardState.beforeEndDateSearch}
          onChange={(e) => {
            dashboardDispatch({
              type: dashboardActionsLibrary.SET_BEFORE_END_DATE_SEARCH,
              payload: {
                ...dashboardState,
                beforeEndDateSearch: e.target.value,
              },
            });
          }}
        ></input>
      </div>
    </>
  );
}
