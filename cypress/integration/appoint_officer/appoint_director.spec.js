import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointDirectorPage from '../../support/page_objects/AppointDirectorPage'

// Constants
const companyOverview = new CompanyOverviewPage();
const appointDirectorPage = new AppointDirectorPage();

describe('Appoint a Director', () => {
    beforeEach('Go to AP01 form', () => {
        // Go to change registered office address
        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Appoint a director');
    
        appointDirectorPage.proceedPastPreFilingScreen();
    
        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a director');
        cy.accessibilityCheck();
    })

    it('File successful AP01', () => {
        // Enter details
        appointDirectorPage.enterName("Mr", "Test", "Automation", "Ninja");
        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointDirectorPage.selectDateOfBirth('1', 'January', '1980');

        cy.accessibilityCheck();
        appointDirectorPage.enterNationality('British');

        cy.accessibilityCheck();
        appointDirectorPage.enterOccupation('Company Director');

        cy.accessibilityCheck();
        appointDirectorPage.selectROasCorrespondenceAddress();

        cy.accessibilityCheck();
        appointDirectorPage.enterHomeAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointDirectorPage.checkCountryOfResidenceContains('Wales');

        cy.accessibilityCheck();
        appointDirectorPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointDirectorPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();
    })

    it('Error validation - AP01', () => {
        appointDirectorPage.expandAll();

        // Open Address sections
        appointDirectorPage.expandCorrespondenceDetails();
        appointDirectorPage.expandHomeAddressDetails();

        // Include invalid entry for fields that are not deemed mandatory
        appointDirectorPage.invalidEntryForNameFields()
        .enterInvalidCharacterForCorrespondenceAddress()
        .enterInvalidCharacterForHomeAddress();

        // Submit form
        appointDirectorPage.submitForm();

        // Accessibility check - collapsed sections
        cy.accessibilityCheck();

        // Expand All once more
        appointDirectorPage.expandAll();

        // Accessibility check
        cy.accessibilityCheck();
    })

})