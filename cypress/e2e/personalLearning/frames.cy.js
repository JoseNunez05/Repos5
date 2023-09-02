describe('frames', () => {

    it('approach #1', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const frame = cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap);

        frame.clear().type('I would get canceled')
                      .wait(2000)
                      .type(' and sued')
                      .wait(1000)
                      .type('{ctrl+a}')
               
        cy.get('[title="Bold"]').click()  

    })

        it.only('approach #2', () => {

            cy.visit('https://the-internet.herokuapp.com/iframe')
            // cy.iframeInteract('#mce_0_ifr')

            cy.iframeInteract('#mce_0_ifr').clear().type('test')

        })

})