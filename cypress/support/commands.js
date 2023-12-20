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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("changePassword", (oldPassword, newPassword) => {
  cy.get('[data-cy="accountMenu"] > .d-flex > span').click();
  cy.get('[data-cy="passwordItem"] > span').click();
  cy.get('[data-cy="currentPassword"]').type(oldPassword);
  cy.get('[data-cy="newPassword"]').type(newPassword);
  cy.get('[data-cy="confirmPassword"]').type(newPassword);
  cy.get('[data-cy="submit"]').click();
});

Cypress.Commands.add("changePasswordBack", (newPassword, oldPassword) => {
  cy.get('[data-cy="accountMenu"] > .d-flex > span').click();
  cy.get('[data-cy="passwordItem"] > span').click();
  cy.get('[data-cy="currentPassword"]').type(newPassword);
  cy.get('[data-cy="newPassword"]').type(oldPassword);
  cy.get('[data-cy="confirmPassword"]').type(oldPassword);
  cy.get('[data-cy="submit"]').click();
});
