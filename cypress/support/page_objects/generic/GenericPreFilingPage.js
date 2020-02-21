import BasePage from "./BasePage";

class GenericPreFilingPage extends BasePage {

    checkPageIsDisplayedCorrectly() {
        cy.get('.tick').should('not.be.hidden');
        cy.get('.cross').should('not.be.hidden');
    }

}

export default GenericPreFilingPage