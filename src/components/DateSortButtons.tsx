import {
  DashboardState,
  DashboardActions,
  dashboardActionsLibrary,
} from "../utils/reducerStateManagement/dashboardManager";

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
      payload: { ...dashboardState, dateSortToggles: buttonToggles },
    });
  }

  function setClassForSortButtonsIfActive(toggle: string): string {
    return toggle === "active" ? "active" : "inactive";
  }

  return (
    <>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.dateSortToggles[0]
        )}
        onClick={() => handleSortByDate(activateMostRecentStartDate)}
      >
        Sort by StartDate (Most Recent First)
      </button>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.dateSortToggles[1]
        )}
        onClick={() => handleSortByDate(activateOldestStartDate)}
      >
        Sort by StartDate (Oldest First)
      </button>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.dateSortToggles[2]
        )}
        onClick={() => handleSortByDate(activateMostRecentEndDate)}
      >
        Sort by EndDate (Most Recent First)
      </button>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.dateSortToggles[3]
        )}
        onClick={() => handleSortByDate(activateOldestEndDate)}
      >
        Sort by EndDate (Oldest First)
      </button>
    </>
  );
}
