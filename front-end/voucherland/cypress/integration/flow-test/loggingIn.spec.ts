// It tells vs code that this test is using cypress and it help with autocompletion 
/// <reference types="cypress" />


describe("[FlowTest] User Logging in flow ", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("Renders on correct URL", () => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.get(".header");
  });
});
