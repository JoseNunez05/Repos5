describe.skip('tablezzz', () => {
    beforeEach('login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')

        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        cy.get("#menu-customer").click()
        cy.get('#menu-customer>ul>li').each((el, index, list) => {
            if(el.text().includes('Customers'))
            {
                cy.log(el.text())
                .wait(2000)

                cy.get(el).click();
            }
        })
    })

    it('check number of rows and columns', () => {

        cy.get('.table.table-bordered.table-hover>thead')

        let amount=0;
        cy.get('.table.table-bordered.table-hover>thead>tr>td').each(el => {
            amount++
            cy.log(el.text(), amount)
        })
        cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length', '7');
    })

    it('check number of pages', function(){

        cy.get('.col-sm-6.text-end').then(el => {
            const text = el.text()
            const pages = text.substring(text.indexOf("(")+1 , text.indexOf("Pages")-1)

            cy.log("total pages ---> " + pages);
        })
    })

    it.only('pagination', () => {

        let totalPages = 9;

        for(let i=1; i<totalPages; i++)
        {   
            if(totalPages>1)
            {
                cy.get("ul[class='pagination']>li:nth-child("+i+")").click()

                let customerName = cy.get('.table.table-bordered.table-hover>tbody>tr>td:nth-child(2)')

                customerName.each(name => {
                    cy.log(name.text())
                })
                .wait(1500)
            }
        }

    })

})


describe('mouse actions', () => {
    it('mouse hover', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[placeholder='Username']").trigger('mouseover').log('Admin')
        cy.get("input[placeholder='Password']").trigger('mouseover').log('admin123')
    })

    it('clicks', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('.oxd-button').click('right');

        
    })
})







describe('child tabs', () => {
    it('test site', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target');
        cy.get('#opentab').click()
    })
})


describe('drag and drop', () => {
    it('mouse action', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box6').drag('#box106', {force: true})
    })
})



describe.only('file upload', () => {
    it('simple click of a button!', () => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');

        cy.get("input[name='userfile']").attachFile('C:\Users\josen\cypress\cypress\e2e\personalLearning\things.txt')
    })
})