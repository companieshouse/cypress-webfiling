import BalanceSheetNotes from "./generic/BalanceSheetNotes";

class TangibleAssetsFixedNote extends BalanceSheetNotes{

    enterDepreciation(atYearStart, chargeForYear, onDisposals) {
        cy.get('input[id$="startOfYearDepreciation"]').clear().type(atYearStart);
        cy.get('input[id$="chargeForYear"]').clear().type(chargeForYear);
        cy.get('input[id$="onDisposals"]').clear().type(onDisposals);
        return this;
    } 
    
}

export default TangibleAssetsFixedNote