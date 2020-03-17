import BasePage from "./generic/BasePage";

class DormantAccountsLandingPage extends BasePage {

    startAccountsFiling() {
        cy.get('.button').click();
    }

}

export default DormantAccountsLandingPage