import { getClientsEmployees } from "../unitFunctions/getClientsEmployees";
import { testEmployees, testProjectsWithAllData } from "./testDummyData";

test("Gets employees that have worked for a client", () => {
  expect(getClientsEmployees(testProjectsWithAllData)).toStrictEqual(
    testEmployees
  );
});
