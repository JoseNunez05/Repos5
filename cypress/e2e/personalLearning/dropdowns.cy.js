describe('dropdowns', () => {

    it('dropdown with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // .select() is for dropdowns
        cy.get('#zcf_address_country').select('Italy')

    })


        it('dropdown without select', () => {

            cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

            cy.get('#select2-billing_country-container').click()

            // accessing the search box directly and enters the value and keeps it there
            cy.get('input.select2-search__field').click().type('Italy').type('{enter}')

            cy.get('#select2-billing_country-container').should('have.text', 'Italy')

        })


            it('auto suggested dropdown', () => {

                cy.visit('https://www.wikipedia.org')

                // // getting the auto suggest drop down
                // cy.get('#searchInput').click().type('Miami')

                // // selecting Miami Marlins
                // cy.get('.suggestion-title').contains('Miami Marlins').click()

                cy.get('#searchInput').click().type('Havana')
                cy.get('.suggestion-title').contains('Havana').click()

            })


                it('dynamic dropdown', () => {

                    cy.visit('https://www.google.com')
                    
                    cy.get('#APjFqb').click().type('cypress automation')


                    cy.get('div.wM6W7d>span').each( ($el, index, $list) => {

                        // if the text value of the element is equal to "cypress automation tool" then perform the following actions
                        if($el.text() == "cypress automation tool"){
                            cy.wrap($el).click()
                        }

                    })

                })
})