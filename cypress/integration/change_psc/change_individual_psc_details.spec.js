import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import AppointPSC01Page from '../../support/page_objects/AppointPSC01Page';
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';
import ChangeIndividualPscPage from '../../support/page_objects/ChangeIndividualPscPage';

const companyOverview = new CompanyOverviewPage();
const preFilingPage = new PreFilingPSCPage();
const appointPSC01Page = new AppointPSC01Page();
const allForms = new AllFormsPage();
const psc04Page = new ChangeIndividualPscPage();

describe('Change of person with significant control (PSC) details', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC01 as a prerequisite');
        // Go to PSC01
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc01();
        preFilingPage.appointPsc();
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

        it('File successful PSC04', () => {
        // Go to PSC04
        appointPSC01Page.clickCompanyOverview();
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc04();
        preFilingPage.selectPscToEdit('Test Automation Ninja');
        cy.accessibilityCheck();
        preFilingPage.changePscDetails();
        // Check correct page is loaded
        cy.checkPageHeadingIs('Change of person with significant control (PSC) details');
        cy.accessibilityCheck();

        // Accessibility check for each section
        psc04Page.changePscName();
        cy.accessibilityCheck();
        psc04Page.cancelPscNameChange();

        psc04Page.changePscNationality();
        cy.accessibilityCheck();
        psc04Page.cancelPscNationalityChange();

        psc04Page.changePscCorrespondenceAddress();
        cy.accessibilityCheck();
        psc04Page.cancelPscCorrespondenceAddressChange();

        psc04Page.changePscHomeAddress();
        cy.accessibilityCheck();
        psc04Page.cancelPscHomeAddressChange();

        psc04Page.changeCountryOfResidence();
        cy.accessibilityCheck();
        psc04Page.cancelCountryOfResidenceChange();

        psc04Page.changeNatureOfControl();
        cy.accessibilityCheck();
        psc04Page.cancelNatureOfControlChange();

        // Date of change and register entry date sections are already expanded
        cy.accessibilityCheck();
    })

})