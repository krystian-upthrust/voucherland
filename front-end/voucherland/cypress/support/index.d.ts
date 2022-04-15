declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example cy.getByTestId('greeting')
     */
     getTestId(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to log in a test user
     * @example cy.login();
     */
    login(): void;

    /**
     * Custom command to log out the test user
     * @example cy.logout();
     */
    logout(): void;
  }
}
