

import BasePage from "./generic/BasePage";

class AddAllotmentPage extends BasePage {

    selectCurrency(currency) {
        cy.get('#currencyCode').select(currency);
        cy.get('#currency-container-continue').click();
        return this;        
    }
    selectShareClass(shareClass) {
        cy.get('#shareClassList').select(shareClass);
        cy.get('#share-class-container-continue').click();
        return this;
    }

    enterNumberOfSharesAndNominalValue(numShares, nominalValue) {
        cy.get('#NumberOfShares').type(numShares);
        cy.get('#ShareValue').type(nominalValue);
        cy.get('#shares-allotted-container-continue').click();
    }

    enterSharePayments(amountPaid) {
        cy.get('#AmountPaid').type(amountPaid);
        cy.get('#AmountUnpaid').type(amountPaid);
        cy.get('#amount-paid-container-continue').click();
    }

    addAllotment() {
        cy.contains('Add this allotment').click();
    }

}

export default AddAllotmentPage