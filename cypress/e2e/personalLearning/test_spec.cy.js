// describe('first function', ()=> {

//     it('test1', () =>{    

//       //launching cypress and visiting a website
//       cy.visit("https://opensource-demo.orangehrmlive.com/")
      
//       // making sure the title is OrangeHRM
//       cy.title().should('eq', 'OrangeHRM')

//     })


// }) 



// first you write the describe section
// then the it block

describe('template spec', () => {

  it('CSS Locators', () => {

    cy.visit('https://example.cypress.io/')
    cy.get('ul.home-list>li>a').contains('Actions').click()

    // cy.get('[type=email]').type('test') // with attribute and class
    // cy.get('#email1').type('test2')  // with only id
    // cy.get('.form-control.action-email').type('test3') // with only class

    // now all of those but with the 'input tag'
    // cy.get('input#email1').type('tagtest')
    // cy.get('input.form-control.action-email').type('tagtest2')
    cy.get('input.')


  })


})