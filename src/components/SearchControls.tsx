import { ProjectInterfaceWithAllData, State } from "../utils/Interfaces";

interface SearchControlsProps {
  state: State;
}

export function SearchControls({ state }: SearchControlsProps): JSX.Element {
  return (
    <>
      <div>Project Count: {state.projects.length} </div>
      <select></select>
    </>
  );
}
