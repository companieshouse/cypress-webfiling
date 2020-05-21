import BasePage from "./BasePage";
import AddressPage from "./Address";

const addressPage = new AddressPage();

class CorporateOfficerAppointment extends BasePage {

    enterCompanyName(companyName) {
        cy.get('#corporateName').type(companyName);
        cy.get('#corporate-name-container-continue').click();
    }

    selectTodayAsAppointmentDate() {
        const dayElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day";
        const monthElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month";
        const yearElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#appt-date-container-continue').click();
    }

    enterCompanyAddress(propertyNumber, postcode) {
        addressPage.lookUpServiceAddress(propertyNumber, postcode);
        cy.accessibilityCheck();
        addressPage.companyAddressContinue();
    }

    selectEEAStatus(status) {
        if (status === true) {
            cy.get('#EEAInd-label').click();
            cy.accessibilityCheck();
            // Enter EEA details
            cy.get('#PlaceRegisteredEEA').select('United Kingdom');
            cy.get('#RegistrationNumberEEA').type('00006400');
        } else {
            cy.get('#NONEEAInd-label').click();
            cy.accessibilityCheck();
            // Complete Non EEA details
            cy.get('#LawGoverned').type('Law');
            cy.get('#LegalForm').type('Legal');
        }
        cy.get('#eea-container-continue').click();
        return this;
    }

    consentToAct() {
        cy.get('#socta-statement').check();
        cy.get('#statement-of-consent-to-act-container-continue').click();
    }

}

export default CorporateOfficerAppointment
