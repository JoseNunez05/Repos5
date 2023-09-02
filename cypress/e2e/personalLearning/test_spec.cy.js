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