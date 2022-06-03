import {
  DashboardActions,
  dashboardActionsLibrary,
  DashboardState,
} from "../utils/reducerStateManagement/dashboardManager";
import { ClientEmployeeDropdown } from "./ClientEmployeeDropdown";
import { DatePickerFilters } from "./DatePickerFilters";
import { DateSortButtons } from "./DateSortButtons";
import { RevenueFilters } from "./RevenueFilters";

interface FilterControlsProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export function FilterControls({
  dashboardState,
  dashboardDispatch,
}: FilterControlsProps): JSX.Element {
  return (
    <>
      <div className="row justify-content-center purple ">
        {" "}
        <button
          className=" btn btn-danger "
          onClick={() =>
            dashboardDispatch({
              type: dashboardActionsLibrary.RESET_FITLERS,
              payload: dashboardState,
            })
          }
        >
          Reset Filters
        </button>
      </div>

      <section className="row align-items-center red">
        <div className="col-md-3 col-sm-6 justify-content-center blue">
          <ClientEmployeeDropdown
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-md-3 col-sm-6 justify-content-center yellow">
          <DateSortButtons
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-md-3 col-sm-6 justify-content-center green">
          <DatePickerFilters
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-md-3 col-sm-6 justify-content-center  orange">
          <RevenueFilters
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
      </section>
    </>
  );
}
