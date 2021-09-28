import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ChangeOfAccountingReferenceDatePage from '../../support/page_objects/ChangeOfAccountingReferenceDatePage';
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage';
import ConfirmChangeOfAccountingReferenceDate from '../../support/page_objects/ConfirmChangeOfAccountingReferenceDate';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const changeOfAccountingReferenceDatePage = new ChangeOfAccountingReferenceDatePage();
const submissionConfirmation = new SubmissionConfirmationPage();
const confirmChangeOfaccountingReferenceDate =  new ConfirmChangeOfAccountingReferenceDate();

describe('Change of Accounting Reference Date - AA01', () => {
    beforeEach('Select AA01 Form from overview', () => {
        // Select form overview
        companyOverview.selectAllForms();
        allForms.selectConfirmationStatementAndAccounts()
            .selectAA01();
    })

    it('AA01 - Change of Accounting Reference Date', () => {
        //Check the AA01 Change of Accounting Reference Date Page
        cy.accessibilityCheck();
        cy.log('First submit');
        changeOfAccountingReferenceDatePage.selectCurrentAccountingPeriod()
        .enterNewAccountingReferenceDate(Cypress.moment().format('DD/MM/YYYY'))
        .confirmForm();
        //Check confirm Confirm change of accounting reference date
        cy.accessibilityCheck();
        cy.log('Second submit');
        confirmChangeOfaccountingReferenceDate.submitForm();
        //Check the Contact details and authorisation page
        cy.accessibilityCheck();
        cy.log('Third submit');
        confirmChangeOfaccountingReferenceDate.submitForm();
        // Check the AA01 submission confiration screen
        cy.accessibilityCheck();
        submissionConfirmation.confirmHeadingContains('WebFiling Service Confirmation').done();        
    })

    it('AA01 - Change of Accounting Reference Date Error Validation', () => {
        // Submit without entering information to fire error messages
        // and check the accessibility of the error messages. End the test here. 
        // There is nothing to validate on the next screen. It is purely for confirmation purposes  
        changeOfAccountingReferenceDatePage.confirmForm();
        cy.accessibilityCheck();
           
    })
})
