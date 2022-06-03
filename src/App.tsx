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
          element={<ClientProfile dashboardState={dashboardState} />}
        ></Route>
        <Route
          path="/employees/:employeeId"
          element={<EmployeeProfile dashboardState={dashboardState} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}
