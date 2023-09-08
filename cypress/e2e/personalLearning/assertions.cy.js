describe('Assertions demo', () => {

    it('implicit assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // should
        // lets check that 'orangehrmlive.com' is part of our url. use the cy.url keywords to do so

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .should('include', 'orangehrmlive.com')

        cy.url().should('contain', 'orangehrm')
        

        // and
        cy.url().should('contain', 'orange')
          .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          .and('contain', 'o')

          .and('not.contain', 'yahoo')
          .and('not.eq', 'yag')
          .and('not.include', 'naidni ssa hctib')


        cy.title().should('eq', 'OrangeHRM')
          .and('not.contain', 'aggin')

        cy.get('.orangehrm-login-branding > img').should('exist').and('be.visible')
        // cy.get('.orangehrm-login-branding > img').should('be.visible')

        cy.xpath('//a').should('have.length', '5')

        cy.get('input[placeholder="Username"]').type('Admin') // after this is typed
        cy.get('input[placeholder="Username"]').should('have.value', 'Admin') // get the username input feild again and assert that the feild has the value Admin


            it.only('Explicit Assertions', () => {

                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

                cy.get('input[placeholder="Username"]').type('Admin')
                cy.get('input[placeholder="Username"]').should('have.value', 'Admin')

                cy.get('input[placeholder="Password"]').type('admin123')
                cy.get('input[placeholder="Password"]').should('have.value', 'admin123')

                cy.get('button[type="submit"]').click()

                // since explicit assertions cannot be directly used via cypress, we have to create a javaScript function

                let name="Vinay Reddy";
                let fakename="Rinay Veddy"

                cy.get('.oxd-userdropdown-name').then( function(d) {

                    // let forRealName = 
                    // d.text() // the text value of the element

                    expect(d.text()).to.not.equal(fakename)
                    assert.equal(d.text(), name) // cannot use equal assertion for forRealName and d since forRealName overtakes d as the new variable.

                })

            })

            // hello = (params) => {
            //      ...
            // }

   })

})













// cy.get('.oxd-userdropdown-name').then( (x) => {

//     let realName = x.text()

//     //BDD style
//     expect(realName).to.equal(name)
//     expect(realName).to.not.equal(fakename)

//     //TDD Style
//     assert.equal(realName, name)
//     assert.notEqual(realName, fakename)

// })