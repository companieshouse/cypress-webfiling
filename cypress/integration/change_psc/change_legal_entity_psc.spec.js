import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PscAppointment from '../../support/page_objects/generic/PscAppointment';
import AddressPage from '../../support/page_objects/generic/Address';
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import ChangeLegalEntityPsc from '../../support/page_objects/ChangeLegalEntityPsc';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const appointPSC02Page = new PscAppointment();
const addressPage = new AddressPage();
const preFilingPage = new PreFilingPSCPage();
const pscLandingPage = new PSCLandingPage();
const changeLegalEntityPsc = new ChangeLegalEntityPsc();


describe('Change of a relevant legal entity with significant control (PSC) details - PSC05', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC02 as a prerequisite');
        // Go to PSC02
        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.appointPsc02();
        preFilingPage.appointPsc();
        companyOverview.selectLinkWithText('Notification of a relevant legal entity with significant control (PSC)');

        // Appoint PSC02 - (No PSC data is baselined)
        cy.checkPageHeadingIs('Notification of a relevant legal entity with significant control (PSC)');
        appointPSC02Page.enterCorporateName("PKDFV LLP");
        addressPage.lookUpServiceAddress('10', 'CF14 3UZ');
        appointPSC02Page.enterEntityDetails('LLP', 'EU');
        appointPSC02Page.selectNatureOfControl();
        appointPSC02Page.selectTodayAsNotificationDate();
        appointPSC02Page.selectTodayAsRegisterEntryDate();
        appointPSC02Page.submitNotification();
        cy.checkPageHeadingIs('Confirmation of Submission');
        appointPSC02Page.clickCompanyOverview();
    })

    it('File successful PSC05', () => {
        // Go to PSC05
        companyOverview.selectAllForms();
        allForms.selectPscs().selectPsc05();
        // Check the appointed PSC is displayed
        cy.get('tbody tr td:nth-child(1)').should('contain', 'Pkdfv Llp')
        preFilingPage.selectPscToEdit('Pkdfv Llp');
        preFilingPage.changePsc05Details();

        // PSC05
        changeLegalEntityPsc.changePscName();
        cy.accessibilityCheck();
        changeLegalEntityPsc.changeNameCancel();

        changeLegalEntityPsc.changePscAddress()
        cy.accessibilityCheck();
        changeLegalEntityPsc.expandPscAddress();
        cy.accessibilityCheck();
        changeLegalEntityPsc.cancelPscAddressChange();

        changeLegalEntityPsc.changeEntityDetails();
        cy.accessibilityCheck();
        changeLegalEntityPsc.cancelEntityDetailsChange();

        changeLegalEntityPsc.changeNatureOfControl();
        cy.accessibilityCheck();
        changeLegalEntityPsc.cancelNatureOfControlChange();

        // Date of change and register entry date sections are already expanded
        cy.accessibilityCheck();

    })

})