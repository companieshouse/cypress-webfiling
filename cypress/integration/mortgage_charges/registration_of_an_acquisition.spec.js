import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import RegisterMortgageChargeOrAcquisitionPage from '../../support/page_objects/RegisterMortgageChargeOrAcquisitionPage'
import PaymentSelectionPage from '../../support/page_objects/PaymentSelectionPage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const registerMortgageChargeOrAcquisitionPage = new RegisterMortgageChargeOrAcquisitionPage();
const paymentSelectionPage = new PaymentSelectionPage();
const successfulUploadFile = 'UploadSuccess.pdf';
const unsuccessfulUploadFile = 'UploadFail.pdf'

describe('Register an acquisition - MR02', () => {
    beforeEach('Select MR02 Form and navigate past pre-filing screen', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectMortgageForms()
            .selectMr02();

        //Check the register an acquisition pre-filing page
        cy.accessibilityCheck();
        registerMortgageChargeOrAcquisitionPage.proceedPastPreFilingScreen();

        //expands all fields on the page and perfoms accessibility check
        registerMortgageChargeOrAcquisitionPage.initialAccessibilityCheck()
    })

    it('MR02 - Registration of an acquisition successful', () => {
        registerMortgageChargeOrAcquisitionPage.selectTodayAsChargeCreationDate();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.selectTodayAsChargeAcquisitionDate();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.enterPersonsEntitled("Test Person");
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.enterChargeDescription("Test Description");
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.fileUpload(successfulUploadFile);
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.selectOtherChargeYes();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.selectFloatingChargeYesAll();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.selectNegativePledgeYes();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.selectTrusteeStatementYes();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.fileUpload(successfulUploadFile)
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.deedCertificationYes("Test Person");
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.authenticationofCertification();
        cy.accessibilityCheck();

        registerMortgageChargeOrAcquisitionPage.submitForm();
        // Select pay by account and check accessibility
        cy.checkPageHeadingIs('Payment');
        paymentSelectionPage.selectPaymentByAccount()
        .enterPresenterID().enterPresenterAuthcode()
        cy.accessibilityCheck();
        paymentSelectionPage.continue();

        //Check Submission screen
        submissionConfirmationPage.confirmHeadingContains("Confirmation of Submission and Payment");
        cy.accessibilityCheck();        
    })

    it('MR02 - Registration of an acquisition Error Validation', () => {
        // Upload a file that generates an error message for this section. 
        // Submit the form to generate the remaining errors for blank fields.
        // Expand all fields to ensure they are visible
        registerMortgageChargeOrAcquisitionPage.fileUpload(unsuccessfulUploadFile)
        .submitForm();
        // Check accessibility of errors without sections expanded    
        cy.accessibilityCheck();
        // Expand sections to check accessibility of page with all error messages displayed
        registerMortgageChargeOrAcquisitionPage.expandAll();
        cy.accessibilityCheck();
    })
})
