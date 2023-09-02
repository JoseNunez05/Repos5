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

import 'cypress-iframe'



// creating a custom command (from the frames file of personalLearning folder).
Cypress.Commands.add('iframeInteract', (frame) => {

    return cy.get(frame).its('0.contentDocument.body').then(cy.wrap);

})



// Cypress.Commands.add('login', (url, username, password) => {
    
//     return cy.visit(url).get('[placeholder="Username"]').type(username)

// })