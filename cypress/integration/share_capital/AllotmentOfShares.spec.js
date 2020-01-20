import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllotmentOfSharesPreFilingPage from '../../support/page_objects/AllotmentOfSharesPreFilingPage'
import AllotmentOfSharesPage from '../../support/page_objects/AllotmentOfSharesPage'
import AddAllotmentPage from '../../support/page_objects/AddAllotmentPage'
import UpdateOrAmendCapitalPage from '../../support/page_objects/UpdateOrAmendCapitalPage'


describe('Return of allotment of shares - SH01', () => {
    it('SH01 Sucessful Submission', () => {
        const companyOverview = new CompanyOverviewPage();
        const allForms = new AllFormsPage();
        const allotmentOfSharesPreFilingPage = new AllotmentOfSharesPreFilingPage();
        const allotmentOfSharesPage = new AllotmentOfSharesPage();
        const addAllotmentPage = new AddAllotmentPage
        const submissionConfirmationPage =  new SubmissionConfirmationPage();
        const updateOrAmendCapitalPage = new UpdateOrAmendCapitalPage();

        // Select form from overview
        companyOverview.selectAllForms();
        allForms.selectShareCapitalForms()
        .selectSh01();

        // Check Allotment of shares pre-filing screen
        cy.accessibilityCheck();
        allotmentOfSharesPreFilingPage.startShareAllotment();

        // Allotment dates tab
        //cy.accessibilityCheck();
        allotmentOfSharesPage.selectPeriodStartDate();
        // Check accesibility after selecting the date
        //cy.accessibilityCheck();
        allotmentOfSharesPage.goToAllotmentOfSharesTab();

        // Allotment of shares tab 
        //cy.accessibilityCheck();
        allotmentOfSharesPage.addAllotmentLink();

        // Add allotment page
        cy.accessibilityCheck();
        addAllotmentPage.selectCurrency("AZN - Azerbaijanian Manat");
        cy.accessibilityCheck();
        addAllotmentPage.selectShareClass("A Ordinary");
        cy.accessibilityCheck();
        addAllotmentPage.enterNumberOfSharesAndNominalValue(1, 1);
        cy.accessibilityCheck();
        addAllotmentPage.enterSharePayments(1,0);
        cy.accessibilityCheck();
        addAllotmentPage.addAllotment();

        //Check the accessibility of the Allotment of shares tab with the newly added allotment displayed
        //cy.accessibilityCheck();
        allotmentOfSharesPage.goToStatementOfCapitalTab();

        // Statement of Capital tab
        //cy.accessibilityCheck();
        allotmentOfSharesPage.updateAmendCapitalLink();
    

        // Update or amend capital page
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.amendClassOfShare("A Ordinary");
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.expandNumberOfSharesAndNominalValue();
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.expandPrescribedParticulars();
        cy.accessibilityCheck();
        updateOrAmendCapitalPage.submitForm();

        // Amount Unpaid tab
        allotmentOfSharesPage.goToAmountUnpaidTab();
        cy.accessibilityCheck();
        allotmentOfSharesPage.enterTotalAggregateAmountUnpaid(0);
            
        // Submit and confirm submission
        allotmentOfSharesPage.submitShareAllotment();
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission')
        cy.accessibilityCheck();

    })
})