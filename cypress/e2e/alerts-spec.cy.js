const cypress = require("cypress")

describe('template spec', () => {
  // it.skip('Alert', () => {
  //   Cypress.on('uncaught:exception', (err, runnable) => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false
  //   })
  //   cy.visit('https://demoqa.com/alerts')
  //   cy.click('#AlertButton')
  // }) 
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('https://demoqa.com/alerts', {timeout:120000})
    // const btn = "button#alertButton.btn.btn-primary"
    // cy.get(btn).click()

    cypress.Commands.add('ClickButton', (p1, p2) => {
      cy.get('button#alertButton.btn.btn-primary').click()
    });

    cy.ClickButton()

  })
})