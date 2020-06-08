import BalanceSheetNotes from "./generic/BalanceSheetNotes";
import { invalid_character } from '../../fixtures/test_inputs.json';

class TransactionsWithDirectorsNote extends BalanceSheetNotes {

    addTransaction(directorName, transactionDescription, previousBalance,
        additionalAdvances, repayments) {
        cy.get('input[id$="nameOfDirector"]').clear().type(directorName);
        cy.get('input[id$="descriptionOfTransaction"]').clear().type(transactionDescription);
        cy.get('input[id$="previousBalance"]').clear().type(previousBalance);
        cy.get('input[id$="additionalAdvances"]').clear().type(additionalAdvances);
        cy.get('input[id$="repayments"]').clear().type(repayments);
        cy.get('input[id$="addTransaction"]').click().wait(3000);
        cy.accessibilityCheck();
        return this;
    }
    addInvalidTransaction() {
        this.addTransaction(invalid_character, invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    //remove the transaction as multiple test runs might cause the table to fill up to capacity
    removeTransaction() {
        cy.get('input[id$="1.deleteItem"]').click().wait(3000);
        return this;
    }
}

export default TransactionsWithDirectorsNote