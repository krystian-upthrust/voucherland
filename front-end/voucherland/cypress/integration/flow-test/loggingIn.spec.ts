describe("[FlowTest] User Logging in flow ", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("Renders on correct URL", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });
});
