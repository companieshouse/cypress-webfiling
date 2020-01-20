

import BasePage from "./generic/BasePage";

class UpdateOrAmendCapitalPage extends BasePage {


    amendClassOfShare(shareClass) {
        cy.get('#share-class-container-change').click();
        cy.accessibilityCheck();
        cy.get('#shareClassList').select(shareClass);
        cy.get('#share-class-container-continue').click();
    }

    expandNumberOfSharesAndNominalValue() {
        cy.get('#shares-aggregate-container-change').click();
        cy.accessibilityCheck();
        cy.get('#shares-aggregate-container-continue').click();
    }

    expandPrescribedParticulars() {
        cy.get('#prescribed-particulars-container-change').click();
        cy.accessibilityCheck();
        cy.get('#prescribed-particulars-container-continue').click();
    }

}

export default UpdateOrAmendCapitalPage