import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import { rle_psc_name } from '../../fixtures/psc.json';
import AddressPage from '../../support/page_objects/generic/Address.js';
import ChangePscPage from '../../support/page_objects/ChangePscPage.js';
import { invalid_character } from '../../fixtures/test_inputs.json';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC02Page = new PscAppointment();
const pscLandingPage = new PSCLandingPage();
const changeLegalEntityPsc = new ChangePscPage();
const addressPage = new AddressPage();


describe('Change of a relevant legal entity with significant control (PSC) details - PSC05', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC02 as a prerequisite');
        // Go to PSC02
        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.appointPsc02();
        appointPSC02Page.proceedPastPreFilingScreen();
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

    it('PSC05 - Check sections first without and then with error messages present. No submission submitted', () => {
        // Go to PSC05
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc05();
        changeLegalEntityPsc.checkAppointedPscIsDisplayed();

        changeLegalEntityPsc.selectPscToEdit(rle_psc_name);
        changeLegalEntityPsc.proceedPastPreFilingScreen();

        // PSC name
        changeLegalEntityPsc.changePscName();
        // Initial check after opening section
        cy.accessibilityCheck();
        changeLegalEntityPsc.enterCorporateName(invalid_character);

        // Service Address
        addressPage.changeServiceAddressLink();
        cy.accessibilityCheck();
        addressPage.enterServiceAddressManually();
        cy.accessibilityCheck();
        addressPage.enterInvalidServiceAddress(invalid_character)
        .serviceAddressContinue();
        cy.accessibilityCheck();

        // Entity details
        changeLegalEntityPsc.expandEntityDetailsSection();
        cy.accessibilityCheck();
        changeLegalEntityPsc.enterEntityDetails(invalid_character, invalid_character);
        cy.accessibilityCheck();

        // Nature of Control
        changeLegalEntityPsc.changeNatureOfControl();
        cy.accessibilityCheck();
        changeLegalEntityPsc.selectInvalidNatureOfControlCombination();

        // Date of change and register entry date sections are already expanded
        // As invalid changes have been made, ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();

    })

})
