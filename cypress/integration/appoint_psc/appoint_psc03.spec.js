import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';
import PscAppointment from '../../support/page_objects/generic/PscAppointment';

describe('Appoint a legal person PSC', () => {
    it('File successful PSC03', () => {

        const companyOverview = new CompanyOverviewPage();
        const preFilingPage = new PreFilingPSCPage();
        const appointPSC03Page = new PscAppointment();
        const pscLandingPage = new PSCLandingPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.appointPsc03();

        cy.accessibilityCheck();
        preFilingPage.appointPsc();

         // Check correct page is loaded
         cy.checkPageHeadingIs('Notification of a legal person with significant control (PSC)');
         cy.accessibilityCheck();

         appointPSC03Page.enterCorporateName("AAPV LTD");

         cy.accessibilityCheck();
         appointPSC03Page.lookupServiceAddress('1', 'CF14 3UZ');
 
         cy.accessibilityCheck();
         appointPSC03Page.enterEntityDetails('LTD', 'US');
 
         cy.accessibilityCheck();
         appointPSC03Page.selectNatureOfControl();
 
         cy.accessibilityCheck();
         appointPSC03Page.selectTodayAsNotificationDate();
 
         cy.accessibilityCheck();
         appointPSC03Page.selectTodayAsRegisterEntryDate();
 
         // Check disclaimer is correct
         cy.checkDisclaimer();
 
     })
 
 })