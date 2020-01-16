import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import CeasePsc07Page from '../../support/page_objects/CeasePsc07Page';
import { rle_psc_name } from '../../fixtures/psc.json';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC02Page = new PscAppointment();
const preFilingPage = new PreFilingPSCPage();
const pscLandingPage = new PSCLandingPage();
const ceasePsc07Page = new CeasePsc07Page();

describe('Notice of ceasing to be a person with significant control (PSC) - PSC07', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC02 as a prerequisite');
        // Go to PSC02
        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.appointPsc02();
        preFilingPage.appointPsc();
        companyOverview.selectLinkWithText('Notification of a relevant legal entity with significant control (PSC)');

        // Appoint PSC02 - (No PSC data is baselined)
        cy.checkPageHeadingIs('Notification of a relevant legal entity with significant control (PSC)');
        appointPSC02Page.enterCorporateName(rle_psc_name);
        appointPSC02Page.lookupServiceAddress('10', 'CF14 3UZ');
        appointPSC02Page.enterEntityDetails('LLP', 'EU');
        appointPSC02Page.selectNatureOfControl();
        appointPSC02Page.selectTodayAsNotificationDate();
        appointPSC02Page.selectTodayAsRegisterEntryDate();
        appointPSC02Page.submitNotification();
        cy.checkPageHeadingIs('Confirmation of Submission');
        appointPSC02Page.clickCompanyOverview();
    })

    it('File successful PSC07 & error validation', () => {
        // Go to PSC07
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc07();

        // Check the appointed PSC is displayed
        cy.get('tbody tr td:nth-child(1)').invoke('text').then((text) => {
            expect(text.trim()).to.not.eq('There are currently no persons with significant control registered.');
        });

        preFilingPage.selectPscToRemove(rle_psc_name);
        // Check correct PSC07 page is loaded
        cy.checkPageHeadingIs('Notice of ceasing to be a Person with Significant Control (PSC)');

        // Error validation
        ceasePsc07Page.submitNoticeOfCessation();
        cy.accessibilityCheck();

        // File successful PSC07
        ceasePsc07Page.selectTodayAsCessationDate();
        cy.accessibilityCheck();
        ceasePsc07Page.selectTodayAsRegisterEntryDate();
        cy.accessibilityCheck();

        ceasePsc07Page.confirmPscCessation();
        cy.accessibilityCheck();
        ceasePsc07Page.submitNoticeOfCessation();

        // Check confirmation of submission page is displayed
        cy.checkPageHeadingIs('Confirmation of Submission');
        cy.accessibilityCheck();

    })

})