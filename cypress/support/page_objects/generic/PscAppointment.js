import OfficerAppointment from "./OfficerAppointment";

class PscAppointment extends OfficerAppointment {

    enterCorporateName(corporateName) {
        cy.get('#corporate-name').type(corporateName);
        cy.get('#corporate-name-container-continue').click();
    }

    enterEntityDetails(legalForm, lawGoverned) {
        cy.get('#legal-form').type(legalForm);
        cy.get('#law-governed').type(lawGoverned);
        cy.get('#psc-eea-container-continue').click();
    }

    selectNatureOfControl() {
        cy.get('#significant-influence-control').click();
        cy.get('#significant-influence-control-person').click();
        cy.get('#nature-of-control-container-continue').click();
    }

    // Enters todays date as notification date and clicks continue.
    selectTodayAsNotificationDate() {
        const dayElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#start-date-container-continue').click();
    }

     // Enters todays date as register entry date and clicks continue.
    selectTodayAsRegisterEntryDate() {
        const dayElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#register-entry-date-container-continue').click();
    }

    // Click company overview on the confirmation of submission page
    clickCompanyOverview() {
        cy.get(':nth-child(5) > .headerClick').click();
    }

    selectPscToEdit(pscName) {
        // This will select the Edit link of the named psc
        this.selectOfficer('tbody tr td:nth-child(3)  a', pscName);
    }

    selectPscToRemove(pscName) {
        // This will select the Remove link of the named psc
        this.selectOfficer('tbody tr td:nth-child(4)  a', pscName);
    }

    submitNotification() {
        cy.get(':nth-child(19) > div > .button').click();
    }

    selectTodayAsDateOfChange() {
        const dayElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
    }

      // Enters todays date as register entry date.
      enterTodayAsRegisterEntryDate() {
        const dayElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#register-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
    }
    

}

export default PscAppointment