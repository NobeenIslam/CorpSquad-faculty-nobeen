import { addEmployeeInfoToProjects } from "./addEmployeeInfoToProjects";
import { testEmployees, testResult1, testResult2 } from "./testDummyData";

test("All employee Info is added to each Project", () => {
  expect(addEmployeeInfoToProjects(testResult1, testEmployees)).toStrictEqual(
    testResult2
  );
});
