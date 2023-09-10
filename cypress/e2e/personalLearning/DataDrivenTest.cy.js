describe("ddt demo", () => {

    it('data driven test', () => {

        cy.fixture("exampleLogin.json").then( (data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            data.array.foreach((userdata) => {
                
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)

                cy.get("button[type='submit']").click();

            });

        });

    });
});