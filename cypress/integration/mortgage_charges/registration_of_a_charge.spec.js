import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import MortgagePreFilingPage from '../../support/page_objects/MortgagePreFilingPage'
import RegisterMortgageChargeOrAcquisitionPage from '../../support/page_objects/RegisterMortgageChargeOrAcquisitionPage'
import PaymentSelectionPage from '../../support/page_objects/PaymentSelectionPage'

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const mortgagePreFilingPage = new MortgagePreFilingPage
const submissionConfirmationPage = new SubmissionConfirmationPage();
const registerMortgageChargeOrAcquisitionPage = new RegisterMortgageChargeOrAcquisitionPage();
const paymentSelectionPage = new PaymentSelectionPage();
const successfulUploadFile = 'UploadSuccess.pdf';
const unsuccessfulUploadFile = 'UploadFail.pdf'

describe('Register a charge - MR01', () => {
    beforeEach('Select MR01 Form and navigate past pre-filing screen', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectMortgageForms()
            .selectMr01();

        //Check the register a charge pre-filing page
        cy.accessibilityCheck();
        mortgagePreFilingPage.proceedWithFiling();

        //expands all fields on the page and perfoms accessibility check
        registerMortgageChargeOrAcquisitionPage.initialAccessibilityCheck()
    })

    it('MR01 - Registration of a charge successful', () => {
        registerMortgageChargeOrAcquisitionPage.selectTodayAsChargeCreationDate();
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

    it('MR01 - Registration of a charge Error Validation', () => {
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
