// before
// after
// beforeEach
// afterEach

describe('test', () => {

    before(() => {

        cy.visit('www.google.com');
        cy.log('launched app')

    })


    after(() => {

        cy.log('closed app')

    })


    beforeEach('it block', () => {

        cy.log('executing it block')

    })


    afterEach('it blocks', () => {

        cy.log('executed it block')

    })


    it('searching', () => {

        cy.log('simple search')

    })

    it('advance searching', () => {

        cy.log('advanced search')

    })

    it('list products', () => {

        cy.log('listing products')

    })

})