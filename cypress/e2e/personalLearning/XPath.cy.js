describe('XPathLocators', () => {

    it('XPath Test', () => {

        cy.visit('https://example.cypress.io')
        cy.xpath('//body[1]/div[3]/div[1]/div[1]/ul[1]').should('have.length', 1)

    })


})