import cypress from "cypress"

describe("End-End tests",()=>{
    it("Visits the page"),()=>{
        cy.visit("http://localhost:3000/")
    }
})