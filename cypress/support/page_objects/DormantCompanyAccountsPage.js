import BasePage from "./generic/BasePage";

class DormantCompanyAccountsPage extends BasePage {

    enterCalledUpShareCapitalNotPaid(value) {
        cy.get('input[id$="currentShareCapNotPaid"]').clear().type(value);
        return this;
    }

    enterCashAtBank(value) {
        cy.get('input[id$="currentCashAtBank"]').clear().type(value);
        return this;
    }

    enterShareCapital(numShares, shareClass, shareValue) {
        cy.get('input[id$="NumberOfShares"]').clear().type(numShares);
        cy.get('input[type="text"][id$="ShareClass"]').clear().type(shareClass);
        cy.get('input[id$="ShareValue"]').clear().type(shareValue);
        return this;
    }

    selectDirectorResponsibilities() {
        cy.get('input[type="checkbox"][id$="statementAudit"]').check();
        cy.get('input[type="checkbox"][id$="statementResponsibilities"]').check();
        cy.get('input[type="checkbox"][id$="statementPrepared"]').check();
        return this;
    }

    enterDateOfApproval(date) {
        cy.get('input[id$="dateOfApproval"]').clear().type(date);
        return this;
    }

    enterDirectorName(forename, surname) {
        cy.get('input[id$="director1Forename"]').clear().type(forename);
        cy.get('input[id$="director1Surname"]').clear().type(surname);
        return this;
    }

    submitForm() {
        cy.get('.buttonLeft').click();
    }

    validateForm() {
        cy.get('.leftAlignContainer > .buttonRight').click();
    }


}

export default DormantCompanyAccountsPage