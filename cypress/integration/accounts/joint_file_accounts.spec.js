import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import AccountsLandingPage from '../../support/page_objects/AccountsLandingPage';

const companyOverview = new CompanyOverviewPage();
const allForms = new AllFormsPage();
const accountsLandingPage = new AccountsLandingPage();

describe('Joint file accounts with Companies House and HM Revenue & Customs', () => {
    beforeEach('Select full accounts with Companies House and HMRC from overview', () => {
        // Select form overview
        companyOverview.selectLinkWithText("File company accounts")
        cy.accessibilityCheck();
        accountsLandingPage.fileJointAccounts();
    })

    it('Check the joint file accounts landing page', () => {
        // You can't proceed any further on the EWF system here. Filing accounts takes the
        // user to external sites. So a simple accessibility check will suffice for this test.
        cy.accessibilityCheck();
    })

    it('Check the joint filing information screen', () => {
        cy.visit('/help/en/stdwf/informationOnHowJointFilingWorks.html');
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })

    it('Check accounts exception screen', () => {
        cy.visit('/help/en/stdwf/accountsExceptions.html');
        cy.accessibilityCheck();
        // Go back to company overview screen to exit the test
        cy.visit('/profile');
    })
})
