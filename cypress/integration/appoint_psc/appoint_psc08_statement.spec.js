import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PscStatmentPage from '../../support/page_objects/PscStatementPage';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage.js';

const companyOverview = new CompanyOverviewPage();
const pscLandingPage = new PSCLandingPage();
const pscStatementPage = new PscStatmentPage();
const submissionConfirmation = new SubmissionConfirmationPage();

describe('Notification of a PSC statement', () => {
    beforeEach('Go to PSC08 Form', () => {
        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Add a PSC notification');

        cy.accessibilityCheck();
        pscLandingPage.addPscStatement();

        // Check correct page is loaded
        cy.checkPageHeadingIs('Notification of a person with significant control (PSC) statement');
    })

    it('File successful PSC08', () => {

        // Repeated accessibility check calls for each section
        pscStatementPage.selectReason("The company believes it has a PSC but doesn't yet have the details");
        cy.accessibilityCheck();
        pscStatementPage.selectReasonContinue();

        pscStatementPage.selectStatement();
        cy.accessibilityCheck();
        pscStatementPage.selectStatementContinue();

        pscStatementPage.selectTodayAsRegisterEntryDate();
        cy.accessibilityCheck();
        pscStatementPage.selectRegisterEntryDateContinue();

        // Check disclaimer is correct
        cy.checkDisclaimer();
        cy.accessibilityCheck();

        pscStatementPage.submitForm();
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();
    })

    it('PSC08 Error message validation', () => {
        // Fire error messages and check their accessibility

        // No reason selected
        pscStatementPage.selectReasonContinue();
        cy.accessibilityCheck();

        // The company does not have a PSC
        pscStatementPage.selectReason("The company does not have a PSC")
            .selectReasonContinue()
            // Continue without selecting a statement and check
            .selectStatementContinue()
        cy.accessibilityCheck();


        // The company believes it has a PSC but doesn't yet have the details
        // Includes leaving register entry date blank to fire error (only necessary once 
        // as it's the same error for each reason).
        pscStatementPage.changeReason()
        pscStatementPage.selectReason("The company believes it has a PSC but doesn't yet have the details")
            .selectReasonContinue()
            // Continue without selecting a statement and check
            .selectStatementContinue()
        cy.accessibilityCheck();
        // Select statement, continue wiuthout selecting a register entry date and check
        pscStatementPage.selectStatement()
            .selectStatementContinue()
            .selectRegisterEntryDateContinue();
        cy.accessibilityCheck();


        // The company does not yet know if it has a PSC
        pscStatementPage.changeReason()
            .selectReason("The company does not yet know if it has a PSC")
            .selectReasonContinue()
            // Continue without selecting a statement and check
            .selectStatementContinue()
        cy.accessibilityCheck();

        // The company has issued a notice
        pscStatementPage.changeReason()
            .selectReason("The company has issued a notice")
            .selectReasonContinue()
            // Continue without selecting a statement and check
            .selectStatementContinue()
        cy.accessibilityCheck();

    })


})