describe('mouse operations', () => {

    it.skip('Mouse Hover', () => {

        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')

    });


        it.skip('Right Click', () => {
        
            cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

            // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')

            // cy.get('.context-menu-icon-delete').should('be.visible')
            // cy.wait(2000)
            // cy.get('.context-menu-icon-delete').click()


            // second approach
            cy.get('.context-menu-one.btn.btn-neutral').rightclick()


        });


            it.skip('Double Click', () => {
                
                cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
                cy.frameLoaded('#iframeResult')
                cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
                cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');

            });


                it('Drag and drop using plugin', () => {
                    
                    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
                    cy.get('#box6').drag('#box106', {force:true})

                });


                    it.only('Scrolling page', () => {

                        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
                        cy.get(':nth-child(2) > tbody > :nth-child(96) > :nth-child(1) > img').scrollIntoView({duration:2000})

                    });

});