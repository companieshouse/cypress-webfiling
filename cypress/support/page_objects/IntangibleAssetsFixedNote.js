import BalanceSheetNotes from "./generic/BalanceSheetNotes";

class IntangibleAssetsFixedNote extends BalanceSheetNotes{

    enterAmortisation(atYearStart, chargeForYear, onDisposals) {
        cy.get('input[id$="startOfYearAmortisation"]').clear().type(atYearStart);
        cy.get('input[id$="chargeForYear"]').clear().type(chargeForYear);
        cy.get('input[id$="onDisposals"]').clear().type(onDisposals);
        return this;
    } 

}

export default IntangibleAssetsFixedNote