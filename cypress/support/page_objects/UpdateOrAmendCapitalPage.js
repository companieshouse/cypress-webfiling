import ShareCapital from "./generic/ShareCapital";
import { invalid_character } from '../../../fixtures/test_inputs.json';

class UpdateOrAmendCapitalPage extends ShareCapital {


    amendClassOfShare(shareClass) {
        cy.get('#share-class-container-change').click();
        cy.accessibilityCheck();
        this.selectShareClass(shareClass);
    }

    editNumberOfSharesAndNominalValue(value) {
        cy.get('#shares-aggregate-container-change').click();
        cy.accessibilityCheck();
        this.enterNumberOfShares(value);
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
        cy.accessibilityCheck();
        this.editNumberOfSharesAndNominalValue(invalid_character);
        cy.accessibilityCheck();
        this.enterPrescribedParticulars(invalid_character);
        cy.accessibilityCheck();
    }

}

export default UpdateOrAmendCapitalPage
