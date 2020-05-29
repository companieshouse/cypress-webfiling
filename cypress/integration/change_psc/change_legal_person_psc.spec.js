import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import { orp_psc_name } from '../../fixtures/psc.json';
import AddressPage from '../../support/page_objects/generic/Address.js';
import ChangePscPage from '../../support/page_objects/ChangePscPage.js';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC03Page = new PscAppointment();
const pscLandingPage = new PSCLandingPage();
const changeLegalPersonPsc = new ChangePscPage();
const addressPage = new AddressPage();
const invalidCharacter = "`";


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

    it('PSC06 - Check sections first without and then with error messages present. No submission submitted', () => {
        // Go to PSC06
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc06();
        changeLegalPersonPsc.checkAppointedPscIsDisplayed();

        changeLegalPersonPsc.selectPscToEdit(orp_psc_name);
        changeLegalPersonPsc.proceedPastPreFilingScreen();

        // PSC name
        changeLegalPersonPsc.changePscName()
        cy.accessibilityCheck();
        changeLegalPersonPsc.enterCorporateName(invalidCharacter);
        cy.accessibilityCheck();

        // Service Address
        addressPage.changeServiceAddressLink();
        cy.accessibilityCheck();
        addressPage.enterServiceAddressManually();
        cy.accessibilityCheck();
        addressPage.enterInvalidServiceAddress(invalidCharacter)
        .serviceAddressContinue();
        cy.accessibilityCheck();

        // Entity details
        changeLegalPersonPsc.expandEntityDetailsSection();
        cy.accessibilityCheck();
        changeLegalPersonPsc.enterEntityDetails(invalidCharacter, invalidCharacter);
        cy.accessibilityCheck();

        // Nature of Control
        changeLegalPersonPsc.changeNatureOfControl();
        cy.accessibilityCheck();
        changeLegalPersonPsc.selectInvalidNatureOfControlCombination();

        // Date of change and register entry date sections are already expanded
        // As invalid changes have been made, ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();

    })

})