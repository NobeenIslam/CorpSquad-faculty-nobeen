import { addClientNameToProjects } from "./addClientNameToProjects";
import {
  testClients,
  testProjects,
  testProjectsWithClientNames,
} from "./testDummyData";

test("Function adds ClientNameToProjects", () => {
  expect(addClientNameToProjects(testProjects, testClients)).toStrictEqual(
    testProjectsWithClientNames
  );
});
