import {
  DashboardState,
  DashboardActions,
  dashboardActionsLibrary,
} from "../utils/reducerStateManagement/dashboardManager";
import { setClassForSortButtonsIfActive } from "../utils/unitFunctions/setClassForSortButtonsIfActive";
import {
  activateSortRevenueAscending,
  activateSortRevenueDescending,
} from "./FilterControls";

interface RevnueFiltersProps {
  dashboardState: DashboardState;
  dashboardDispatch: React.Dispatch<DashboardActions>;
}

export function RevenueFilters({
  dashboardState,
  dashboardDispatch,
}: RevnueFiltersProps): JSX.Element {
  function handleSortByRevenue(activateSort: string[]) {
    dashboardDispatch({
      type: dashboardActionsLibrary.SET_REVENUE_SORT,
      payload: {
        ...dashboardState,
        dateSortToggles: ["inactive", "inactive", "inactive", "inactive"],
        revenueSortToggles: activateSort,
      },
    });
  }

  function handleSearchGreatRevenue(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    if (e.target.value.match(/[a-zA-Z]|[^A-Za-z0-9_]/)) {
      dashboardDispatch({
        type: dashboardActionsLibrary.SET_GREATER_REVENUE_SEARCH,
        payload: {
          ...dashboardState,
          greaterRevenueSearch: "",
        },
      });
      window.alert("Only numbers please!!");
      return;
    }
    dashboardDispatch({
      type: dashboardActionsLibrary.SET_GREATER_REVENUE_SEARCH,
      payload: {
        ...dashboardState,
        greaterRevenueSearch: e.target.value,
      },
    });
  }

  function handleSearchLesserRevenue(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    if (e.target.value.match(/[a-zA-Z]|[^A-Za-z0-9_]/)) {
      dashboardDispatch({
        type: dashboardActionsLibrary.SET_LESSER_REVENUE_SEARCH,
        payload: {
          ...dashboardState,
          lesserRevenueSearch: "",
        },
      });
      window.alert("Only numbers please!!");
      return;
    }
    dashboardDispatch({
      type: dashboardActionsLibrary.SET_LESSER_REVENUE_SEARCH,
      payload: {
        ...dashboardState,
        lesserRevenueSearch: e.target.value,
      },
    });
  }

  return (
    <>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.revenueSortToggles[0]
        )}
        onClick={() => handleSortByRevenue(activateSortRevenueAscending)}
      >
        Sort by Revenue (Ascending)
      </button>
      <button
        className={setClassForSortButtonsIfActive(
          dashboardState.revenueSortToggles[1]
        )}
        onClick={() => handleSortByRevenue(activateSortRevenueDescending)}
      >
        Sort by Revenue (Descending)
      </button>
      <input
        placeholder="Find revenues > Search"
        value={dashboardState.greaterRevenueSearch}
        onChange={(e) => handleSearchGreatRevenue(e)}
      ></input>
      <input
        placeholder="Find revenues < Search"
        value={dashboardState.lesserRevenueSearch}
        onChange={(e) => handleSearchLesserRevenue(e)}
      ></input>
    </>
  );
}
