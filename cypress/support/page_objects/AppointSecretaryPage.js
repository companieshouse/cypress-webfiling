import OfficerAppointment from "./generic/OfficerAppointment";


class AppointSecretaryPage extends OfficerAppointment {

    selectTodayAsAppointmentDate() {
        const dayElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day";
        const monthElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month";
        const yearElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#appt-date-container-continue').click();
    }

    consentToAct() {
        cy.get('#socta-statement').check();
        cy.get('#statement-of-consent-to-act-container-continue').click();
    }


}

export default AppointSecretaryPage