import BalanceSheetNotes from "./generic/BalanceSheetNotes";

class DebtorsNote extends BalanceSheetNotes { 

    enterDebtorsInformation(current, previous) {
        cy.get('input[id$="currentDebtorsAmountsAfterOneYear"]').clear().type(current);
        cy.get('input[id$="previousDebtorsAmountsAfterOneYear"]').clear().type(previous);
        return this;
    }

}

export default DebtorsNote