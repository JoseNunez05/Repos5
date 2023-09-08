describe('frames', () => {

    it('approach #1 -manual', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const frame = cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap);

        frame.clear().type('I would get canceled')
                      .wait(2000)
                      .type(' and sued')
                      .wait(1000)
                      .type('{ctrl+a}')
               
        cy.get('[title="Bold"]').click()  

    })

        it.only('approach #2 -custom command', () => {

            cy.visit('https://the-internet.herokuapp.com/iframe')
            // cy.iframeInteract('#mce_0_ifr')

            // cy.iframeInteract('#mce_0_ifr').clear().type('test')

            cy.frameChange('#mce_0_ifr').clear().type('frameChange test')

        })

            it.skip('approach #3 -cypress plugin', () => {

                cy.visit('https://the-internet.herokuapp.com/iframe')

                cy.frameLoaded('#mce_0_ifr')
                cy.iframe('#mce_0_ifr').clear().type('test')
                // cy.frameLoaded('...') // you do not need to load the frame first
                

            })
})