import BalanceSheetNotes from "./generic/BalanceSheetNotes";

const invalidCharacter =  "`";

class IntangibleAssetsFixedNote extends BalanceSheetNotes{

    enterAmortisation(atYearStart, chargeForYear, onDisposals) {
        cy.get('input[id$="startOfYearAmortisation"]').clear().type(atYearStart);
        cy.get('input[id$="chargeForYear"]').clear().type(chargeForYear);
        cy.get('input[id$="onDisposals"]').clear().type(onDisposals);
        return this;
    }
    
    enterInvalidAmortisation() {
        this.enterAmortisation(invalidCharacter, invalidCharacter, invalidCharacter);
        return this;
    }

}

export default IntangibleAssetsFixedNote