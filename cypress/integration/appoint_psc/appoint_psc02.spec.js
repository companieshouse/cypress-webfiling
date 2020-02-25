import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import { rle_psc_name } from '../../fixtures/psc.json';

describe('Appoint a corporate PSC', () => {
    it('File successful PSC02', () => {

        const companyOverview = new CompanyOverviewPage();
        const appointPSC02Page = new PscAppointment();
        const pscLandingPage = new PSCLandingPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.appointPsc02();

        cy.accessibilityCheck();
        appointPSC02Page.proceedPastPreFilingScreen();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Notification of a relevant legal entity with significant control (PSC)');
        cy.accessibilityCheck();

        cy.accessibilityCheck();

        appointPSC02Page.enterCorporateName(rle_psc_name);

        cy.accessibilityCheck();
        appointPSC02Page.lookupServiceAddress('10', 'CF14 3UZ');

        cy.accessibilityCheck();
        appointPSC02Page.enterEntityDetails('LLP', 'EU');

        cy.accessibilityCheck();
        appointPSC02Page.selectNatureOfControl();

        cy.accessibilityCheck();
        appointPSC02Page.selectTodayAsNotificationDate();

        cy.accessibilityCheck();
        appointPSC02Page.selectTodayAsRegisterEntryDate();

        // Check disclaimer is correct
        cy.checkDisclaimer();

    })

})