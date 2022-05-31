import { useLocation, useParams } from "react-router-dom";
import { ProjectInterfaceWithAllData } from "../utils/Interfaces";

export function ClientProfile(): JSX.Element {
  const { clientId } = useParams();
  const location = useLocation();
  const projects = location.state as ProjectInterfaceWithAllData;

  console.log(projects);
  return (
    <>
      <div>{clientId}</div>
      {/* <div>{JSON.stringify(object)}</div> */}
    </>
  );
}
