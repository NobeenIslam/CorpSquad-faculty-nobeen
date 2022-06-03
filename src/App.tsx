import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { ClientProfile } from "./components/ClientProfile";
import { Dashboard } from "./components/Dashboard";
import { EmployeeProfile } from "./components/EmployeeProfile";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import {
  dashboardReducer,
  initialDashboardState,
} from "./utils/reducerStateManagement/dashboardManager";

export default function App(): JSX.Element {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    initialDashboardState
  );

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              dashboardState={dashboardState}
              dashboardDispatch={dashboardDispatch}
            />
          }
        ></Route>
        <Route
          path="/clients/:clientId"
          element={<ClientProfile projects={dashboardState.projects} />}
        ></Route>
        <Route
          path="/employees/:employeeId"
          element={<EmployeeProfile projects={dashboardState.projects} />} //Still has useLocation for employees which isn't in dashboardState
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}
