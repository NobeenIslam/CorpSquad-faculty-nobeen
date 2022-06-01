import { sumAllRevenues } from "../unitFunctions/sumAllRevenues";
import { testProjectsWithAllData } from "./testDummyData";

test("Sums all revenues from contract in projects", () => {
  expect(sumAllRevenues(testProjectsWithAllData)).toBe(121);
});
