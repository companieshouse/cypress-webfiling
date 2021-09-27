import BasePage from "./generic/BasePage";

class DormantAccountsLandingPage extends BasePage {

    startAccountsFiling() {
        cy.get('form > .button').click();
    }

}

export default DormantAccountsLandingPage