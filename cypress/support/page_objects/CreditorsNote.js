import BalanceSheetNotes from "./generic/BalanceSheetNotes";

class CreditorsNote extends BalanceSheetNotes {

    enterCreditorsInformation(currentSecuredDebts, previousSecuredDebts, currentInstallmentsDueAfter5Years,
        previousInstallmentsDueBefore5Years, currentNonInstallmentsDueAfter5Years,
        previousNonInstallmentsDueAfter5Years) {
        cy.get('input[id$="currentSecuredDebts"]').clear().type(currentSecuredDebts);
        cy.get('input[id$="previousSecuredDebts"]').clear().type(previousSecuredDebts);
        cy.get('input[id$="currentInstalmentDebtsDueAfterFiveYears"]').clear().type(currentInstallmentsDueAfter5Years);
        cy.get('input[id$="previousInstalmentDebtsDueAfterFiveYears"]').clear().type(previousInstallmentsDueBefore5Years);
        cy.get('input[id$="currentNonInstalmentDebtsDueAfterFiveYears"]').clear().type(currentNonInstallmentsDueAfter5Years);
        cy.get('input[id$="previousNonInstalmentDebtsDueAfterFiveYears"]').clear().type(previousNonInstallmentsDueAfter5Years);
        return this;
    }

}

export default CreditorsNote