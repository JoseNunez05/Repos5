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
require ('@4tw/cypress-drag-drop')
require ('cypress-file-upload')




// creating a custom command (from the frames file of personalLearning folder).
Cypress.Commands.add('frameChange', (frame) => {
    cy.get(frame).its('0.contentDocument.body').then(cy.wrap)
})



Cypress.Commands.add('linkClink', (name) => {

    cy.get('a').contains(name).click()

});