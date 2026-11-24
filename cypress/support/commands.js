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

import LoginPage from '../pages/LoginPage';

const loginAndVerify = (username, password) => {
  LoginPage.visit();
  LoginPage.login(username, password);
  LoginPage.assertLoginSuccess();
};


Cypress.Commands.add('login', (username, password) => {
  if (username && password) {
    loginAndVerify(username, password);
    return;
  }

  cy.env(['adminUsername', 'adminPassword']).then(
    ({ adminUsername, adminPassword }) => {
      loginAndVerify(adminUsername, adminPassword);
    }
  );
});