import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import WithdrawApplicationToStrikeOffPage from '../../support/page_objects/WithdrawApplicationToStrikeOffPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'


describe('Withdrawal of application to strike off - DS02', () => {
    it('DS02 Sucessful Submission after validating error message', () => {
        const companyOverview = new CompanyOverviewPage();
        const allForms = new AllFormsPage();
        const withdrawApplication = new WithdrawApplicationToStrikeOffPage();
        const submissionConfirmationPage =  new SubmissionConfirmationPage();

        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectStrikeOffAndDissolution()
        .selectDs02();

        // Check screen prior to interacting with it
        cy.accessibilityCheck();

        // Submit form without ticking the checkbox to fire error message
        withdrawApplication.submitForm();
        // Accessibility check on the error message
        cy.accessibilityCheck();

        //Re-submit after ticking the checkbox
        withdrawApplication.confirmApplicationWithdrawal()
        .submitForm();
            
        // Confirm submission
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();
    })
})