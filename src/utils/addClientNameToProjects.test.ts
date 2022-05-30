import { addClientNameToProjects } from "./addClientNameToProjects";
import { testClients, testProjects, testResult1 } from "./testDummyData";



test("Function adds ClientNameToProjects",()=>{
    expect(addClientNameToProjects(testProjects,testClients)).toStrictEqual(testResult1)
})