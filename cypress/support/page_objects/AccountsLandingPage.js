import BasePage from "./generic/BasePage";

class AccountsLandingPage extends BasePage {

    fileMicroEntityAccounts() {
        cy.contains("Micro-entity Accounts").click();
    }

    fileJointAccounts() {
        cy.contains("Full accounts with Companies House and HMRC").click();
    }

    fileAbbreviatedAccounts() {
        cy.contains("Abbreviated Accounts").click();
    }
 
}

export default AccountsLandingPage