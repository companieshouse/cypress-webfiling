import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AppointCorporateSecretaryPage from '../../support/page_objects/AppointCorporateSecretaryPage.js';

describe('Appoint a Corporate Secretary', () => {
    it('File successful AP04', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const appointCorporateSecretaryPage = new AppointCorporateSecretaryPage();

        cy.accessibilityCheck();
        companyOverview.selectAllForms().selectLinkWithText('Directors and secretaries')
            .selectLinkWithText('Appointment of corporate secretary- AP04');

        // Check correct page is loaded
        cy.checkPageHeadingIs('Appointment of a corporate secretary');

        // Repeat calls for accessibility checks
        cy.accessibilityCheck();
        appointCorporateSecretaryPage.enterCompanyName("Test Automation Limited");

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.selectTodayAsAppointmentDate();

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.enterCompanyAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.selectEEAStatus(false);

        cy.accessibilityCheck();
        appointCorporateSecretaryPage.consentToAct();

        // Check disclaimer is correct
        cy.checkDisclaimer();
    })

})
