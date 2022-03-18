/// <reference types="cypress" />


// describe('My first passing and failing tests', () => {
//     it('Test passes', () => {
//         expect(true).to.equal(true);
//     });

//     it('Test fails ', () => {
//         expect(true).to.equal(false);
//     });
// });

describe("My first actual test", () => {
  it("Test passes", () => {
    // expect(true).to.equal(true);

    // cypress visiting the url link
    cy.visit("https://example.cypress.io/").log("Successfully entered site!");

    // checking if element contain 'type'
    cy.contains('type').click();

    // will pause actions so you can go through them step by step (and/or after continue furhter)
    // cy.pause()

    // checking if the url contains a part
    cy.url().should('include', '/commands/actions');

    // type a value in input 
    cy.get('.action-email')
        .type('jane.doe@gmail.com')
        .should('have.value', 'jane.doe@gmail.com');
  });
});
