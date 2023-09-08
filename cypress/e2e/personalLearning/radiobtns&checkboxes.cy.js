describe('check ui elements', () => {

    // it('radio buttons', () => {

    //     cy.visit('https://qa-automation-practice.netlify.app/radiobuttons.html')
        
    //     cy.get('#radio-button1').should('exist').and('be.visible')
    //     // cy.get('#radio-button1').click()
    //     cy.get('#radio-button1').check()
    //     cy.get('#radio-button2').should('not.be.checked')

    //     // another way of selecting the element instead of "click" is with "check" in regards to radio btns
    //     cy.get('.form-check-input#radio-button2').should('exist').and('be.visible')
    //     cy.get('.form-check-input#radio-button2').check().should('be.checked')

    //     cy.get('.form-check-input#radio-button1').should('not.be.checked')

    // })


        it('check boxes', () => {

            cy.visit('https://qa-automation-practice.netlify.app/checkboxes')

            cy.get('#checkbox1').should('exist').and('be.visible')
            cy.get('#checkbox2').should('exist').and('be.visible')
            cy.get('#checkbox3').should('exist').and('be.visible')

            cy.get('#checkbox1').check().should('be.checked')
            cy.get('#checkbox1').uncheck().should('not.be.checked')

            cy.get('#checkbox2').check().should('be.checked')
            cy.get('#checkbox2').uncheck().should('not.be.checked')

            cy.get('#checkbox3').check().should('be.checked')
            // cy.get('#checkbox3').uncheck().should('not.be.checked')
            
            cy.get('.form-group>.btn').click() // resetting the feild

            // checking all of the boxes!!!
            cy.get('input.form-check-input').check()

            cy.get('.form-group>.btn').click() // resetting the feild

            // selecting the first checkbox
            cy.get('input.form-check-input').first().check()
            cy.get('input.form-check-input').first().uncheck()

            // selecting the last checkbox
            cy.get('input.form-check-input').last().check()

        })
        

})