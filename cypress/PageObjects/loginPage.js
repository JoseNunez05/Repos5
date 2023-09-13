class login 
{
    visit(page)
    {
        cy.visit(page);
    }

    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    submitCredentials()
    {
        cy.get("button[type='submit']").click();
    }
}

export default login;