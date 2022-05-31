import { addEmployeeInfoToProjects } from "./addEmployeeInfoToProjects";
import {
  testEmployees,
  testProjectsWithClientNames,
  testProjectsWithAllData,
} from "./testDummyData";

test("All employee Info is added to each Project", () => {
  expect(
    addEmployeeInfoToProjects(testProjectsWithClientNames, testEmployees)
  ).toStrictEqual(testProjectsWithAllData);
});
