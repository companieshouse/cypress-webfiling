

import BasePage from "./generic/BasePage";

const invalidCharacter = "`";

class UpdateOrAmendCapitalPage extends BasePage {


    amendClassOfShare(shareClass) {
        cy.get('#share-class-container-change').click();
        cy.accessibilityCheck();
        cy.get('#shareClassList').select(shareClass);
        cy.get('#share-class-container-continue').click();
    }

    editNumberOfSharesAndNominalValue(value) {
        cy.get('#shares-aggregate-container-change').click();
        cy.accessibilityCheck();
        cy.get('#NumberOfShares').clear().type(value);
        cy.get('#AggregateNominalValue').clear().type(value);
        cy.get('#shares-aggregate-container-continue').click();
    }

    enterPrescribedParticulars(particulars) {
        cy.get('#prescribed-particulars-container-change').click();
        cy.accessibilityCheck();
        cy.get('#PrescribedParticulars').clear().type(particulars)
        cy.get('#prescribed-particulars-container-continue').click();
    }

    enterInvalidInformationInFieldsAndCheck() {
        this.amendClassOfShare('Please select');
        //cy.accessibilityCheck();
        this.editNumberOfSharesAndNominalValue(invalidCharacter);
        //cy.accessibilityCheck();
        this.enterPrescribedParticulars(invalidCharacter);
        //cy.accessibilityCheck();
    }

}

export default UpdateOrAmendCapitalPage