describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')

      Cypress.Commands.add('clickActionsLink', (test1, test2) => {
        cy.get('ul.home-list>li>a')
          .contains('Actions')
          .click()
      });

      // Cypress.Commands.add('typeMyName', (p1, p2) => {
      //   cy.get('input#email1.form-control.action-email')
      //     .type('Jose Nunez')
      // });

      cy.clickActionsLink()
      cy.typeMyName()

      // cy.get('input#email1').type('n')


    })
  })