import BalanceSheetNotes from "./generic/BalanceSheetNotes";
import { invalid_character } from '../../../fixtures/test_inputs.json';

class CalledUpShareCapitalNote extends BalanceSheetNotes {

    addShareClass(shareClass, shareValue, currentNumShares, previousNumShares) {
        //click the share classs field to open the autocomplete and check it's accessibility
        cy.get('input[id$="note.shareClass"]').click();
        cy.accessibilityCheck();
        cy.get('input[id$="note.shareClass"]').clear().type(shareClass);
        cy.get('input[id$="note.shareValue"]').clear().type(shareValue);
        cy.get('input[id$=".currentNumberOfShares"]').clear().type(currentNumShares);
        cy.get('input[id$=".previousNumberOfShares"]').clear().type(previousNumShares);
        cy.get('input[id$="note.addShare"]').click().wait(3000);
        cy.accessibilityCheck();
        return this;
    }

    addInvalidShareClass() {
        this.addShareClass(invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    //remove the transaction as multiple test runs will cause the table to fill up to capacity
    removeShareClass() {
        cy.get('input[id$="1.deleteItem"]').click().wait(3000);
        return this;
    }

}

export default CalledUpShareCapitalNote