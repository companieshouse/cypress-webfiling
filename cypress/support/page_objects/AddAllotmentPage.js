import ShareCapital from "./generic/ShareCapital";

class AddAllotmentPage extends ShareCapital {

    selectCurrency(currency) {
        cy.get('#currencyCode').select(currency);
        cy.get('#currency-container-continue').click();
        return this;        
    }

    enterNumberOfSharesAndNominalValue(numShares, nominalValue) {
        this.enterNumberOfShares(numShares);
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

    cancelAllotment() {
        cy.get('.cancel').click();
    }

}

export default AddAllotmentPage