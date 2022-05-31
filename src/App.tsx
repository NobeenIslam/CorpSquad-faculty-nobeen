import { Routes, Route } from "react-router-dom";
import { ClientProfile } from "./components/ClientProfile";
import { Dashboard } from "./components/Dashboard";
import { EmployeeProfile } from "./components/EmployeeProfile";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/clients/:clientId" element={<ClientProfile />}></Route>
        <Route path="/employees" element={<EmployeeProfile />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
