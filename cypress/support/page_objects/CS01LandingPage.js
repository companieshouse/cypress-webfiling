import BasePage from "./generic/BasePage";

class CS01LandingPage extends BasePage {

    changeDateOfStatementLink() {
        cy.get('#changeDate').click();
    }

    proceedWithFiling() {
        cy.get('button[type="submit"]').click();
    }

}

export default CS01LandingPage