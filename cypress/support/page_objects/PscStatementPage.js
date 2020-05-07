import PscAppointment from "./generic/PscAppointment";

class PscStatmentPage extends PscAppointment {

    selectReason(reason) {
        cy.contains(reason).click();
        return this;
    }

    selectReasonContinue() {
        cy.get('#statement-reason-container-continue').click();
        return this;
    }

    selectStatement() {
        cy.get('#psc-identified-label').click();
        return this;
    }

    selectStatementContinue() {
        cy.get('#psc-statement-container-continue').click();
        return this;
    }

    changeReason() {
        cy.get('#statement-reason-container-change').click();
        return this;
    }

    selectRegisterEntryDateContinue() {
        cy.get('#statement-date-container-continue').click();
    }

    selectTodayAsRegisterEntryDate() {
        const dayElement = '#day-select-1';
        const monthElement = '#month-select-1';
        const yearElement = '#year-select-1';
        cy.selectTodaysDate(dayElement, monthElement, yearElement);

    }

}

export default PscStatmentPage