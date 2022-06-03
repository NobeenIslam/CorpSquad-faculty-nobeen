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
      <div className="row justify-content-center mb-2">
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

      <section className="row align-items-center">
        <div className="col-xl-3 col-lg-6 justify-content-center mb-2">
          <ClientEmployeeDropdown
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-xl-3 col-lg-6  justify-content-center mb-2">
          <DateSortButtons
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-xl-3 col-lg-6  justify-content-center mb-2">
          <DatePickerFilters
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
        <div className="col-xl-3 col-lg-6  justify-content-center">
          <RevenueFilters
            dashboardState={dashboardState}
            dashboardDispatch={dashboardDispatch}
          />
        </div>
      </section>
    </>
  );
}
