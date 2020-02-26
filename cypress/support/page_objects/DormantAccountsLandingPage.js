class DormantAccountsLandingPage {

    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
        return this;
    }

    startAccountsFiling() {
        cy.get('.button').click();
    }

}

export default DormantAccountsLandingPage