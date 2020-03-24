import BasePage from "./generic/BasePage";

class AccountsLandingPage extends BasePage {

    fileMicroEntityAccounts() {
        cy.contains("Micro-entity Accounts").click();
    }

}

export default AccountsLandingPage