import BalanceSheetNotes from "./generic/BalanceSheetNotes";
import { invalid_character } from '../../../fixtures/test_inputs.json'

class IntangibleAssetsFixedNote extends BalanceSheetNotes{

    enterAmortisation(atYearStart, chargeForYear, onDisposals) {
        cy.get('input[id$="startOfYearAmortisation"]').clear().type(atYearStart);
        cy.get('input[id$="chargeForYear"]').clear().type(chargeForYear);
        cy.get('input[id$="onDisposals"]').clear().type(onDisposals);
        return this;
    }
    
    enterInvalidAmortisation() {
        this.enterAmortisation(invalid_character, invalid_character, invalid_character);
        return this;
    }

}

export default IntangibleAssetsFixedNote