describe("The Home Page", () => {
  it("Loading Homepage", () => {
    // follows the baseUrl set in the cypress.json
    cy.visit(Cypress.config().baseUrl).log("Successfully entered site.");

    // testing if url is correct
    cy.url().should("equal", "http://localhost:3000/");
    cy.wait(500); // bad pratice error ('no-unnecessary-waiting' error)
  });

  it('Clicking the "register now" button', () => {
    cy.get('.banner_register_btn').click();
    cy.url().should("include", "/register");
  });

  it('Testing if button is disabled', ()=> {
    cy.get('.register_btn').should('be.disabled');
  });

});
