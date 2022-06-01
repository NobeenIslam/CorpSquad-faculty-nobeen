import { getProjectsEmployeeNames } from "../unitFunctions/getProjectsEmployeeNames";
import { testProjectsWithAllData } from "./testDummyData";

test("Get an array of employee names from the project", () => {
  expect(getProjectsEmployeeNames(testProjectsWithAllData[0])).toStrictEqual([
    "Miss Jane Rowe",
    "Johnnie Bradtke",
  ]);
});
