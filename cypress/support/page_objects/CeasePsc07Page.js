class CeasePsc07Page {

    // The date elements on the cease psc page are different than the generic PscAppointment page and does not include a continue button.

    selectTodayAsCessationDate() {
        const dayElement = '#term-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#term-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#term-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
    }

    selectTodayAsRegisterEntryDate() {
        const dayElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
    }

    confirmPscCessation() {
        cy.get('.checkbox > label').should('contain.text',
            'I confirm that Pkdfv Llp has ceased to be a person of significant control');
        cy.get('#confirm-psc-cessation').click();
    }

    submitNoticeOfCessation() {
        cy.get('.container-button > div > .button').click();
    }

}

export default CeasePsc07Page