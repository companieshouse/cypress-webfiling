import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import AppointPSC01Page from '../../support/page_objects/AppointPSC01Page';
import AddressPage from '../../support/page_objects/generic/Address.js';
import ChangePscPage from '../../support/page_objects/ChangePscPage';

const companyOverview = new CompanyOverviewPage();
const appointPSC01Page = new AppointPSC01Page();
const allForms = new AllFormsPage();
const psc04Page = new ChangePscPage();
const addressPage = new AddressPage();
const invalidCharacter = "`";

describe('Change of person with significant control (PSC) details', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC01 as a prerequisite');
        // Go to PSC01
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc01();
        appointPSC01Page.proceedPastPreFilingScreen();
        companyOverview.selectLinkWithText('Notification of a person with significant control (PSC)');

        // Appoint PSC01 - (No PSC data is baselined)
        appointPSC01Page.enterName("Mr", "Test", "Automation", "Ninja");
        appointPSC01Page.selectDateOfBirth('1', 'January', '1980');
        appointPSC01Page.enterNationality('British')
        appointPSC01Page.selectROasCorrespondenceAddress()
        appointPSC01Page.enterHomeAddress('10', 'CF14 3UZ')
        appointPSC01Page.checkCountryOfResidenceContains('Wales')
        appointPSC01Page.selectNatureOfControl()
        appointPSC01Page.selectTodayAsNotificationDate()
        appointPSC01Page.selectTodayAsRegisterEntryDate();
        appointPSC01Page.submitNotification();

    })

    it('PSC04 - Check sections first without and then with error messages present. No submission submitted', () => {
        // Go to PSC04
        appointPSC01Page.clickCompanyOverview();
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc04();
        psc04Page.selectPscToEdit('Test Automation Ninja');
        cy.accessibilityCheck();
        psc04Page.proceedPastPreFilingScreen();
        // Check correct page is loaded
        cy.checkPageHeadingIs('Change of person with significant control (PSC) details');
        cy.accessibilityCheck();

        // PSC name
        psc04Page.changePscName();
        // Initial check after opening section
        cy.accessibilityCheck();
        //Enter invalid characters to fire errors
        psc04Page.enterName(invalidCharacter, invalidCharacter, invalidCharacter, invalidCharacter);
        cy.accessibilityCheck();

        // Nationality
        psc04Page.changePscNationality();
        cy.accessibilityCheck();
        psc04Page.enterNationality(invalidCharacter);
        cy.accessibilityCheck();

        // Service Address
        addressPage.changeServiceAddressLink();
        cy.accessibilityCheck();
        addressPage.enterServiceAddressManually();
        cy.accessibilityCheck();
        addressPage.enterInvalidServiceAddress(invalidCharacter)
        .serviceAddressContinue();
        cy.accessibilityCheck();

        //Residential Address
        addressPage.changeResidentialAddressLink();
        cy.accessibilityCheck();
        addressPage.homeAddressManualEntryButton();
        cy.accessibilityCheck();
        addressPage.enterResidentialAddressManually();
        cy.accessibilityCheck();
        addressPage.enterInvalidResidentialAddress(invalidCharacter)
        .residentialAddressContinue();
        cy.accessibilityCheck();

        //Country of Residence
        psc04Page.changeCountryOfResidence();
        cy.accessibilityCheck();
        psc04Page.enterCountryOfResidence(invalidCharacter);

        //Nature of Control
        psc04Page.changeNatureOfControl();
        cy.accessibilityCheck();
        psc04Page.selectInvalidNatureOfControlCombination();

        // Date of change and register entry date sections are already expanded
        // As invalid changes have been made, ensure the submission button is disabled
        cy.checkSubmitIsDisabled();
        cy.accessibilityCheck();
    })

})