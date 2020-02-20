class CS01LandingPage {

    changeDateOfStatementLink() {
        cy.get('#changeDate').click();
    }

    proceedWithFiling() {
        cy.get('button[type="submit"]').click();
    }

}

export default CS01LandingPage