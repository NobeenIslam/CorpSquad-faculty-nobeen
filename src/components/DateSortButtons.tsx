import {
  DashboardState,
  DashboardActions,
  dashboardActionsLibrary,
} from "../utils/reducerStateManagement/dashboardManager";
import { setClassForSortButtonsIfActive } from "../utils/unitFunctions/setClassForSortButtonsIfActive";

interface DateSortButtonsProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export const activateMostRecentStartDate = [
  "active",
  "inactive",
  "inactive",
  "inactive",
];
export const activateOldestStartDate = [
  "inactive",
  "active",
  "inactive",
  "inactive",
];
export const activateMostRecentEndDate = [
  "inactive",
  "inactive",
  "active",
  "inactive",
];
export const activateOldestEndDate = [
  "inactive",
  "inactive",
  "inactive",
  "active",
];

export function DateSortButtons({
  dashboardState,
  dashboardDispatch,
}: DateSortButtonsProps): JSX.Element {
  //Decided to not create 4 hadlefunctions to reduce reptition. Constants above indicate which is being activated
  function handleSortByDate(buttonToggles: string[]): void {
    dashboardDispatch({
      type: dashboardActionsLibrary.TOGGLE_DATE_SORT,
      payload: {
        ...dashboardState,
        dateSortToggles: buttonToggles,
        revenueSortToggles: ["inactive,inactive"],
      },
    });
  }

  return (
    <>
      <div className="row justify-content-center mb-2">
        {" "}
        <button
          className={
            "btn btn-primary" +
            setClassForSortButtonsIfActive(dashboardState.dateSortToggles[0])
          }
          type="button"
          data-bs-toggle="button"
          onClick={() => handleSortByDate(activateMostRecentStartDate)}
        >
          Sort by StartDate (Most Recent First)
        </button>
      </div>
      <div className="row justify-content-center mb-2">
        {" "}
        <button
          className={
            "btn btn-primary" +
            setClassForSortButtonsIfActive(dashboardState.dateSortToggles[1])
          }
          type="button"
          data-bs-toggle="button"
          onClick={() => handleSortByDate(activateOldestStartDate)}
        >
          Sort by StartDate (Oldest First)
        </button>
      </div>
      <div className="row justify-content-center mb-2">
        {" "}
        <button
          className={
            "btn btn-primary" +
            setClassForSortButtonsIfActive(dashboardState.dateSortToggles[2])
          }
          type="button"
          data-bs-toggle="button"
          onClick={() => handleSortByDate(activateMostRecentEndDate)}
        >
          Sort by EndDate (Most Recent First)
        </button>
      </div>
      <div className="row justify-content-center">
        {" "}
        <button
          className={
            "btn btn-primary" +
            setClassForSortButtonsIfActive(dashboardState.dateSortToggles[3])
          }
          type="button"
          data-bs-toggle="button"
          onClick={() => handleSortByDate(activateOldestEndDate)}
        >
          Sort by EndDate (Oldest First)
        </button>
      </div>
    </>
  );
}
