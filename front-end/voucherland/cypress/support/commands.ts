/// <reference path="../support/index.d.ts" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.visit("/login");

  cy.url().should("eq", "http://localhost:3000/login");

  cy.dataCy("login-email-input").type("jane@gmail.com");
  cy.dataCy("login-password-input").type("jane123");
  cy.dataCy("login-login-btn").click();
});

Cypress.Commands.add("logout", () => {
  cy.dataCy("nav-logout-btn").last().click();
});

Cypress.Commands.add("dataCy", (value) => cy.get(`[data-cy=${value}]`));
Cypress.Commands.add("getTestId", (value) => cy.get(`[data-testid=${value}]`));
