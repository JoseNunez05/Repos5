describe('alerts demo', () => {

    // 1) javaScript alerts: it will have some text and an 'OK' button
    it('javaScript alerts', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.get('button[onclick="jsAlert()"]').click()
        // alert windows are automatically closed by cypress

        cy.on('window:alert', (n) => {
            expect(n).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

        // 2) javaScript confirmation alerts: it will have some text and an 'OK' and 'CANCEL' button.
        it('confirmation alerts -ok', () => {

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.get("button[onclick='jsConfirm()']").click();
            cy.on('window:confirm', (a) => {
                expect(a).to.contain('I am a JS Confirm');
            })

            cy.get('#result').should('have.text', 'You clicked: Ok')
            // cypress closes all alert windows with the 'OK' button by default
        })

        it('confirmation alerts -cancel', () => {

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.get('button[onclick="jsConfirm()"]').click();
            cy.on('window:confirm', () => false)
            // inserting 'false' into the function, we bypass the default input of 'OK' cypress likes to do and cancel instead.

        })


            it('prompt alerts', () => {

                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false
                })

                cy.window().then((w) => {
                    cy.stub(w, 'prompt').returns('type shit');
                })
                cy.get('button[onclick="jsPrompt()"]').click();

                //cypress will still click ok by default
            })

            it('prompt alerts -cancel', () => {

                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

                // cy.window().then((w2) => {
                //     cy.stub(w2, 'prompt').returns('type shit')
                // })

                cy.get('button[onclick="jsPrompt()"]').click();
                cy.on('window:prompt', () => false);

            })

                // authenticated alerts
                it.only('authenticated alerts', () => {

                    cy.wait(20000)
                    cy.visit('https://the-internet.herokuapp.com/basic_auth')
                    
                })
})