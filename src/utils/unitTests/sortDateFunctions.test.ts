import {
  mostRecentEndDateFirst,
  mostRecentStartDateFirst,
  oldestEndDateFirst,
  oldestStartDateFirst,
} from "../unitFunctions/sortDateFunctions";
import {
  testProject1WithAllData,
  testProject2WithAllData,
  testProjectsWithAllData,
} from "./testDummyData";

test("Sort projects by most recent start date first", () => {
  expect(
    testProjectsWithAllData.sort((a, b) => mostRecentStartDateFirst(a, b))
  ).toStrictEqual([testProject2WithAllData, testProject1WithAllData]);
});

test("Sort projects by oldest start date first", () => {
  expect(
    testProjectsWithAllData.sort((a, b) => oldestStartDateFirst(a, b))
  ).toStrictEqual([testProject1WithAllData, testProject2WithAllData]);
});

test("Sort projects by most recent end date first", () => {
  expect(
    testProjectsWithAllData.sort((a, b) => mostRecentEndDateFirst(a, b))
  ).toStrictEqual([testProject1WithAllData, testProject2WithAllData]);
});

test("Sort projects by oldest end date first", () => {
  expect(
    testProjectsWithAllData.sort((a, b) => oldestEndDateFirst(a, b))
  ).toStrictEqual([testProject2WithAllData, testProject1WithAllData]);
});
