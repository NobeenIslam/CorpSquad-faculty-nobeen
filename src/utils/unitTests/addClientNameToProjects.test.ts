import {
  testClients,
  testProjects,
  testProjectsWithClientNames,
} from "./testDummyData";
import { addClientNameToProjects } from "../unitFunctions/addClientNameToProjects";

test("Function adds ClientNameToProjects", () => {
  expect(addClientNameToProjects(testProjects, testClients)).toStrictEqual(
    testProjectsWithClientNames
  );
});
