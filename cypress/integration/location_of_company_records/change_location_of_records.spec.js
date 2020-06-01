import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import NotificationOfSailAndRegisterLocationPage from '../../support/page_objects/NotificationOfSailAndRegisterLocationPage';

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const notificationOfSailAndRegisterLocationPage = new NotificationOfSailAndRegisterLocationPage();



describe('AD02/03/04 - Notification of single alternative inspection location (SAIL) and change location of company records', () => {
    beforeEach(() => {
        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
            .selectAd02();
    })

    // Test accessibility after interacting with the screen but stop short of submitting the form
    it('AD02/AD03/AD04 - Notification of SAIL address and company registers location screen', () => {
        // These three forms link to the same screen so only a single test is required here.
        // First enter an invalid address to fire and check error messages
        notificationOfSailAndRegisterLocationPage.sailAddressManualEntryLink()
        .enterInvalidROAddress("`");
        cy.accessibilityCheck();
        notificationOfSailAndRegisterLocationPage.companyAddressContinue();
        cy.accessibilityCheck();

        notificationOfSailAndRegisterLocationPage.enterSailAddress("1", "CF14 3UZ");
        cy.accessibilityCheck();

        notificationOfSailAndRegisterLocationPage.changeLocationOfRegisters();
        cy.accessibilityCheck();

    })



})
