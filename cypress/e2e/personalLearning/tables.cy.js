describe('tables testing', () => {

    beforeEach('Login', () => {

        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')

        cy.get('.btn.btn-primary').click()

        cy.get('.btn-close').click()

        cy.get('a.parent.collapsed').contains('Customers').click()

        cy.get('ul>li>ul>li>a').contains('Customers').click()

    });


        it('check number of rows and columns', () => {

            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
            // cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length', '7');

        });

            it('check cell data from specific row & column', () => {

                cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('hfgjhgjgjggj@gmail.com');

            });

                it.only('read all the rows & columns data in the first page', () => {

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each($row, index, rows, () => {
                        cy.wrap($row).within( () => {

                            cy.get('td').each( ($col, index, columns) => {

                                cy.log($col.text)

                            })
                        })
                    })

                });

                    it('pagination', () => {

                        // ...

                    });
})  