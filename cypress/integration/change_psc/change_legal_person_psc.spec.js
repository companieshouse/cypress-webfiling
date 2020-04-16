import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import ChangeLegalPersonPsc from '../../support/page_objects/ChangeLegalPersonPsc';
import { orp_psc_name } from '../../fixtures/psc.json';
import AddressPage from '../../support/page_objects/generic/Address.js';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC03Page = new PscAppointment();
const pscLandingPage = new PSCLandingPage();
const changeLegalPersonPsc = new ChangeLegalPersonPsc();
const addressPage = new AddressPage();


describe('Change of a legal person with significant control  - PSC06', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC03 as a prerequisite');
        // Go to PSC03
        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.appointPsc03();
        appointPSC03Page.proceedPastPreFilingScreen();

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
        changeLegalPersonPsc.checkAppointedPscIsDisplayed();

        changeLegalPersonPsc.selectPscToEdit(orp_psc_name);
        changeLegalPersonPsc.proceedPastPreFilingScreen();

        // PSC06
        changeLegalPersonPsc.expandPscNameSection();
        cy.accessibilityCheck();
        changeLegalPersonPsc.closePscNameSection();

        addressPage.changeServiceAddressLink();
        cy.accessibilityCheck();
        changeLegalPersonPsc.enterAddressManually();
        cy.accessibilityCheck();
        addressPage.cancelServiceAddressChange();

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