describe('tabs demo', () => {

    it.only('approach #1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') // parent window

        cy.wait(1000);

        // cy.get('.example a').click(); // you can click the link but can no longer perform any action on the new tab :/
        cy.get('.example > a').invoke('removeAttr', 'target').click(); // removes the target attribute and clicks link

        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new') // child window

        // cy.go('back') // back to parent tab
        cy.wait(3000).go('back')

    })

        it('approach #2', () => {

            cy.visit('https://the-internet.herokuapp.com/windows')

            cy.wait(2000)

            cy.get('.example>a').then((n) => {
                let url = n.prop('href');
                cy.visit(url)
            })

            cy.wait(3000).go('back')

        })

})