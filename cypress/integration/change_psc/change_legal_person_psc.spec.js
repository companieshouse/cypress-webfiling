import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import ChangeLegalPersonPsc from '../../support/page_objects/ChangeLegalPersonPsc';
import { orp_psc_name } from '../../fixtures/psc.json';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC03Page = new PscAppointment();
const preFilingPage = new PreFilingPSCPage();
const pscLandingPage = new PSCLandingPage();
const changeLegalPersonPsc = new ChangeLegalPersonPsc();


describe('Change of a legal person with significant control  - PSC06', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC03 as a prerequisite');
        // Go to PSC03
        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.appointPsc03();
        preFilingPage.appointPsc();

        // Appoint PSC03 - (No PSC data is baselined)
        cy.checkPageHeadingIs('Notification of a legal person with significant control (PSC)');
        appointPSC03Page.enterCorporateName(orp_psc_name);
        appointPSC03Page.lookupServiceAddress('1', 'CF14 3UZ');
        appointPSC03Page.enterEntityDetails('LTD', 'US');
        appointPSC03Page.selectNatureOfControl();
        appointPSC03Page.selectTodayAsNotificationDate();
        appointPSC03Page.selectTodayAsRegisterEntryDate();
        appointPSC03Page.submitNotification();
        cy.checkPageHeadingIs('Confirmation of Submission');
        appointPSC03Page.clickCompanyOverview();
    })

    it('File successful PSC06', () => {
        // Go to PSC06
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc06();
        preFilingPage.checkAppointedPscIsDisplayed();

        preFilingPage.selectPscToEdit(orp_psc_name);
        preFilingPage.changePsc06Details();

        // PSC06
        changeLegalPersonPsc.expandPscNameSection();
        cy.accessibilityCheck();
        changeLegalPersonPsc.closePscNameSection();

        changeLegalPersonPsc.expandPscAddressSection()
        cy.accessibilityCheck();
        changeLegalPersonPsc.expandPscManualAddress();
        cy.accessibilityCheck();
        changeLegalPersonPsc.closePscAddressSection();

        changeLegalPersonPsc.expandLegalPersonsDetailsSection();
        cy.accessibilityCheck();
        changeLegalPersonPsc.enterEntityDetails('PLC', 'ESP');

        changeLegalPersonPsc.expandNatureOfControlSection();
        cy.accessibilityCheck();
        changeLegalPersonPsc.closeNatureOfControlSection();

        changeLegalPersonPsc.selectTodayAsDateOfChange();
        cy.accessibilityCheck();

        changeLegalPersonPsc.enterTodayAsRegisterEntryDate();
        cy.accessibilityCheck();

        changeLegalPersonPsc.submitNotification();

    })

})