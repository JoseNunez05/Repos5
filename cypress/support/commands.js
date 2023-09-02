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

// <reference types='Cypress' />
/// <reference types='cypress-xpath' />

Cypress.Commands.add('typeMyName', (p1, p2) => {
    cy.get('input#email1.form-control.action-email')
      .type('Jose Nunez')
  });




// creating a custom command (from the frames file of personalLearning folder).

Cypress.Commands.add('iframeInteract', (j) => {

    j = cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap);

})