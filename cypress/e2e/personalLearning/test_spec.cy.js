describe('tabs test', () => {

    it('tabs', () => {

      cy.visit('https://the-internet.herokuapp.com/windows')

      cy.wait(3000);

      cy.get('[href="/windows/new"]').invoke('removeAttr', 'target').click()

      cy.wait(2000).go('back') // back to parent tab

    })

})