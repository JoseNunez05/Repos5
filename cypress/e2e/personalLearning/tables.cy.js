describe('tables demo', () => {

    beforeEach('login', () => {

        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        
        cy.get('[type="submit"]').click()

        cy.get('.btn-close').click()

        // Customers -> customers
        cy.get('#menu-customer>a').click() // Customers
        cy.get('#menu-customer>ul>li:first-child').click() // Customers sub-item

    })

    it('check no. of rows and columns', () => {

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7');

    })

    it('check cell data from specific row & column', () => {

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
          .contains('ghh56@gmail.com') // same as the .should assertion

    })

    it.only('read all the rows & columns data in the first page', () => {

        let tabledata = 'table[class="table table-bordered table-hover"]>tbody>tr'

        // $row is tr, which means table row
        // repOfRow is td, which means... i don't know, but it means the things inside the rows
        // $rows means all of the rows
        cy.get(tabledata).each( ($row, index, $rows) => {

            // we are specifying the placeholder for $row, which is the 'td' tag of the table.
            cy.wrap($row).within( () => { 

                // i now have the individual contents in the row (not rows). the things in the row
                cy.get('td').each( ($column, index, $things) => {

                    cy.log($column.text());

                })

            })
          }) 

    })

    it('pagination', () => {


    })

})