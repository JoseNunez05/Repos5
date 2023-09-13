import login from "../../PageObjects/loginPage";

describe('pom', () => {

    // general approach
    it.skip('login test', function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");

        cy.get("button[type='submit']").click()

    })

    // login with class
    it('login test with class', function() {

        const loginFun = new login();

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        loginFun.setUsername("Admin");
        loginFun.setPassword("admin123");
        loginFun.submitCredentials();

    })

})