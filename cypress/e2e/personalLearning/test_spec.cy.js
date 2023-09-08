describe('tabs test', () => {

    it.skip('tabs', () => {

      cy.visit('https://the-internet.herokuapp.com/windows')

      cy.wait(3000);

      cy.get('[href="/windows/new"]').invoke('removeAttr', 'target').click()

      cy.wait(2000).go('back') // back to parent tab

    })

})

describe('custom commands test', () => {

  it.skip('login test', () => {

    cy.login('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 'Admin')

  })

})

describe('iframe test', () => {

  it('test for frame', () => {

    cy.visit('https://seleniumbase.io/w3schools/iframes')
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').should('exist')

    cy.log('test passed... i think')

  })

})