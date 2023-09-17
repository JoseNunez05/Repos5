describe("data driven test", () => {

    beforeEach('visit site', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    // direct access
    it.skip('fixture test', () => {

        // passing the fixture file into the 'data' parameter
        cy.fixture('orangehrm.json').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
        })
    })

        it.only('fixtures as array test', () => {
            cy.fixture('login2.json').then((data) => {
                // let credentials=data;
                data.forEach((credentials) => {
                    cy.get("input[placeholder='Username']").type(credentials.username);
                    cy.get("input[placeholder='Password']").type(credentials.password);
                });
            });
        });

})