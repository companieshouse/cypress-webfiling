import { invalid_character } from '../../fixtures/test_inputs.json';

class BalanceSheetNotes {

    enterCost(atyearStart, additions, disposals, revaluations, transfers) {
        cy.get('input[id$="startOfYearCost"]').clear().type(atyearStart);
        cy.get('input[id$="additions"]').clear().type(additions);
        cy.get('input[id$="disposals"]').clear().type(disposals);
        cy.get('input[id$="revaluations"]').clear().type(revaluations);
        cy.get('input[id$="transfers"]').clear().type(transfers);
        return this;

    }

    enterInvalidCost() {
        this.enterCost(invalid_character, invalid_character, invalid_character, invalid_character, invalid_character);
        return this;
    }

    enterNoteText(text) {
    cy.get('textarea[id$="note.text"]').clear().type(text);
    return this;
    }

    cancelNote() {
        cy.get('input[id$="notePage.cancel"]').click().wait(3000);
    }

    saveNote() {
        cy.get('input[id$="notePage.submit"]').click().wait(3000);
    }
    
}

export default BalanceSheetNotes