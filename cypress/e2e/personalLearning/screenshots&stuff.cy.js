describe("screenshot demo", function() {

    it("screenshot thing", () => {

        cy.visit("https://demo.opencart.com/");
        cy.screenshot("page");

        cy.get("img[src$='https://demo.opencart.com/image/catalog/opencart-logo.png']").screenshot("logo");

    })

})